/**
 * Family Tree Data Structure
 * 
 * Replace the example data below with real family info.
 * structure:
 * {
 *   name: "Name",
 *   role: "Relation/Title",
 *   image: "url_or_empty_for_placeholder",
 *   children: [ ... ]
 * }
 */

const familyData = {
    name: "The Rimon-Givon Legacy",
    role: "United Family",
    image: "",
    children: [
        {
            name: "Ephraim & Esther Rimon",
            role: "G1: The Founders (1900s)",
            image: "",
            children: [
                {
                    name: "Yosef Zvi Rimon",
                    role: "G2: The Poet",
                    image: "",
                    children: [
                        {
                            name: "Descendants",
                            role: "Branch",
                            image: "",
                            children: [
                                {
                                    name: "Rabbi Yosef Zvi Rimon",
                                    role: "G4: Halachic Authority",
                                    image: "",
                                    children: []
                                }
                            ]
                        }
                    ]
                },
                {
                    name: "Yaakov Rimon",
                    role: "G2: Author & Social Worker",
                    image: "",
                    children: [
                        {
                            name: "Miriam & Israel Glicksberg",
                            role: "G3: Educators",
                            image: "",
                            children: [
                                {
                                    name: "Prof. David Glicksberg",
                                    role: "G4: Law & Tax Expert",
                                    image: "",
                                    children: []
                                },
                                {
                                    name: "Alex Glicksberg",
                                    role: "G4: Archivist",
                                    image: "",
                                    children: []
                                }
                            ]
                        },
                        {
                            name: "Ephraim Rimon",
                            role: "G3: Songwriter",
                            image: "",
                            children: [
                                {
                                    name: "Gil Rimon",
                                    role: "G4: Entrepreneur (Stevie)",
                                    image: "",
                                    children: [
                                        {
                                            name: "Omer Rimon",
                                            role: "G5: The New Generation",
                                            image: "",
                                            children: []
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            name: "Moshe & Deborah Givon",
            role: "G3: The Academic Hub",
            image: "",
            children: [
                {
                    name: "Daniela Givon Tapuchee",
                    role: "G4: CEO, Dunica",
                    image: "",
                    children: []
                },
                {
                    name: "Dr. Assaf Givon",
                    role: "G4: Orthopedic Surgeon",
                    image: "",
                    children: []
                },
                {
                    name: "Yael Givon",
                    role: "G4: Creative Director",
                    image: "",
                    children: [
                        {
                            name: "Omer Rimon",
                            role: "G5: (See Rimon Branch)",
                            image: "",
                            children: []
                        }
                    ]
                },
                {
                    name: "Daphna Givon",
                    role: "G4: Botanical Expert",
                    image: "",
                    children: []
                },
                {
                    name: "Ronnie Heller",
                    role: "G4: Choreographer",
                    image: "",
                    children: []
                }
            ]
        }
    ]
};

function createTreeElement(member) {
    const li = document.createElement('li');

    // Create Card
    const card = document.createElement('div');
    card.className = 'member-card';

    // Image Placeholder
    const imgContainer = document.createElement('div');
    imgContainer.className = 'image-placeholder';
    if (member.image) {
        const img = document.createElement('img');
        img.src = member.image;
        img.alt = member.name;
        imgContainer.appendChild(img);
    } else {
        // SVG Icon for placeholder
        imgContainer.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
            </svg>
        `;
    }

    // Text Content
    const nameData = document.createElement('div');
    nameData.className = 'member-name';
    nameData.textContent = member.name;

    const roleData = document.createElement('div');
    roleData.className = 'member-role';
    roleData.textContent = member.role;

    card.appendChild(imgContainer);
    card.appendChild(nameData);
    card.appendChild(roleData);

    li.appendChild(card);

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

function renderTree() {
    const container = document.getElementById('family-tree');
    container.innerHTML = ''; // Clear previous content
    const rootUl = document.createElement('ul');
    rootUl.className = 'tree';

    rootUl.appendChild(createTreeElement(familyData));
    container.appendChild(rootUl);
}

// Initial Render
document.addEventListener('DOMContentLoaded', renderTree);
