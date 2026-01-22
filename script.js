/**
 * Family Tree Data Structure
 */

function getDynamicAge(birthDateString) {
    const today = new Date();
    const birthDate = new Date(birthDateString);
    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    if (months < 0 || (months === 0 && today.getDate() < birthDate.getDate())) {
        years--;
        months += 12;
    }
    // Adjust months if days are less
    if (today.getDate() < birthDate.getDate()) {
        months--;
        if (months < 0) {
            months += 12;
            // years is already adjusted above if months < 0
        }
    }

    // Return formatted string
    if (months === 0) return `(Age ${years})`;
    if (months === 6) return `(Age ${years}.5)`;
    return `(Age ${years} & ${months} months)`;
}

let rimonGivonData = {};

fetch('family_data.json')
    .then(response => response.json())
    .then(data => {
        rimonGivonData = data;
        // If the tree hasn't been switched yet or is using the empty init, update it
        if (typeof switchTree === 'function') {
             // Re-trigger the current view to ensure data is loaded
             const selector = document.getElementById('tree-selector');
             const currentKey = selector ? selector.value : 'rimon';
             switchTree(currentKey);
        }
    })
    .catch(err => console.error("Error loading family data:", err));

// -- DYNAMIC TREE SWITCHING LOGIC --
let familyData = rimonGivonData;

function switchTree(treeKey) {
    console.log("Switching tree to:", treeKey);
    if (treeKey === 'rimon') familyData = rimonGivonData;
    else if (treeKey === 'dc') familyData = (typeof dcTreeData !== 'undefined') ? dcTreeData : rimonGivonData;
    else if (treeKey === 'gods') familyData = (typeof godsTreeData !== 'undefined') ? godsTreeData : rimonGivonData;

    // 1. Re-render Tree
    renderTree();

    // 2. Clear Search Results
    const searchResults = document.getElementById('search-results');
    if (searchResults) searchResults.innerHTML = '';
    const searchInput = document.getElementById('member-search');
    if (searchInput) searchInput.value = '';

    // 3. Re-render Map
    if (typeof map !== 'undefined' && map) {
        // Remove all markers
        map.eachLayer((layer) => {
            if (layer instanceof L.Marker) {
                map.removeLayer(layer);
            }
        });

        // Add new markers
        if (typeof addMarkersToMap === 'function') {
            addMarkersToMap(familyData);
        }

        // Add historical locations only for the main family
        if (treeKey === 'rimon' && typeof addHistoricalLocations === 'function') {
            addHistoricalLocations();
        }
    }

    // 4. Reset View
    setTimeout(centerTree, 100);
}


/**
 * Helper to create a single card DOM element
 */
function createCard(member) {
    const card = document.createElement('div');
    // Unique ID for searching and jumping
    card.id = 'member-' + member.name.replace(/\s+/g, '-').toLowerCase();

    let cardClass = 'member-card';
    if (member.type === 'venture') cardClass += ' venture-card';
    if (member.role && member.role.includes('(Deceased)')) cardClass += ' deceased';
    card.className = cardClass;

    const inner = document.createElement('div');
    inner.className = 'card-inner';

    // FRONT
    const front = document.createElement('div');
    front.className = 'card-front';

    // Image Placeholder
    const imgContainer = document.createElement('div');
    imgContainer.className = 'image-placeholder';
    if (member.image) {
        const img = document.createElement('img');
        img.src = member.image;
        img.alt = member.name;
        imgContainer.appendChild(img);
    } else {
        // Icon logic
        let iconPath = "M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"; // Default user
        let iconCircle = '<circle cx="12" cy="7" r="4"></circle>';

        if (member.type === 'venture') {
            // DNA/Biology icon for biotech (abstract)
            iconPath = "M2 15c6.667-6 13.333 0 20-6";
            iconCircle = '<path d="M9 22c6.667-6 13.333 0 20-6"></path>';
        }

        imgContainer.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="${member.type === 'venture' ? '#38bdf8' : '#94a3b8'}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="${iconPath}"></path>
                ${iconCircle}
            </svg>
        `;
    }

    // Text Content
    const nameData = document.createElement('div');
    nameData.className = 'member-name';

    // Format name to break parenthetical surnames to new line
    let formattedName = member.name;
    if (formattedName.includes('(') && formattedName.includes(')')) {
        // Find the last parenthetical part (surname)
        const lastParenIndex = formattedName.lastIndexOf('(');
        if (lastParenIndex > 0) {
            const beforeParen = formattedName.substring(0, lastParenIndex).trim();
            const parenPart = formattedName.substring(lastParenIndex).trim();
            formattedName = beforeParen + '\n' + parenPart;
        }
    }
    nameData.textContent = formattedName;

    const roleData = document.createElement('div');
    roleData.className = 'member-role';
    
    let fullRole = member.role;
    if (member.birthDate) {
        fullRole += "\n" + getDynamicAge(member.birthDate);
    }
    roleData.innerText = fullRole;


    front.appendChild(imgContainer);
    front.appendChild(nameData);
    front.appendChild(roleData);

    // BACK
    const back = document.createElement('div');
    back.className = 'card-back';

    const backTitle = document.createElement('div');
    backTitle.className = 'member-name';
    backTitle.textContent = "Legacy Details";
    backTitle.style.fontSize = '1rem';
    backTitle.style.marginBottom = '1rem';

    const backInfo = document.createElement('div');
    backInfo.className = 'member-role';
    backInfo.textContent = member.description || `Part of the ${member.role} lineage and the core of the Rimon-Givon story.`;

    back.appendChild(backTitle);
    back.appendChild(backInfo);

    inner.appendChild(front);
    inner.appendChild(back);
    card.appendChild(inner);

    return card;
}

function createTreeElement(member) {
    const li = document.createElement('li');

    // Create container for the node (Single or Couple)
    const nodeContainer = document.createElement('div');
    nodeContainer.className = 'node-container';

    // 1. Determine card order (Spouse Left or Blood Relative Left)
    const mainCard = createCard(member);

    if (member.partner) {
        const partnerCard = createCard(member.partner);
        const connector = document.createElement('div');
        connector.className = 'spouse-connector';

        if (member.partnerLeft) {
            nodeContainer.appendChild(partnerCard);
            nodeContainer.appendChild(connector);
            nodeContainer.appendChild(mainCard);
        } else {
            nodeContainer.appendChild(mainCard);
            nodeContainer.appendChild(connector);
            nodeContainer.appendChild(partnerCard);
        }
    } else {
        nodeContainer.appendChild(mainCard);
    }

    // Add second partner if it exists (for multiple marriages)
    if (member.secondPartner) {
        const secondPartnerCard = createCard(member.secondPartner);
        const secondConnector = document.createElement('div');
        secondConnector.className = 'spouse-connector';
        nodeContainer.appendChild(secondConnector);
        nodeContainer.appendChild(secondPartnerCard);
    }

    li.appendChild(nodeContainer);

    // Recursively render children
    if (member.children && member.children.length > 0) {
        const ul = document.createElement('ul');
        member.children.forEach(child => {
            ul.appendChild(createTreeElement(child));
        });
        li.appendChild(ul);
    }

    return li;
}

function renderNavigation() {
    const navContainer = document.getElementById('lineage-nav-buttons');
    if (!navContainer || !familyData.children) return;

    navContainer.innerHTML = '';
    familyData.children.forEach((lineage, index) => {
        const btn = document.createElement('button');
        btn.className = 'nav-jump-btn';
        btn.dataset.lineage = index;

        // Use Surname for label if available, otherwise strip 'City', 'Labs', 'The' etc.
        const fullName = lineage.name || `Lineage ${index + 1}`;
        let label = lineage.surname;

        if (!label) {
            const cleanName = fullName.replace(/^The\s+/i, '');
            const parts = cleanName.split(' ');
            if (parts.length > 1) {
                const lastWord = parts[parts.length - 1].toLowerCase();
                if (['city', 'labs', 'family', 'legacy', 'team'].includes(lastWord)) {
                    label = parts[0]; // Use first word for places/teams: "Gotham", "Central", "S.T.A.R."
                } else {
                    label = parts[parts.length - 1]; // Use last word for human names: "Granat", "Zoref"
                }
            } else {
                label = cleanName;
            }
        }

        btn.textContent = label;
        btn.title = fullName; // Show full name on hover
        navContainer.appendChild(btn);
    });
}

function renderTree() {
    const container = document.getElementById('family-tree');
    if (!container) return;
    container.innerHTML = ''; // Clear previous content

    // Render navigation buttons based on current lineages
    renderNavigation();

    // Render each main lineage as its own independent tree
    if (familyData.children) {
        familyData.children.forEach((lineage, index) => {
            const lineageSection = document.createElement('div');
            lineageSection.className = 'lineage-section';
            lineageSection.id = `lineage-section-${index}`; // Add unique ID for finding by index
            // store the lineage name to make navigation robust to ordering
            lineageSection.dataset.lineageName = (lineage.name || '').toLowerCase();

            const rootUl = document.createElement('ul');
            rootUl.className = 'tree';

            rootUl.appendChild(createTreeElement(lineage));
            lineageSection.appendChild(rootUl);
            container.appendChild(lineageSection);
        });
    }
}

// Initialize everything
document.addEventListener('DOMContentLoaded', () => {
    console.log('Family Tree Application Starting...');
    renderTree();
    initControls();
    initTabs();
    initAddMemberModal();

    // Initial centering of the tree
    centerTree();
    console.log('Family Tree Application Loaded Successfully');
});

window.addEventListener('resize', centerTree);

function centerTree() {
    const treeContainer = document.getElementById('family-tree');
    const viewport = document.querySelector('.tree-viewport');
    if (!treeContainer || !viewport) return;

    // Wait for a tiny bit to ensure DOM is ready
    setTimeout(() => {
        const viewportWidth = viewport.clientWidth;
        const viewportHeight = viewport.clientHeight;
        const treeWidth = treeContainer.scrollWidth * zoomLevel;
        const treeHeight = treeContainer.scrollHeight * zoomLevel;

        viewport.scrollLeft = (treeWidth - viewportWidth) / 2;
        viewport.scrollTop = 0; // Start at the patriarchs
    }, 100);
}

/**
 * Zoom and Pan Logic
 * Allows users to zoom in/out and drag to move the tree
 */
let zoomLevel = 1;

function initControls() {
    const treeSelector = document.getElementById('tree-selector');
    if (treeSelector) {
        treeSelector.addEventListener('change', (e) => {
            switchTree(e.target.value);
        });
    }
    const treeContainer = document.getElementById('family-tree');
    const viewport = document.querySelector('.tree-viewport');
    const zoomInBtn = document.getElementById('zoom-in');
    const zoomOutBtn = document.getElementById('zoom-out');
    const zoomResetBtn = document.getElementById('zoom-reset');
    const exportGedcomBtn = document.getElementById('export-gedcom');
    const importGedcomBtn = document.getElementById('import-gedcom');
    const gedcomFileInput = document.getElementById('gedcom-file-input');
    const searchInput = document.getElementById('member-search');
    const searchResults = document.getElementById('search-results');

    if (!treeContainer || !viewport || !zoomResetBtn) return;

    // --- GEDCOM Import Logic ---
    if (importGedcomBtn && gedcomFileInput) {
        importGedcomBtn.addEventListener('click', () => gedcomFileInput.click());

        gedcomFileInput.addEventListener('change', (e) => {
            const file = e.target.files[0];
            if (!file) return;

            const reader = new FileReader();
            reader.onload = function (evt) {
                try {
                    const content = evt.target.result;
                    const newTree = parseGedcom(content);
                    if (newTree && newTree.children && newTree.children.length > 0) {
                        // Update Data
                        Object.assign(familyData, newTree);
                        // Re-render
                        renderTree();
                        alert(`Successfully imported family tree with ${newTree.children.length} main lineages!`);
                    } else {
                        alert("Could not parse a valid family tree from this file.");
                    }
                } catch (err) {
                    console.error("Import Error:", err);
                    alert("Error importing GEDCOM file. Check console for details.");
                }
            };
            reader.readAsText(file);
        });
    }

    const updateZoom = () => {
        treeContainer.style.transform = `scale(${zoomLevel})`;
    };

    const scrollToElement = (element) => {
        if (!element) return;

        element.classList.add('spotlight');

        // Use scrollIntoView for reliable centering
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'center',
            inline: 'center'
        });

        setTimeout(() => element.classList.remove('spotlight'), 3000);
    };

    // --- Search Logic ---
    if (searchInput && searchResults) {
        searchInput.addEventListener('input', (e) => {
            const query = e.target.value.toLowerCase().trim();
            searchResults.innerHTML = '';

            if (query.length < 1) {
                searchResults.style.display = 'none';
                return;
            }

            const matches = [];
            const seen = new Set();
            const cards = document.querySelectorAll('.member-card');

            cards.forEach(card => {
                const nameEl = card.querySelector('.member-name');
                const roleEl = card.querySelector('.member-role');

                if (nameEl && nameEl.textContent.toLowerCase().includes(query)) {
                    const name = nameEl.textContent;
                    const role = roleEl ? roleEl.textContent : 'Family Member';

                    // Use name as unique key to prevent duplicates
                    if (!seen.has(name)) {
                        seen.add(name);

                        // Find lineage
                        const section = card.closest('.lineage-section');
                        let lineage = 'Family';
                        if (section && section.dataset.lineageName) {
                            const rawName = section.dataset.lineageName;
                            lineage = rawName.charAt(0).toUpperCase() + rawName.slice(1);
                        }

                        matches.push({ name, role, lineage, element: card });
                    }
                }
            });

            if (matches.length > 0) {
                searchResults.style.display = 'block';
                matches.slice(0, 10).forEach(match => {
                    const div = document.createElement('div');
                    div.className = 'search-result-item';

                    div.innerHTML = `
                        <div style="display: flex; justify-content: space-between; align-items: center;">
                            <strong>${match.name}</strong>
                            <span style="font-size: 0.7rem; background: rgba(56, 189, 248, 0.2); color: var(--accent-color); padding: 2px 6px; border-radius: 10px;">${match.lineage}</span>
                        </div>
                        <small style="opacity:0.7">${match.role}</small>
                    `;
                    div.onclick = () => {
                        scrollToElement(match.element);
                        searchResults.style.display = 'none';
                        searchInput.value = '';
                    };
                    searchResults.appendChild(div);
                });
            } else {
                searchResults.style.display = 'none';
            }
        });
    }

    // Close search on click outside
    document.addEventListener('click', (e) => {
        if (searchResults && !e.target.closest('.search-wrapper')) {
            searchResults.style.display = 'none';
        }
    });

    // Close search on escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && searchResults) {
            searchResults.style.display = 'none';
            if (searchInput) searchInput.value = '';
        }
    });

    // --- Dynamic Lineage Navigation (Event Delegation) ---
    document.addEventListener('click', (e) => {
        const btn = e.target.closest('.nav-jump-btn');
        if (!btn) return;

        const index = parseInt(btn.dataset.lineage);
        const sections = document.querySelectorAll('.lineage-section');
        const navBtns = document.querySelectorAll('.nav-jump-btn');

        // Try matching by lineage name first (more robust), fallback to index
        const btnName = (btn.textContent || '').trim().toLowerCase();
        let targetSection = Array.from(sections).find(s => {
            const secName = (s.dataset.lineageName || '').trim().toLowerCase();
            return secName === btnName || secName.includes(btnName) || btnName.includes(secName);
        });

        // Fallback: Use direct ID lookup if name match fails
        if (!targetSection) {
            targetSection = document.getElementById(`lineage-section-${index}`);
        }

        if (targetSection) {
            navBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            // Focus the root card of this lineage in Tree View
            const rootCard = targetSection.querySelector('.member-card');
            scrollToElement(rootCard);

            // Auto-Zoom on Map if initialized
            if (mapInitialized && map) {
                const lineageData = familyData.children[index];
                if (lineageData && lineageData.coords) {
                    map.flyTo(lineageData.coords, 14, { animate: true, duration: 1.5 });
                }
            }

            // Update hash for mobile sharing
            window.location.hash = `lineage-${index}`;
        } else if (sections[index]) {
            // Fallback: If name matching failed, trust the index 100%
            targetSection = sections[index];
            navBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const rootCard = targetSection.querySelector('.member-card');
            scrollToElement(rootCard);

            // Auto-Zoom on Map if initialized
            if (mapInitialized && map) {
                const lineageData = familyData.children[index];
                if (lineageData && lineageData.coords) {
                    map.flyTo(lineageData.coords, 14, { animate: true, duration: 1.5 });
                }
            }

            // Update hash for mobile sharing
            window.location.hash = `lineage-${index}`;
        }
    });

    // --- Generation Navigation ---
    const genBtns = document.querySelectorAll('.nav-gen-btn');
    genBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const genTag = btn.dataset.gen; // "G0" or "G5"
            let cards = Array.from(document.querySelectorAll('.member-card'));

            let target;

            if (genTag === 'G0') {
                // Roots: Find the oldest generation (G-2, G-1, G0)
                const rootGenerations = ['G-2:', 'G-1:', 'G0:'];
                for (const gen of rootGenerations) {
                    target = cards.find(card => {
                        const roleEl = card.querySelector('.member-role');
                        const role = roleEl ? roleEl.textContent : '';
                        return role.includes(gen);
                    });
                    if (target) break;
                }
            } else if (genTag === 'G5') {
                // Latest: Find youngest person by age
                let youngestAge = Infinity;
                cards.forEach(card => {
                    const roleEl = card.querySelector('.member-role');
                    const role = roleEl ? roleEl.textContent : '';

                    // Look for age patterns like "Age 1.5", "Age 2", etc.
                    const ageMatch = role.match(/Age (\d+(?:\.\d+)?)/i);
                    if (ageMatch) {
                        const age = parseFloat(ageMatch[1]);
                        if (age < youngestAge) {
                            youngestAge = age;
                            target = card;
                        }
                    }
                });

                // If no age found, fallback to Ana Rimon or any G5
                if (!target) {
                    target = cards.find(c => {
                        const nameEl = c.querySelector('.member-name');
                        return nameEl && nameEl.textContent.includes('Ana Rimon');
                    });
                }
            }

            if (target) {
                genBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                scrollToElement(target);
            }
        });
    });

    // --- Mousewheel Zoom ---
    viewport.addEventListener('wheel', (e) => {
        if (e.ctrlKey || e.metaKey) {
            e.preventDefault();
            const delta = e.deltaY > 0 ? -0.05 : 0.05;
            zoomLevel = Math.max(0.1, Math.min(2.5, zoomLevel + delta));
            updateZoom();
        }
    }, { passive: false });

    // --- Button Zoom ---
    zoomInBtn.addEventListener('click', () => {
        zoomLevel = Math.min(zoomLevel + 0.1, 2.5);
        updateZoom();
    });

    zoomOutBtn.addEventListener('click', () => {
        zoomLevel = Math.max(zoomLevel - 0.1, 0.1);
        updateZoom();
    });

    zoomResetBtn.addEventListener('click', () => {
        zoomLevel = 1;
        updateZoom();
        centerTree();
    });

    exportGedcomBtn.addEventListener('click', () => {
        exportToGedcom();
    });

    // --- Keyboard Navigation ---
    const moveStep = 40;
    window.addEventListener('keydown', (e) => {
        if (document.getElementById('tree-section').classList.contains('active') && document.activeElement !== searchInput) {
            switch (e.key.toLowerCase()) {
                case 'arrowup':
                case 'w': viewport.scrollTop -= moveStep; break;
                case 'arrowdown':
                case 's': viewport.scrollTop += moveStep; break;
                case 'arrowleft':
                case 'a': viewport.scrollLeft -= moveStep; break;
                case 'arrowright':
                case 'd': viewport.scrollLeft += moveStep; break;
                case '+': zoomLevel = Math.min(zoomLevel + 0.1, 2.5); updateZoom(); break;
                case '-': zoomLevel = Math.max(zoomLevel - 0.1, 0.1); updateZoom(); break;
            }
        }
    });

    const shouldIgnoreDrag = (el) => {
        if (!el) return false;
        const tagName = el.tagName ? el.tagName.toLowerCase() : '';
        if (['button', 'input', 'select', 'textarea', 'a'].includes(tagName)) return true;
        const nav = el.closest ? el.closest('.lineage-navigator') : null;
        const search = el.closest ? el.closest('.search-wrapper') : null;
        return !!(nav || search);
    };

    // --- Click & Drag Panning (Mouse & Touch) ---
    let isDown = false;
    let startX, startY, scrollLeft, scrollTop;

    const startDragging = (e) => {
        if (shouldIgnoreDrag(e.target)) return;
        isDown = true;
        viewport.style.cursor = 'grabbing';

        const pageX = e.touches ? e.touches[0].pageX : e.pageX;
        const pageY = e.touches ? e.touches[0].pageY : e.pageY;

        startX = pageX - viewport.offsetLeft;
        startY = pageY - viewport.offsetTop;
        scrollLeft = viewport.scrollLeft;
        scrollTop = viewport.scrollTop;
    };

    const stopDragging = () => {
        isDown = false;
        viewport.style.cursor = 'grab';
    };

    const move = (e) => {
        if (!isDown) return;
        e.preventDefault();

        const pageX = e.touches ? e.touches[0].pageX : e.pageX;
        const pageY = e.touches ? e.touches[0].pageY : e.pageY;

        const x = pageX - viewport.offsetLeft;
        const y = pageY - viewport.offsetTop;

        const walkX = (x - startX);
        const walkY = (y - startY);

        viewport.scrollLeft = scrollLeft - walkX;
        viewport.scrollTop = scrollTop - walkY;
    };

    viewport.addEventListener('mousedown', startDragging);
    viewport.addEventListener('mousemove', move);
    viewport.addEventListener('mouseup', stopDragging);
    viewport.addEventListener('mouseleave', stopDragging);
    viewport.addEventListener('touchstart', startDragging, { passive: false });
    viewport.addEventListener('touchmove', move, { passive: false });
    viewport.addEventListener('touchend', stopDragging);
}

/**
 * Tab Navigation Logic
 */
function initTabs() {
    const showTreeBtn = document.getElementById('show-tree');
    const showMapBtn = document.getElementById('show-map');
    const treeSection = document.getElementById('tree-section');
    const mapSection = document.getElementById('map-section');

    if (!showTreeBtn || !showMapBtn) return;

    showTreeBtn.addEventListener('click', () => {
        showTreeBtn.classList.add('active');
        showMapBtn.classList.remove('active');
        treeSection.classList.add('active');
        mapSection.classList.remove('active');

        // Show tree-only controls
        document.querySelectorAll('.tree-only-controls').forEach(el => el.style.display = 'flex');
    });

    showMapBtn.addEventListener('click', () => {
        showMapBtn.classList.add('active');
        showTreeBtn.classList.remove('active');
        mapSection.classList.add('active');
        treeSection.classList.remove('active');

        // Hide tree-only controls
        document.querySelectorAll('.tree-only-controls').forEach(el => el.style.display = 'none');

        // Initialize map if not already done
        if (!mapInitialized) {
            setTimeout(() => initMap(), 50);
        } else {
            setTimeout(() => map.invalidateSize(), 100);
        }
    });
}

/**
 * Map Logic
 */
let map;
let mapInitialized = false;

function initMap() {
    const mapContainer = document.getElementById('map');
    if (!mapContainer) return;

    map = L.map('map').setView([32.0, 34.8], 3);

    L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
        subdomains: 'abcd',
        maxZoom: 20
    }).addTo(map);

    addMarkersToMap(familyData);
    addHistoricalLocations();
    mapInitialized = true;

    setTimeout(() => map.invalidateSize(), 200);
}

function addMarkersToMap(member) {
    if (member.coords) {
        // Add a tiny random jitter to prevent perfect overlap
        const lat = member.coords[0] + (Math.random() - 0.5) * 0.005;
        const lng = member.coords[1] + (Math.random() - 0.5) * 0.005;

        L.marker([lat, lng]).addTo(map)
            .bindPopup(`<strong>${member.name}</strong><br>${member.role}<br><em>${member.locationName || 'Known Location'}</em>`);
    }

    if (member.partner && member.partner.coords) {
        const lat = member.partner.coords[0] + (Math.random() - 0.5) * 0.005;
        const lng = member.partner.coords[1] + (Math.random() - 0.5) * 0.005;

        L.marker([lat, lng]).addTo(map)
            .bindPopup(`<strong>${member.partner.name}</strong><br>${member.partner.role}<br><em>${member.partner.locationName || 'Known Location'}</em>`);
    }

    if (member.secondPartner && member.secondPartner.coords) {
        const lat = member.secondPartner.coords[0] + (Math.random() - 0.5) * 0.005;
        const lng = member.secondPartner.coords[1] + (Math.random() - 0.5) * 0.005;

        L.marker([lat, lng]).addTo(map)
            .bindPopup(`<strong>${member.secondPartner.name}</strong><br>${member.secondPartner.role}<br><em>${member.secondPartner.locationName || 'Known Location'}</em>`);
    }

    if (member.children) {
        member.children.forEach(child => addMarkersToMap(child));
    }
}

// Add historical locations from GEDCOM data
function addHistoricalLocations() {
    const historicalLocations = [
        { name: "Biezun, Poland", coords: [52.9515, 20.0119], description: "Ancestral home of the Granat family" },
        { name: "Kutno, Poland", coords: [52.2333, 19.3667], description: "Birthplace of Bracha Laznowsky" },
        { name: "Tarnopol, Ukraine", coords: [49.5535, 25.5948], description: "Birthplace of Zvi Weissburst (1888)" },
        { name: "Zichron Yaakov, Israel", coords: [32.5708, 34.9533], description: "Death place of Esther Hava Elstein (1918)" },
        { name: "Beersheba, Israel", coords: [31.2518, 34.7915], description: "Birthplace of Gil Rimon (1972)" },
        { name: "Ukraine", coords: [48.3794, 31.1656], description: "Birthplace of Tova Wallach (1917)" },
        { name: "Jerusalem, Israel", coords: [31.7683, 35.2137], description: "Immigration destination (1921)" },
        { name: "Gyöngyös, Hungary", coords: [47.7833, 19.9333], description: "Birthplace of László Polgár (1946)" }
    ];

    historicalLocations.forEach(location => {
        const marker = L.marker(location.coords).addTo(map);
        marker.bindPopup(`<strong>${location.name}</strong><br><em>Historical Location</em><br>${location.description}`);

        // Use different icon for historical locations
        marker.setIcon(L.divIcon({
            className: 'historical-marker',
            html: '📍',
            iconSize: [20, 20],
            iconAnchor: [10, 10]
        }));
    });
}

function exportToGedcom() {
    let gedcom = '0 HEAD\n1 SOUR Family Tree Project\n1 GEDC\n2 VERS 5.5.1\n1 CHAR UTF-8\n';
    let individualId = 1;
    let familyId = 1;
    const personMap = new Map();
    const families = [];

    function addPerson(member, parentFamilyId = null) {
        const id = `I${individualId++}`;
        personMap.set(member.name, id);

        gedcom += `0 @${id}@ INDI\n`;
        gedcom += `1 NAME ${member.name}\n`;
        if (member.role) gedcom += `1 NOTE ${member.role}\n`;
        if (member.coords) gedcom += `1 RESI\n2 PLAC ${member.locationName || 'Unknown'}\n`;
        if (parentFamilyId) gedcom += `1 FAMC @${parentFamilyId}@\n`;

        if (member.partner) {
            const famId = `F${familyId++}`;
            const spouseId = `I${individualId++}`;
            personMap.set(member.partner.name, spouseId);

            gedcom += `1 FAMS @${famId}@\n`;

            gedcom += `0 @${spouseId}@ INDI\n`;
            gedcom += `1 NAME ${member.partner.name}\n`;
            if (member.partner.role) gedcom += `1 NOTE ${member.partner.role}\n`;
            gedcom += `1 FAMS @${famId}@\n`;

            families.push({ id: famId, husband: id, wife: spouseId, children: member.children || [] });
        }

        return id;
    }

    function processTree(member, parentFamilyId = null) {
        const personId = addPerson(member, parentFamilyId);

        if (member.children && member.children.length > 0) {
            const currentFamily = families.find(f => f.husband === personId || f.wife === personId);
            const childFamilyId = currentFamily ? currentFamily.id : null;

            member.children.forEach(child => {
                processTree(child, childFamilyId);
            });
        }
    }

    familyData.children.forEach(lineage => processTree(lineage));

    families.forEach(family => {
        gedcom += `0 @${family.id}@ FAM\n`;
        gedcom += `1 HUSB @${family.husband}@\n`;
        gedcom += `1 WIFE @${family.wife}@\n`;
        family.children.forEach(child => {
            const childId = personMap.get(child.name);
            if (childId) gedcom += `1 CHIL @${childId}@\n`;
        });
    });

    gedcom += '0 TRLR\n';

    const blob = new Blob([gedcom], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'family-tree.ged';
    a.click();
    URL.revokeObjectURL(url);
}

/**
 * GEDCOM Parser for Import
 */


/**
 * QR Code Logic
 */
document.addEventListener('DOMContentLoaded', () => {
    const showQrBtn = document.getElementById('show-qr');
    const closeQrBtn = document.getElementById('close-qr');
    const qrPopup = document.getElementById('qr-popup');
    const qrContainer = document.getElementById('qrcode');

    if (showQrBtn && qrPopup && qrContainer) {
        const updateQRCode = () => {
            qrContainer.innerHTML = ""; // Clear existing code
            const currentUrl = window.location.href; // Captures current hash/state

            try {
                new QRCode(qrContainer, {
                    text: currentUrl,
                    width: 128,
                    height: 128,
                    colorDark: "#000000",
                    colorLight: "#ffffff",
                    correctLevel: QRCode.CorrectLevel.H
                });
            } catch (e) {
                console.error("QR Code generation failed:", e);
                qrContainer.innerHTML = "QR Error";
            }
        };

        showQrBtn.addEventListener('click', () => {
            updateQRCode();
            qrPopup.classList.toggle('hidden');
        });

        closeQrBtn.addEventListener('click', () => {
            qrPopup.classList.add('hidden');
        });

        // Close when clicking outside
        document.addEventListener('click', (e) => {
            if (!showQrBtn.contains(e.target) && !qrPopup.contains(e.target)) {
                qrPopup.classList.add('hidden');
            }
        });

        // Initial generation
        updateQRCode();
    }

    // Auto-navigate if hash exists on load
    if (window.location.hash) {
        const hash = window.location.hash;
        if (hash.startsWith('#lineage-')) {
            const index = parseInt(hash.split('-')[1]);
            // Small delay to ensure renderTree() has completed
            setTimeout(() => {
                const btn = document.querySelector(`.nav-jump-btn[data-lineage="${index}"]`);
                if (btn) btn.click();
            }, 800);
        }
    }
});