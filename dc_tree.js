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
                            image: "https://upload.wikimedia.org/wikipedia/en/3/35/Supermanflying.png",
                            children: [
                                { name: "Superboy (Conner Kent/Kon-El)", role: "Clone of Superman", description: "Genetic clone of Superman and Lex Luthor." }
                            ]
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
                            description: "The Emerald Archer. TV: Married to Felicity Smoak. Comics: Partner of Black Canary.",
                            partner: {
                                name: "Dinah Laurel Lance",
                                role: "Black Canary",
                                description: "DC Comics: Oliver's iconic power-couple partner. Married in various runs."
                            },
                            secondPartner: {
                                name: "Felicity Smoak",
                                role: "Overwatch",
                                description: "Arrow TV: Oliver's wife, 'love of his life', and mother of Mia. Reunited in the afterlife."
                            },
                            children: [
                                { name: "William Clayton", role: "Son", description: "Son of Oliver Queen." },
                                { name: "Mia Smoak", role: "Green Arrow II", description: "Daughter of Oliver & Felicity (Arrow TV)." }
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
                    role: "Doctor (Deceased)",
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
                },
                {
                    name: "Joe West",
                    role: "Detective (CPD)",
                    description: "Father of Iris and Wally. Guardian of Barry Allen. Played by Jesse L. Martin.",
                    children: [
                        { name: "Iris West-Allen", role: "Journalist", description: "Wife of Barry Allen. (See Allen Family)" },
                        {
                            name: "Wally West",
                            role: "Kid Flash / The Flash (III)",
                            description: "The Fastest Man in the Multiverse. Spouse: Linda Park.",
                            partner: { name: "Linda Park", role: "Journalist" }
                        }
                    ]
                }
            ]
        },
        {
            name: "Star City",
            role: "Lance Family",
            coords: [47.6062, -122.3321],
            children: [
                {
                    name: "Quentin Lance",
                    role: "Police Captain",
                    description: "Father of Laurel and Sara.",
                    children: [
                        {
                            name: "Dinah Laurel Lance",
                            role: "Black Canary",
                            description: "Sister of Sara (See Legends of Tomorrow). Also connected to Oliver Queen."
                        }
                    ]
                }
            ]
        },
        {
            name: "S.T.A.R. Labs",
            role: "Team Flash",
            coords: [39.0997, -94.5786],
            children: [
                {
                    name: "Dr. Caitlin Snow",
                    role: "Killer Frost / Frost",
                    description: "Bio-engineer & Metahuman (Ice Powers). Aliases: Khione. Dr. Louise Lincoln/Crystal Frost (Comics mantles).",
                    partner: {
                        name: "Ronnie Raymond",
                        role: "Firestorm (Deceased)",
                        description: "The Nuclear Man. Fused with Martin Stein. Husband of Caitlin Snow (TV)."
                    }
                }
            ]
        },
        {
            name: "The Waverider",
            role: "Legends of Tomorrow",
            coords: [0, 0],
            children: [
                {
                    name: "Rip Hunter",
                    role: "Time Master",
                    description: "Founder of the Legends. Former Time Master. Created by Jack Miller & Ruben Moreira."
                },
                {
                    name: "Dr. Nate Heywood",
                    role: "Citizen Steel / Steel",
                    description: "Historian specializing in historical reconstruction. Former bearer of the Earth Totem. Played by Nick Zano.",
                    partner: {
                        name: "Zari Tomaz (Zari 1.0)",
                        role: "Air Totem Bearer",
                        description: "Hacker from 2042. Bearer of the Air Totem (one of the Six). Aliases: Z, Khaahar."
                    }
                },
                {
                    name: "John Constantine",
                    role: "Hellblazer",
                    description: "Master of the Dark Arts. Antihero. Created by Alan Moore. Son of Mary Ann."
                },
                {
                    name: "Ray Palmer",
                    role: "The Atom",
                    description: "Scientist & CEO. Uses dwarf star alloy suit. Played by Brandon Routh."
                },
                {
                    name: "Leonard Snart",
                    role: "Captain Cold",
                    description: "Rogue turned Legend. Wields Cold Gun. Crime partner of Mick Rory."
                },
                {
                    name: "Mick Rory",
                    role: "Heat Wave",
                    description: "Pyromaniac, sci-fi romance author, and former bearer of the Fire Totem. Wields Heat Gun. Crime partner of Leonard Snart."
                },
                {
                    name: "Prof. Martin Stein",
                    role: "Firestorm (Former Legend)",
                    description: "Nuclear Physicist. Founding member of the Legends. Currently deceased/retired (Crisis on Earth-X). Friend of the team.",
                    children: [{ name: "Jax Jackson", role: "Firestorm (Retired)", description: "Jefferson Jackson. Former Legend." }]
                },
                { name: "Amaya Jiwe", role: "Vixen", description: "Bearer of the Anansi (Spirit) Totem (one of the Six). JSA Member. Played by Maisie Richardson-Sellers." },
                { name: "Gideon", role: "Ship AI", description: "Interactive Artificial Consciousness of the Waverider. Voiced/Played by Amy Pemberton." }
            ]
        }
    ]
};
