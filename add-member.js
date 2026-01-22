/**
 * Add Member Modal Logic
 */
function initAddMemberModal() {
    const modal = document.getElementById('add-member-modal');
    const openBtn = document.getElementById('open-add-member');
    const closeBtn = document.getElementById('close-modal');
    const cancelBtn = document.getElementById('cancel-add');
    const form = document.getElementById('add-member-form');
    const parentSelect = document.getElementById('new-parent');
    const childSelect = document.getElementById('new-child');

    if (!modal || !openBtn || !closeBtn || !cancelBtn || !form || !parentSelect || !childSelect) {
        console.error('Add Member Modal: Required elements not found');
        return;
    }

    // Populate dropdowns with all family members
    function populateDropdowns() {
        // Clear both
        parentSelect.innerHTML = '<option value="">Select Parent...</option>';
        childSelect.innerHTML = '<option value="">Select Kid...</option>';

        const allMembers = [];

        function collectMembers(member, lineageIndex, mainNode = null) {
            // Add self
            allMembers.push({
                name: member.name,
                role: member.role,
                lineageIndex: lineageIndex,
                member: member,
                mainNode: mainNode || member
            });

            // Add Partners
            if (member.partner) {
                collectMembers(member.partner, lineageIndex, member);
            }
            if (member.secondPartner) {
                collectMembers(member.secondPartner, lineageIndex, member);
            }

            if (member.children) {
                member.children.forEach(child => collectMembers(child, lineageIndex));
            }
        }

        if (familyData && familyData.children) {
            familyData.children.forEach((lineage, index) => {
                collectMembers(lineage, index);
            });
        }

        // Fill options
        allMembers.forEach(item => {
            const valueStr = JSON.stringify({
                name: item.name,
                lineageIndex: item.lineageIndex,
                mainNodeName: item.mainNode ? item.mainNode.name : item.name
            });
            const textContent = `${item.name} (${item.role})`;

            // Option for Parent Select
            const optionP = document.createElement('option');
            optionP.value = valueStr;
            optionP.textContent = textContent;
            parentSelect.appendChild(optionP);

            // Option for Child Select
            const optionC = document.createElement('option');
            optionC.value = valueStr;
            optionC.textContent = textContent;
            childSelect.appendChild(optionC);
        });
    }

    // Event Listeners for Exclusivity
    parentSelect.addEventListener('change', () => {
        if (parentSelect.value) childSelect.value = "";
    });

    childSelect.addEventListener('change', () => {
        if (childSelect.value) parentSelect.value = "";
    });

    // Open modal
    openBtn.addEventListener('click', () => {
        populateDropdowns();
        modal.classList.add('active');
    });

    // Close modal
    function closeModal() {
        modal.classList.remove('active');
        form.reset();
    }

    closeBtn.addEventListener('click', closeModal);
    cancelBtn.addEventListener('click', closeModal);

    // Close on outside click
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });

    // Geocode location using Nominatim API
    async function geocodeLocation(locationString) {
        try {
            const response = await fetch(
                `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(locationString)}&limit=1`
            );
            const data = await response.json();

            if (data && data.length > 0) {
                return {
                    coords: [parseFloat(data[0].lat), parseFloat(data[0].lon)],
                    locationName: data[0].display_name
                };
            }
            return null;
        } catch (error) {
            console.error('Geocoding error:', error);
            return null;
        }
    }

    // Find member + container in tree
    function findMemberAndContainer(name, lineageIndex) {
        if (!familyData.children || !familyData.children[lineageIndex]) return null;

        const root = familyData.children[lineageIndex];

        // Check if it's the root of the lineage
        if (root.name === name) {
            return {
                node: root,
                container: familyData.children,
                index: lineageIndex
            };
        }

        // Recursive search in children
        function search(node) {
            if (node.children) {
                for (let i = 0; i < node.children.length; i++) {
                    const child = node.children[i];
                    if (child.name === name) {
                        return { node: child, container: node.children, index: i };
                    }
                    const found = search(child);
                    if (found) return found;
                }
            }
            return null;
        }

        return search(root);
    }

    // Handle form submission
    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        const name = document.getElementById('new-name').value.trim();
        const age = document.getElementById('new-age').value.trim();
        const location = document.getElementById('new-location').value.trim();

        const parentVal = parentSelect.value;
        const childVal = childSelect.value;

        if (!parentVal && !childVal) {
            alert('Please select either a Parent OR a Kid to link to.');
            return;
        }

        // Show loading state
        const submitBtn = form.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Adding...';
        submitBtn.disabled = true;

        try {
            // Geocode the location
            const geoData = await geocodeLocation(location);

            // Create new member object
            const newMember = {
                name: name,
                role: age.startsWith('G') ? `${age}: New Member` : `G5: Age ${age}`,
                image: "",
                children: []
            };

            // Add coordinates if geocoding was successful
            if (geoData) {
                newMember.coords = geoData.coords;
                newMember.locationName = geoData.locationName;
            }

            let success = false;

            if (parentVal) {
                // --- MODE 1: Add as Child ---
                const parentData = JSON.parse(parentVal);
                // Use mainNodeName to ensure we attach to the structural node
                const targetName = parentData.mainNodeName || parentData.name;
                const result = findMemberAndContainer(targetName, parentData.lineageIndex);

                if (result && result.node) {
                    const parentNode = result.node;
                    if (!parentNode.children) parentNode.children = [];
                    parentNode.children.push(newMember);
                    success = true;
                }

            } else if (childVal) {
                // --- MODE 2: Add as Parent ---
                const kidData = JSON.parse(childVal);
                // Use mainNodeName
                const targetName = kidData.mainNodeName || kidData.name;
                const result = findMemberAndContainer(targetName, kidData.lineageIndex);

                if (result && result.node && result.container) {
                    const { node: kidNode, container, index } = result;

                    // 1. New Member adopts the Kid
                    newMember.children.push(kidNode);

                    // 2. Container replaces Kid with New Member
                    container[index] = newMember;
                    success = true;
                }
            }

            if (success) {
                // Re-render the tree
                renderTree();

                // Re-initialize controls to update search
                initControls();

                // Update map if it's initialized
                if (typeof mapInitialized !== 'undefined' && mapInitialized && geoData) {
                    addMarkersToMap(newMember);
                }

                // Show success and close modal
                alert(`✅ ${name} has been added to the family tree!`);
                closeModal();

                // Scroll to the new member
                setTimeout(() => {
                    const idSafeName = name.replace(/\s+/g, '-').toLowerCase();
                    const newCard = document.getElementById('member-' + idSafeName);
                    if (newCard) {
                        newCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
                        newCard.classList.add('spotlight');
                        setTimeout(() => newCard.classList.remove('spotlight'), 3000);
                    }
                }, 500);

            } else {
                alert('❌ Could not find the selected family member to link to. Please try again.');
            }

        } catch (error) {
            console.error('Error adding member:', error);
            alert('❌ An error occurred while adding the member. Please try again.');
        } finally {
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }
    });
}


