/**
 * Family Tree Data Structure
 */

const familyData = {
    name: "The Rimon-Givon Legacy",
    role: "United Family",
    children: [
        {
            name: "Josek Hersz Granat",
            role: "G0: Patriarch (c.1815–1885) (Deceased)",
            image: "",
            partner: {
                name: "Hana Chaja Granat",
                role: "G0: Matriarch (Deceased)",
                image: ""
            },
            coords: [52.9515, 20.0119],
            locationName: "Biezun, Poland (Ancestral Home)",
            children: [
                {
                    name: "Efraim Eliezer Rimon (Granat)",
                    role: "G1: Founder & Poet (1868–1919) (Deceased)",
                    image: "",
                    coords: [32.0515, 34.7551],
                    locationName: "Jaffa, Israel (Last Residence)",
                    partner: {
                        name: "Esther Hava Rimon (Granat)",
                        role: "G1: Businesswoman (1864–1918) (Deceased)",
                        coords: [32.0515, 34.7551],
                        locationName: "Jaffa, Israel (Last Residence)",
                        image: ""
                    },
                    children: [
                        {
                            name: "Yosef Zvi Rimon",
                            role: "G2: The Poet of Zion",
                            image: "",
                            children: [
                                {
                                    name: "Rabbi Yosef Zvi Rimon",
                                    role: "G4: Halachic Authority",
                                    image: "",
                                    children: []
                                }
                            ]
                        },
                        {
                            name: "Hana Haya Kaczor",
                            role: "G2: Sibling",
                            image: "",
                            children: []
                        },
                        {
                            name: "Yechiel Bunim Rimon (Granat)",
                            role: "G2: Sibling",
                            image: "",
                            children: []
                        },
                        {
                            name: "Yaakov Haim (Zvi) Rimon (Granat)",
                            role: "G2: Author & Social Worker (1903–1973) (Deceased)",
                            image: "",
                            partner: {
                                name: "Bracha Rimon (Laznowsky)",
                                role: "G2: Matriarch (Granat Side)",
                                image: ""
                            },
                            children: [
                                {
                                    name: "Hava Esther Cohen (Rimon)",
                                    role: "G3: Sibling (1928 - 2002)",
                                    image: "",
                                    partner: {
                                        name: "Benjamin Cohen",
                                        role: "G3: Husband (1921–1981)",
                                        image: ""
                                    },
                                    children: [
                                        {
                                            name: "Yoram Cohen",
                                            role: "G4: Sibling",
                                            image: "",
                                            children: [
                                                {
                                                    name: "Michal Cohen",
                                                    role: "G5: Daughter",
                                                    image: "",
                                                    children: []
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    name: "Rivka Zinkin",
                                    role: "G3: Sibling",
                                    image: "",
                                    children: []
                                },
                                {
                                    name: "Nitzchia Rimon",
                                    role: "G3: Sibling",
                                    image: "",
                                    children: []
                                },
                                {
                                    name: "Miriam Esther Gliksberg",
                                    role: "G3: Educator",
                                    image: "",
                                    partner: {
                                        name: "Israel Glicksberg",
                                        role: "G3: Educator & Scholar",
                                        image: ""
                                    },
                                    partnerLeft: true, // Miriam on the right, Israel on the left
                                    children: [
                                        {
                                            name: "Prof. David Glicksberg",
                                            role: "G4: Law & Tax Expert",
                                            image: "",
                                            children: []
                                        },
                                        {
                                            name: "Alex Glicksberg",
                                            role: "G4: Literacy Archivist",
                                            image: "",
                                            children: []
                                        }
                                    ]
                                },
                                {
                                    name: "Ephraim Rimon",
                                    role: "G3: Songwriter | Bank of Israel",
                                    image: "",
                                    partner: {
                                        name: "Talma Rimon",
                                        role: "G3: Bank of Israel",
                                        description: "Daughter of Shalom Weissbarst. Part of the G3: Matriarch | Bank of Israel lineage and the core of the Rimon-Givon story.",
                                        image: ""
                                    },
                                    partnerLeft: false, // Ephraim on the left, Talma on the right
                                    children: [
                                        {
                                            name: "Gil Rimon",
                                            role: "G4: Entrepreneur & Branding",
                                            image: "https://media.licdn.com/dms/image/v2/C4E03AQFekz6-k5QSGQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1516166655864?e=2147483647&v=beta&t=FbFriFy5jiB-Pr9DEteB0912XRyeEr8ETCpa00xde0Y",
                                            partner: {
                                                name: "Yael Givon",
                                                role: "G4: Creative Director",
                                                image: "https://scontent-mad2-1.xx.fbcdn.net/v/t1.6435-1/90784911_10156686869197610_3607218928830382080_n.jpg?stp=c0.205.1638.1638a_dst-jpg_s200x200_tt6&_nc_cat=109&ccb=1-7&_nc_sid=fe59b0&_nc_ohc=q4PniCXWyiAQ7kNvwFb4qeu&_nc_oc=AdmtC3FesuZAuFgUe5twQKHYuIQPJL8-8o6AP-VngbiDEkruxZEeoDCHfnMTg7zBwXk&_nc_zt=24&_nc_ht=scontent-mad2-1.xx&_nc_gid=97MW2ts3B2nUE0djMgpevQ&oh=00_AfnLF5TiEr47ptHm6RUOcPzJvVGdDv_6RFQMoZ4AnyMtIw&oe=696BD180"
                                            },
                                            partnerLeft: true,
                                            children: [
                                                {
                                                    name: "Omer Rimon",
                                                    role: "G5: The Union (Age 13.5)",
                                                    image: "https://i.pinimg.com/736x/c8/e1/c2/c8e1c2206c98cfbdb48d793c219d01e1.jpg",
                                                    children: []
                                                },
                                                {
                                                    name: "Nomi Rimon",
                                                    role: "G5: Student",
                                                    image: "https://osrg.lol/wp-content/uploads/2025/12/IMG-20250724-WA0005.jpg",
                                                    children: []
                                                }
                                            ]
                                        },
                                        {
                                            name: "Ran Rimon",
                                            role: "G4: Entrepreneur",
                                            image: "https://pbs.twimg.com/profile_images/1524011464109002752/GLGXYNu9_400x400.jpg",
                                            children: [
                                                {
                                                    name: "Eyal Rimon",
                                                    role: "G5: Student (Age 14)",
                                                    image: "",
                                                    children: []
                                                },
                                                {
                                                    name: "Talia Rimon",
                                                    role: "G5: Student (Age 11-12)",
                                                    image: "",
                                                    children: []
                                                },
                                                {
                                                    name: "Gur Rimon",
                                                    role: "G5: Student (Age 6-7)",
                                                    image: "",
                                                    children: []
                                                },
                                                {
                                                    name: "Ana Rimon",
                                                    role: "G5: Student (Age 1.5)",
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
                    name: "Zvi Givon",
                    role: "G2: Patriarch",
                    image: "",
                    children: [
                        {
                            name: "Thomas (Tsvi) Givon",
                            role: "G3: Distinguished Professor (Linguistics)",
                            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Tgivon.jpg/220px-Tgivon.jpg",
                            description: "Born June 22, 1936. Known by the nickname 'Talmy', he is an world-renowned Israeli linguist, Distinguished Professor Emeritus at the University of Oregon, and a founder of West Coast Functionalism. Currently resides on the Southern Ute Indian Reservation in Colorado.",
                            children: []
                        },
                        {
                            name: "Professor Moshe Givon",
                            role: "G3: Marketing Expert",
                            image: "",
                            partner: {
                                name: "Deborah Givon",
                                role: "G3: Early Childhood Expert",
                                image: ""
                            },
                            children: [
                                {
                                    name: "Dr. Assaf Givon",
                                    role: "G4: Orthopedic Surgeon",
                                    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwXTBJQZQH9H7s7jnJ9AnH2nx4BMlMYV4U1Q&s",
                                    partner: {
                                        name: "Ruth Givon",
                                        role: "Partner",
                                        image: ""
                                    },
                                    children: [
                                        {
                                            name: "Ivry Givon",
                                            role: "G5: Son (Age 9-10)",
                                            image: "",
                                            children: []
                                        },
                                        {
                                            name: "Lily Givon",
                                            role: "G5: Daughter (Age 6-7)",
                                            image: "",
                                            children: []
                                        }
                                    ]
                                },
                                {
                                    name: "Daniella Givon",
                                    role: "G4: CEO, Unik",
                                    image: "https://osrg.lol/wp-content/uploads/2025/12/Screenshot-2025-12-19-142857.png",
                                    partner: {
                                        name: "Nissim Douek",
                                        role: "Partner",
                                        image: "https://media.licdn.com/dms/image/v2/C5603AQGg5A2CPy1q4Q/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1603183059658?e=2147483647&v=beta&t=KWSh0XWuCXFYbg1sHPukZOzfEP9AkY-W4LDZMkXZoeA"
                                    },
                                    children: [
                                        {
                                            name: "Nave Midbar Tapuhi",
                                            role: "G5: Son (Age 21)",
                                            image: "",
                                            children: []
                                        },
                                        {
                                            name: "Soof Tapuhi",
                                            role: "G5: Child (Age 18)",
                                            image: "",
                                            children: []
                                        }
                                    ]
                                },

                                {
                                    name: "Daphna Givon",
                                    role: "G4: Botanical Expert",
                                    image: "https://scontent-mad1-1.xx.fbcdn.net/v/t1.6435-1/94432436_10222579086852096_7837351610438123520_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=106&ccb=1-7&_nc_sid=e99d92&_nc_ohc=l4ns_hm94mIQ7kNvwFSFHM1&_nc_oc=AdmI0yEoLESZPcK5deqhvdX2IcJ7GWgWsda0lbxJtLq433F3Kcbp9JwacnVVyYfY3hA&_nc_zt=24&_nc_ht=scontent-mad1-1.xx&_nc_gid=FwqF4NlVpGSn8vZG5187Gw&oh=00_Afl5CAO3hH0Fy-c-yJ68myLLStboL2BunkBkfeudZ1LjVw&oe=696BDCDD",
                                    partner: {
                                        name: "Arturo Whitelegg",
                                        role: "Partner",
                                        image: ""
                                    },
                                    children: [
                                        {
                                            name: "Lian Givon Whitelegg",
                                            role: "G5: Son (Age 15)",
                                            image: "",
                                            children: []
                                        },
                                        {
                                            name: "Alma Givon Whitelegg",
                                            role: "G5: Daughter (Age 13.5)",
                                            image: "",
                                            children: []
                                        },
                                        {
                                            name: "Yanai Givon Whitelegg",
                                            role: "G5: Son (Age 9-10)",
                                            image: "",
                                            children: []
                                        },
                                        {
                                            name: "Ilay Givon Whitelegg",
                                            role: "G5: Son (Age 5)",
                                            image: "",
                                            children: []
                                        }
                                    ]
                                },
                                {
                                    name: "Yael Givon",
                                    role: "G4: Creative Director",
                                    image: "https://scontent-mad2-1.xx.fbcdn.net/v/t1.6435-1/90784911_10156686869197610_3607218928830382080_n.jpg?stp=c0.205.1638.1638a_dst-jpg_s200x200_tt6&_nc_cat=109&ccb=1-7&_nc_sid=fe59b0&_nc_ohc=q4PniCXWyiAQ7kNvwFb4qeu&_nc_oc=AdmtC3FesuZAuFgUe5twQKHYuIQPJL8-8o6AP-VngbiDEkruxZEeoDCHfnMTg7zBwXk&_nc_zt=24&_nc_ht=scontent-mad2-1.xx&_nc_gid=97MW2ts3B2nUE0djMgpevQ&oh=00_AfnLF5TiEr47ptHm6RUOcPzJvVGdDv_6RFQMoZ4AnyMtIw&oe=696BD180",
                                    partner: {
                                        name: "Gil Rimon",
                                        role: "G4: Entrepreneur & Branding",
                                        image: "https://media.licdn.com/dms/image/v2/C4E03AQFekz6-k5QSGQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1516166655864?e=2147483647&v=beta&t=FbFriFy5jiB-Pr9DEteB0912XRyeEr8ETCpa00xde0Y"
                                    },
                                    children: [
                                        {
                                            name: "Omer Rimon",
                                            role: "G5: The Union (Age 13.5)",
                                            image: "https://i.pinimg.com/736x/c8/e1/c2/c8e1c2206c98cfbdb48d793c219d01e1.jpg",
                                            children: []
                                        },
                                        {
                                            name: "Nomi Rimon",
                                            role: "G5: Student",
                                            image: "https://osrg.lol/wp-content/uploads/2025/12/IMG-20250724-WA0005.jpg",
                                            children: []
                                        }
                                    ]
                                },
                                {
                                    name: "Ronnie Heller",
                                    role: "G4: Choreographer",
                                    image: "https://static.wixstatic.com/media/c9e8a9_65a9fe53589745fea8c6530db75621c2~mv2_d_2048_1370_s_2.jpg/v1/crop/x_51,y_0,w_1369,h_1370/fill/w_160,h_160,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/1398405_636735436366394_1523544042_o.jpg",
                                    children: [
                                        {
                                            name: "Amir Heller",
                                            role: "G5: Son (Age 21)",
                                            image: "",
                                            children: []
                                        },
                                        {
                                            name: "David Heller",
                                            role: "G5: Son (Age 15-16)",
                                            image: "",
                                            children: []
                                        }
                                    ]
                                },
                                {
                                    name: "DUNICA",
                                    role: "Shared Venture: Biotech & Therapeutics",
                                    description: "A pioneering biomedical venture co-founded by Daniella Givon, focusing on transformative therapeutics and innovative health solutions.",
                                    image: "",
                                    type: "venture",
                                    children: []
                                }
                            ]
                        },
                        {
                            name: "Haya Givon",
                            role: "G3: Sibling (Deceased)",
                            image: "",
                            children: [
                                {
                                    name: "Gal Ran",
                                    role: "G4: Son",
                                    image: "",
                                    children: []
                                },
                                {
                                    name: "Yifat Givon",
                                    role: "G4: Daughter (Deceased)",
                                    image: "",
                                    children: []
                                },
                                {
                                    name: "Maya",
                                    role: "G4: Daughter (Deceased)",
                                    image: "",
                                    children: [
                                        {
                                            name: "Matan Punk",
                                            role: "G5: Son",
                                            image: "",
                                            children: []
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    name: "Baruch Tzvi Hirsh Cohen",
                    role: "Paternal Roots (1852–1941)",
                    image: "",
                    partner: {
                        name: "Peril Pnina Cohen",
                        role: "Great-Grandmother (1856–1925)",
                        image: ""
                    },
                    children: [
                        {
                            name: "Rabi Mosheh David Rozental Hacohen",
                            role: "G2: Rabbi & Scholar",
                            image: "",
                            partner: {
                                name: "Lieba Leah Cohen Rozental",
                                role: "G2: Matriarch (1886–1966)",
                                image: ""
                            },
                            children: [
                                {
                                    name: "Benjamin Cohen",
                                    role: "G3: Husband (1921–1981)",
                                    image: "",
                                    children: [
                                        {
                                            name: "Yoram Cohen",
                                            role: "G4: Legacy Representative",
                                            image: "",
                                            children: [
                                                {
                                                    name: "Michal Cohen",
                                                    role: "G5: Daughter",
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
                }
            ]
        },
        {
            name: "Shalom Weissbarst",
            role: "G2: Patriarch (Weissbarst Lineage)",
            image: "",
            description: "Father of Talma Rimon and founder of the Weissbarst branch of the family.",
            children: [
                {
                    name: "Talma Rimon",
                    role: "G3: Bank of Israel",
                    image: "",
                    partner: {
                        name: "Ephraim Rimon",
                        role: "G3: Songwriter | Bank of Israel",
                        image: ""
                    },
                    children: [
                        {
                            name: "Gil Rimon",
                            role: "G4: Entrepreneur & Branding",
                            image: "https://media.licdn.com/dms/image/v2/C4E03AQFekz6-k5QSGQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1516166655864?e=2147483647&v=beta&t=FbFriFy5jiB-Pr9DEteB0912XRyeEr8ETCpa00xde0Y",
                            children: []
                        }
                    ]
                }
            ]
        }
    ]
};

/**
 * Helper to create a single card DOM element
 */
function createCard(member) {
    const card = document.createElement('div');
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
    nameData.textContent = member.name;

    const roleData = document.createElement('div');
    roleData.className = 'member-role';
    roleData.textContent = member.role;

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

function renderTree() {
    const container = document.getElementById('family-tree');
    container.innerHTML = ''; // Clear previous content

    // Render each main lineage as its own independent tree
    if (familyData.children) {
        familyData.children.forEach(lineage => {
            const lineageSection = document.createElement('div');
            lineageSection.className = 'lineage-section';

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
    renderTree();
    initControls();
    initTabs();

    // Initial centering of the tree
    centerTree();
});

window.addEventListener('resize', centerTree);

function centerTree() {
    const viewport = document.querySelector('.tree-viewport');
    const treeContainer = document.getElementById('family-tree');
    if (viewport && treeContainer) {
        const scrollX = (treeContainer.scrollWidth - viewport.clientWidth) / 2;
        const scrollY = 0; // Keep at top to see the roots
        viewport.scrollLeft = scrollX;
        viewport.scrollTop = scrollY;
    }
}

/**
 * Zoom and Pan Logic
 * Allows users to zoom in/out and drag to move the tree
 */
let zoomLevel = 1;

function initControls() {
    const treeContainer = document.getElementById('family-tree');
    const viewport = document.querySelector('.tree-viewport');
    const zoomInBtn = document.getElementById('zoom-in');
    const zoomOutBtn = document.getElementById('zoom-out');
    const zoomResetBtn = document.getElementById('zoom-reset');

    const moveUpBtn = document.getElementById('move-up');
    const moveDownBtn = document.getElementById('move-down');
    const moveLeftBtn = document.getElementById('move-left');
    const moveRightBtn = document.getElementById('move-right');

    if (!treeContainer || !viewport) return;

    const updateZoom = () => {
        treeContainer.style.transform = `scale(${zoomLevel})`;
    };

    const moveStep = 300; // Increased move step for better navigation

    zoomInBtn.addEventListener('click', () => {
        zoomLevel = Math.min(zoomLevel + 0.1, 2);
        updateZoom();
    });

    zoomOutBtn.addEventListener('click', () => {
        zoomLevel = Math.max(zoomLevel - 0.1, 0.4);
        updateZoom();
    });

    zoomResetBtn.addEventListener('click', () => {
        zoomLevel = 1;
        updateZoom();
        centerTree();
    });

    // Movement Controls
    moveUpBtn.addEventListener('click', () => {
        viewport.scrollTop -= moveStep;
    });

    moveDownBtn.addEventListener('click', () => {
        viewport.scrollTop += moveStep;
    });

    moveLeftBtn.addEventListener('click', () => {
        viewport.scrollLeft -= moveStep;
    });

    moveRightBtn.addEventListener('click', () => {
        viewport.scrollLeft += moveStep;
    });

    // Panning (Drag to scroll)
    let isDown = false;
    let startX;
    let startY;
    let scrollLeft;
    let scrollTop;

    viewport.addEventListener('mousedown', (e) => {
        // Don't pan if clicking zoom buttons or cards
        if (e.target.closest('.zoom-controls') || e.target.closest('.member-card')) return;

        isDown = true;
        startX = e.pageX - viewport.offsetLeft;
        startY = e.pageY - viewport.offsetTop;
        scrollLeft = viewport.scrollLeft;
        scrollTop = viewport.scrollTop;
        viewport.style.cursor = 'grabbing';
    });

    viewport.addEventListener('mouseleave', () => {
        isDown = false;
        viewport.style.cursor = 'grab';
    });

    viewport.addEventListener('mouseup', () => {
        isDown = false;
        viewport.style.cursor = 'grab';
    });

    viewport.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - viewport.offsetLeft;
        const y = e.pageY - viewport.offsetTop;
        const walkX = (x - startX) * 1.5;
        const walkY = (y - startY) * 1.5;
        viewport.scrollLeft = scrollLeft - walkX;
        viewport.scrollTop = scrollTop - walkY;
    });
}



/**
 * Tab Navigation Logic
 */
function initTabs() {
    const showTreeBtn = document.getElementById('show-tree');
    const showMapBtn = document.getElementById('show-map');
    const treeSection = document.getElementById('tree-section');
    const mapSection = document.getElementById('map-section');

    showTreeBtn.addEventListener('click', () => {
        showTreeBtn.classList.add('active');
        showMapBtn.classList.remove('active');
        treeSection.classList.add('active');
        mapSection.classList.remove('active');
    });

    showMapBtn.addEventListener('click', () => {
        showMapBtn.classList.add('active');
        showTreeBtn.classList.remove('active');
        mapSection.classList.add('active');
        treeSection.classList.remove('active');

        // Initialize map if not already done
        if (!mapInitialized) {
            // Give the DOM a moment to process the display change
            setTimeout(() => initMap(), 50);
        } else {
            // Re-invalidate size to fix Leaflet rendering in hidden container
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
    map = L.map('map').setView([32.0, 34.8], 3); // Centered between Europe and Israel

    // Use a dark, premium map tile set
    L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
        subdomains: 'abcd',
        maxZoom: 20
    }).addTo(map);

    addMarkersToMap(familyData);
    mapInitialized = true;

    // Force a size refresh after markers are added to ensure correct rendering
    setTimeout(() => map.invalidateSize(), 200);
}

function addMarkersToMap(member) {
    if (member.coords) {
        L.marker(member.coords).addTo(map)
            .bindPopup(`<strong>${member.name}</strong><br>${member.role}<br><em>${member.locationName || 'Known Location'}</em>`);
    }

    if (member.partner && member.partner.coords) {
        L.marker(member.partner.coords).addTo(map)
            .bindPopup(`<strong>${member.partner.name}</strong><br>${member.partner.role}<br><em>${member.partner.locationName || 'Known Location'}</em>`);
    }

    if (member.children) {
        member.children.forEach(child => addMarkersToMap(child));
    }
}
