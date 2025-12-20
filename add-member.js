
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

    // Populate parent dropdown with all family members
    function populateParentDropdown() {
        parentSelect.innerHTML = '<option value="">Select Parent...</option>';

        const allMembers = [];

        function collectMembers(member, lineageIndex) {
            allMembers.push({
                name: member.name,
                role: member.role,
                lineageIndex: lineageIndex,
                member: member
            });

            if (member.children) {
                member.children.forEach(child => collectMembers(child, lineageIndex));
            }
        }

        familyData.children.forEach((lineage, index) => {
            collectMembers(lineage, index);
        });

        allMembers.forEach(item => {
            const option = document.createElement('option');
            option.value = JSON.stringify({
                name: item.name,
                lineageIndex: item.lineageIndex
            });
            option.textContent = `${item.name} (${item.role})`;
            parentSelect.appendChild(option);
        });
    }

    // Open modal
    openBtn.addEventListener('click', () => {
        populateParentDropdown();
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

    // Find member in tree by name
    function findMemberByName(name, lineageIndex) {
        function search(member) {
            if (member.name === name) {
                return member;
            }
            if (member.children) {
                for (let child of member.children) {
                    const found = search(child);
                    if (found) return found;
                }
            }
            return null;
        }

        return search(familyData.children[lineageIndex]);
    }

    // Handle form submission
    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        const name = document.getElementById('new-name').value.trim();
        const age = document.getElementById('new-age').value.trim();
        const location = document.getElementById('new-location').value.trim();
        const parentData = JSON.parse(parentSelect.value);

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

            // Find parent and add new member
            const parent = findMemberByName(parentData.name, parentData.lineageIndex);
            if (parent) {
                if (!parent.children) {
                    parent.children = [];
                }
                parent.children.push(newMember);

                // Re-render the tree
                renderTree();

                // Re-initialize controls to update search
                initControls();

                // Update map if it's initialized
                if (mapInitialized && geoData) {
                    addMarkersToMap(newMember);
                }

                // Show success and close modal
                alert(`✅ ${name} has been added to the family tree!`);
                closeModal();

                // Scroll to the new member
                setTimeout(() => {
                    const newCard = document.getElementById('member-' + name.replace(/\s+/g, '-').toLowerCase());
                    if (newCard) {
                        const scrollToElement = (element) => {
                            const viewport = document.querySelector('.tree-viewport');
                            if (!element || !viewport) return;

                            element.classList.add('spotlight');

                            const viewportRect = viewport.getBoundingClientRect();
                            const elementRect = element.getBoundingClientRect();

                            const elementCenterX = elementRect.left + (elementRect.width / 2);
                            const elementCenterY = elementRect.top + (elementRect.height / 2);

                            const viewportCenterX = viewportRect.left + (viewportRect.width / 2);
                            const viewportCenterY = viewportRect.top + (viewportRect.height / 2);

                            const screenDeltaX = elementCenterX - viewportCenterX;
                            const screenDeltaY = elementCenterY - viewportCenterY;

                            viewport.scrollBy({
                                left: screenDeltaX / zoomLevel,
                                top: screenDeltaY / zoomLevel,
                                behavior: 'smooth'
                            });

                            setTimeout(() => element.classList.remove('spotlight'), 3000);
                        };

                        scrollToElement(newCard);
                    }
                }, 500);
            } else {
                alert('❌ Could not find parent member. Please try again.');
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
