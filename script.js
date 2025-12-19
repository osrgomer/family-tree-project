/**
 * Family Tree Data Structure
 */

const familyData = {
    name: "The Rimon-Givon Legacy",
    role: "United Family",
    children: [
        {
            name: "Josek Hersz Granat",
            role: "G0: Patriarch (c.1815–1885)",
            image: "",
            partner: {
                name: "Hana Chaja Granat",
                role: "G0: Matriarch",
                image: ""
            },
            children: [
                {
                    name: "Efraim Eliezer Rimon (Granat)",
                    role: "G1: Founder & Poet (1868–1919)",
                    image: "",
                    partner: {
                        name: "Esther Hava Rimon (Granat)",
                        role: "G1: Businesswoman (1864–1918)",
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
                            role: "G2: Author & Social Worker (1903–1973)",
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
                                        description: "Part of the G3: Matriarch | Bank of Israel lineage and the core of the Rimon-Givon story.",
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
                                                    image: "",
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
        }
    ]
};

/**
 * Helper to create a single card DOM element
 */
function createCard(member) {
    const card = document.createElement('div');
    card.className = member.type === 'venture' ? 'member-card venture-card' : 'member-card';

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

// Initial Render
document.addEventListener('DOMContentLoaded', renderTree);
