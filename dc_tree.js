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
                            partner: {
                                name: "Lois Lane",
                                role: "Daily Planet Reporter",
                                description: "Superman's wife. Award-winning journalist."
                            },
                            children: [
                                { name: "Superboy (Conner Kent/Kon-El)", role: "Clone of Superman", description: "Genetic clone of Superman and Lex Luthor." }
                            ]
                        }
                    ]
                },
                {
                    name: "Zor-El",
                    role: "Scientist",
                    partner: { name: "Alura In-Ze", role: "Judge / Scientist" },
                    children: [
                        { name: "Kara Zor-El (Supergirl)", role: "Supergirl", description: "Cousin of Superman. Daughter of Zor-El and Alura." }
                    ]
                }
            ]
        },
        {
            name: "Gotham City",
            role: "Wayne Family",
            coords: [39.3607, -74.4258], // South Jersey area, often the lore location for Gotham
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
                                {
                                    name: "Dick Grayson",
                                    role: "Nightwing",
                                    description: "Adopted son. First Robin. Son of John and Mary Grayson.",
                                    partner: { name: "Barbara Gordon", role: "Batgirl / Oracle", description: "Iconic partner and soulmate." },
                                    secondPartner: { name: "Starfire (Koriand'r)", role: "Princess of Tamaran", description: "Enduring love interest during Teen Titans era." }
                                },
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
                            role: "Green Arrow / The Spectre",
                            description: "The Emerald Archer and later the Spectre. Savior of the Multiverse. TV: Married to Felicity Smoak.",
                            partner: {
                                name: "Dinah Laurel Lance",
                                role: "Black Canary",
                                description: "DC Comics: Oliver's iconic power-couple partner. Married in various runs."
                            },
                            secondPartner: {
                                name: "Felicity Megan Smoak",
                                role: "Overwatch",
                                description: "Oliver's wife, 'love of his life', and mother of Mia. Aliases: Ghost Fox Goddess, The Calculator. Based on DC character by Gerry Conway & Rafael Kayanan. Played by Emily Bett Rickards."
                            },
                            children: [
                                { name: "William Clayton", role: "Son", description: "Son of Oliver Queen and Samantha Clayton." },
                                { name: "Mia Smoak", role: "Green Arrow II", description: "Daughter of Oliver & Felicity (Arrow TV)." }
                            ]
                        },
                        { name: "Thea Queen", role: "Speedy", description: "Sister of Oliver. Biological daughter of Malcolm Merlyn." },
                        {
                            name: "Emiko Adachi",
                            role: "Red Arrow",
                            description: "Oliver's paternal half-sister. Daughter of Robert Queen and Kazumi Adachi."
                        }
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
                            name: "Wally West (Original)",
                            role: "Kid Flash / The Flash (III)",
                            description: "The original Kid Flash and later main Flash. Founding member of the Teen Titans.",
                            partner: { name: "Linda Park", role: "Journalist" }
                        },
                        {
                            name: "Daniel West",
                            role: "Reverse-Flash (New 52)",
                            description: "Brother of Iris and Joe's son. Father of Wallace West.",
                            children: [
                                {
                                    name: "Wallace West (Ace)",
                                    role: "Kid Flash (Rebirth)",
                                    description: "The second Kid Flash. Member of the Teen Titans. Sometimes called 'Ace'."
                                }
                            ]
                        }
                    ]
                },
                {
                    name: "Hunter Zolomon",
                    role: "Zoom",
                    description: "The second Reverse-Flash. Archenemy of the original Wally West. Created by Geoff Johns.",
                    partner: { name: "Ashley Zolomon", role: "Profiler" }
                },
                {
                    name: "Eobard Thawne",
                    role: "Reverse-Flash",
                    description: "The archenemy of Barry Allen. Speedster from the 25th century.",
                    image: "https://upload.wikimedia.org/wikipedia/en/thumb/e/ed/Reverse_Flash.png/220px-Reverse_Flash.png"
                }
            ]
        },
        {
            name: "Star City",
            role: "The Canaries (Lance Legacy)",
            coords: [47.6062, -122.3321],
            children: [
                {
                    name: "Quentin Lance",
                    role: "Police Captain",
                    description: "Father of two biological daughters and one adopted daughter. Husband of Dinah Drake.",
                    partner: {
                        name: "Dinah Drake (Mother)",
                        role: "Original Black Canary",
                        description: "Golden Age Hero. Mother of Laurel and Sara."
                    },
                    children: [
                        {
                            name: "Dinah Laurel Lance",
                            role: "Black Canary (Earth-1)",
                            description: "Eldest biological daughter. Deceased in original timeline, restored on Earth-Prime. Played by Katie Cassidy."
                        },
                        {
                            name: "Sara Lance",
                            role: "White Canary",
                            description: "Younger biological daughter. Presumed dead on Queen's Gambit. Former member of the League of Assassins (Ta-er al-Sahfer). Now Captain of the Legends (See Waverider)."
                        },
                        {
                            name: "Laurel Lance (Earth-2)",
                            role: "Black Siren / Black Canary",
                            description: "Alternate version of Laurel adopted by Quentin as his own daughter. Redeemed hero."
                        }
                    ]
                },
                {
                    name: "Dinah Drake (Meta)",
                    role: "Black Canary (III)",
                    description: "Metahuman successor. Distinct from Laurel's mother. Possesses the Canary Cry. Played by Juliana Harkavy."
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
                },
                {
                    name: "Cisco Ramon",
                    role: "Vibe",
                    description: "Mechanical engineer at S.T.A.R. Labs. Can emit powerful vibratory shock waves. Played by Carlos Valdes.",
                    image: "https://upload.wikimedia.org/wikipedia/en/d/d3/Cisco_Ramon_vibe.jpg"
                },
                {
                    name: "Hartley Rathaway",
                    role: "Pied Piper",
                    description: "Genius physicist and former protege of Harrison Wells. Uses sonic tech. Reformed rogue and ally to Team Flash. Played by Andy Mientus."
                }
            ]
        },
        {
            name: "The Waverider",
            role: "Legends of Tomorrow",
            coords: [0, 0],
            children: [
                {
                    name: "Sara Lance",
                    role: "Captain (White Canary)",
                    description: "Captain of the Legends. Paragon of Destiny. Former member of the League of Assassins (Ta-er al-Sahfer). Biological daughter of Quentin Lance.",
                    partner: {
                        name: "Ava Sharpe",
                        role: "Co-Captain",
                        description: "Wife of Sara. Director of the Time Bureau."
                    },
                    children: [
                        { name: "Future Daughter", role: "Planned Granddaughter", description: "Planned child of Sara and Ava; Quentin's granddaughter." }
                    ]
                },
                {
                    name: "Rip Hunter",
                    role: "Time Master",
                    description: "Founder of the Legends. Originally named Michael. Created by Jack Miller.",
                    partner: { name: "Miranda Coburn", role: "Time Master (Deceased)", description: "Rip's wife. Killed by Vandal Savage." },
                    children: [
                        { name: "Jonas Hunter", role: "Son (Deceased)", description: "Killed by Vandal Savage in 2166." }
                    ]
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
                    description: "Master of the Dark Arts and cynical antihero. Created by Alan Moore, Stephen R. Bissette, and John Totleben. First appeared in Swamp Thing #37 (1985). Son of Mary Ann. Played by Matt Ryan."
                },
                {
                    name: "Ray Palmer",
                    role: "The Atom",
                    description: "Scientist & CEO. Uses dwarf star alloy suit. Played by Brandon Routh.",
                    partner: {
                        name: "Nora Darhk",
                        role: "Fairy Godmother",
                        description: "Daughter of Damien Darhk. Wife of Ray Palmer. Played by Courtney Ford."
                    }
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
                    partner: {
                        name: "Clarissa Stein",
                        role: "Wife of Martin",
                        description: "Mother of Lily Stein."
                    },
                    children: [
                        {
                            name: "Jax Jackson",
                            role: "Firestorm / Captain Cold",
                            description: "Jefferson Jackson. Former Legend and second-in-command. Mechanic of the Waverider.",
                            partner: { name: "Alanna Jackson", role: "Wife of Jax" },
                            children: [
                                { name: "Martina Jackson", role: "Daughter", description: "Named after Martin Stein." }
                            ]
                        },
                        {
                            name: "Dr. Lily Stein",
                            role: "Scientist",
                            description: "Daughter of Martin and Clarissa. Originally a time aberration. Scientific genius.",
                            children: [
                                { name: "Ronnie", role: "Grandson of Martin", description: "Son of Lily Stein. Named after Ronnie Raymond." }
                            ]
                        }
                    ]
                },
                { name: "Amaya Jiwe", role: "Vixen", description: "Bearer of the Anansi (Spirit) Totem (one of the Six). JSA Member. Played by Maisie Richardson-Sellers." },
                { name: "Gideon", role: "Ship AI", description: "Interactive Artificial Consciousness of the Waverider. Voiced/Played by Amy Pemberton." },
                {
                    name: "Leo Snart (Earth-X)",
                    role: "Citizen Cold",
                    description: "Heroic, openly gay resistance fighter and therapist from Earth-X. Help fight the New Reich. Played by Wentworth Miller.",
                    partner: {
                        name: "Ray Terrill",
                        role: "The Ray",
                        description: "Light-powered hero from Earth-X. Member of the Freedom Fighters."
                    }
                },
                {
                    name: "Jonah Hex",
                    role: "Bounty Hunter",
                    description: "Scarred antihero from the Old West. Ally to the Legends."
                },
                {
                    name: "Mary Xavier",
                    role: "Foster Mother",
                    description: "Head of the Time Master orphanage. Raised Rip Hunter as her own."
                },
                {
                    name: "Mallus",
                    role: "Primordial Time Demon",
                    description: "Ancient entity seeking to destroy time. Defeated by Beebo. Main antagonist of Season 3."
                }
            ]
        },
        {
            name: "League of Assassins",
            role: "H.I.V.E.",
            coords: [32.060, 34.770], // Hypothetical Nanda Parbat/Middle East-ish coords
            children: [
                {
                    name: "Damien Darhk",
                    role: "H.I.V.E. Leader",
                    description: "Former League member, 'Heir to the Demon', and archenemy of Sara Lance. Known as Kenneth Bender. Played by Neal McDonough.",
                    partner: { name: "Ruvé Adams", role: "Mayor of Star City" },
                    children: [
                        {
                            name: "Nora Darhk (Palmer)",
                            role: "Witch / Fairy Godmother",
                            description: "Daughter of Damien and Ruvé. Former playmate of William Clayton. Wife of Ray Palmer. (See Waverider)"
                        }
                    ]
                },
                {
                    name: "Malcolm Merlyn",
                    role: "The Dark Archer / Magician",
                    description: "Former Ra's al Ghul and CEO of Merlyn Global Group. Biological father of Thea Queen. Played by John Barrowman.",
                    partner: { name: "Rebecca Merlyn", role: "Wife (Deceased)" },
                    children: [
                        { name: "Tommy Merlyn", role: "Philanthropist (Deceased)", description: "Best friend of Oliver Queen." },
                        { name: "Thea Queen", role: "Speedy", description: "Biological daughter (See Star City - Queen Family)." }
                    ]
                },
                {
                    name: "Ra's al Ghul",
                    role: "The Demon's Head",
                    description: "Legendary leader of the League of Assassins. Centenarian mastermind.",
                    children: [
                        {
                            name: "Nyssa al Ghul",
                            role: "Heir to the Demon",
                            description: "Daughter of Ra's. Former lover and mentor of Sara Lance. Briefly married to Oliver Queen.",
                            partner: { name: "Sara Lance", role: "Ta-er al-Sahfer", description: "Consort of the Heir." }
                        },
                        {
                            name: "Talia al Ghul",
                            role: "Assassin / Mentor",
                            description: "Eldest daughter of Ra's. Mentor to Oliver Queen and Adrian Chase."
                        }
                    ]
                }
            ]
        },
        {
            name: "Magic & Mysticism",
            role: "Homo Magi",
            coords: [51.5074, -0.1278], // London-ish
            children: [
                {
                    name: "Giovanni Zatara",
                    role: "Master Magician",
                    description: "Golden Age hero and powerful mage. Created by Fred Guardineer.",
                    partner: { name: "Sindella", role: "Homo Magi" },
                    children: [
                        {
                            name: "Zatanna Zatara",
                            role: "Mistress of Magic",
                            description: "Sorceress Supreme. Member of Justice League Dark.",
                            image: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f6/Zatanna_Zatara.png/250px-Zatanna_Zatara.png"
                        },
                        {
                            name: "Kent Nelson",
                            role: "Doctor Fate",
                            description: "Powerful sorcerer and agent for the Lords of Order. Wielder of the Helmet of Fate.",
                            partner: { name: "Inza Nelson", role: "Wife & Partner" }
                        }
                    ]
                }
            ]
        },
        {
            name: "Gorilla City",
            role: "Solovar's Kingdom",
            coords: [0.0, 15.0], // Equator/Africa-ish
            children: [
                {
                    name: "Solovar",
                    role: "King of Gorilla City",
                    description: "Enlightened leader of the gorilla civilization. Ally to Flash.",
                    children: [
                        {
                            name: "Gorilla Grodd",
                            role: "Usurper / Villain",
                            description: "Super-intelligent telepathic gorilla. Archenemy of The Flash."
                        }
                    ]
                }
            ]
        },
        {
            name: "Fawcett City",
            role: "The Rock of Eternity",
            coords: [39.9526, -75.1652], // Philadelphia-ish
            children: [
                {
                    name: "Billy Batson",
                    role: "Shazam / The Captain",
                    description: "Young reporter who shouts a magic word to transform. Created by Bill Parker and C.C. Beck."
                }
            ]
        }
    ]
};
