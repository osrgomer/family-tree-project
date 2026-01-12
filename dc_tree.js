const dcTreeData = {
    name: "DC & Arrowverse",
    role: "Multiverse Legacy",
    children: [
        {
            name: "Krypton",
            role: "House of El",
            coords: [38.9072, -77.0369], // Metropolis-ish
            children: [
                {
                    name: "Jor-El",
                    role: "Scientist",
                    image: "https://upload.wikimedia.org/wikipedia/en/thumb/8/8c/Jor-El_Action_Comics_968.jpg/250px-Jor-El_Action_Comics_968.jpg",
                    partner: { name: "Lara Lor-Van", role: "Scientist" },
                    children: [
                        {
                            name: "Kal-El (Clark Kent)",
                            role: "Superman",
                            description: "The Last Son of Krypton. Sent to Earth to protect it.",
                            image: "https://upload.wikimedia.org/wikipedia/en/3/35/Supermanflying.png"
                        }
                    ]
                },
                {
                    name: "Zor-El",
                    role: "Scientist",
                    children: [
                        { name: "Kara Zor-El (Supergirl)", role: "Supergirl", description: "Cousin of Superman." }
                    ]
                }
            ]
        },
        {
            name: "Gotham",
            role: "Wayne Family",
            coords: [40.7128, -74.0060], // Gotham-ish
            children: [
                {
                    name: "Thomas Wayne",
                    role: "Philanthropist (Deceased)",
                    partner: { name: "Martha Wayne", role: "Philanthropist (Deceased)" },
                    children: [
                        {
                            name: "Bruce Wayne",
                            role: "Batman",
                            description: "The Dark Knight. Protector of Gotham.",
                            image: "https://upload.wikimedia.org/wikipedia/en/c/c7/Batman_Infobox.jpg",
                            children: [
                                { name: "Damian Wayne", role: "Robin", description: "Son of Bruce and Talia al Ghul." },
                                { name: "Dick Grayson", role: "Nightwing", description: "Adopted son. First Robin." },
                                { name: "Jason Todd", role: "Red Hood", description: "Adopted son. Second Robin." },
                                { name: "Tim Drake", role: "Red Robin", description: "Adopted son. Third Robin." }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            name: "Star City",
            role: "Queen Family",
            coords: [47.6062, -122.3321], // Seattle-ish
            children: [
                {
                    name: "Robert Queen",
                    role: "CEO (Deceased)",
                    partner: { name: "Moira Queen", role: "CEO (Deceased)" },
                    children: [
                        {
                            name: "Oliver Queen",
                            role: "Green Arrow",
                            description: "The Emerald Archer.",
                            partner: { name: "Dinah Laurel Lance", role: "Black Canary" },
                            children: [
                                { name: "William Clayton", role: "Son" },
                                { name: "Mia Smoak", role: "Green Arrow II" }
                            ]
                        },
                        { name: "Thea Queen", role: "Speedy" }
                    ]
                }
            ]
        },
        {
            name: "Central City",
            role: "Allen Family",
            coords: [39.0997, -94.5786], // KC-ish
            children: [
                {
                    name: "Henry Allen",
                    role: "Doctor",
                    partner: { name: "Nora Allen", role: "Mother (Deceased)" },
                    children: [
                        {
                            name: "Barry Allen",
                            role: "The Flash",
                            description: "The Fastest Man Alive.",
                            partner: { name: "Iris West-Allen", role: "Journalist" },
                            children: [
                                { name: "Nora West-Allen", role: "XS" },
                                { name: "Bart Allen", role: "Impulse" }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
};
