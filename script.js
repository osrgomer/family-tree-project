/**
 * Family Tree Data Structure
 */

const familyData = {
    name: "The Rimon-Givon Legacy",
    role: "United Family",
    children: [
        {
            name: "Yosef Granat",
            role: "G-2: Ancestor",
            image: "",
            children: [
                {
                    name: "Hirsch Granat",
                    role: "G-1: Ancestor",
                    image: "",
                    partner: {
                        name: "Gita Granat",
                        role: "G-1: Ancestor",
                        image: ""
                    },
                    children: [
                        {
                            name: "Josek Hersz Granat",
                            role: "G0: Patriarch (1815–1878) (Deceased)",
                            image: "",
                            partner: {
                                name: "Hana Haya Gerlitz",
                                role: "G0: Matriarch (1817–1885) (Deceased)",
                                image: "",
                                description: "Daughter of Wolf Eliasz Gerlitz (b. 1782) and Sara Rayzel (b. 1792, d. 1857). Born and lived in Biezun, Poland."
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
                                        name: "Esther Hava Rimon (Elstein)",
                                        role: "G1: Businesswoman (1864–1918) (Deceased)",
                                        coords: [32.0515, 34.7551],
                                        locationName: "Jaffa, Israel (Last Residence)",
                                        image: "",
                                        description: "Daughter of Yechiel Bunim Elstein and Gitel Rivka Granat. Died in Zichron Yaakov."
                                    },
                                    children: [
                                        {
                                            name: "Yosef Zvi Rimon",
                                            role: "G2: The Poet of Zion",
                                            image: "",
                                            children: []
                                        },
                                        {
                                            name: "David Rimon",
                                            role: "G2: Sibling",
                                            image: "",
                                            children: [
                                                {
                                                    name: "Rabbi Yosef Zvi Rimon",
                                                    role: "G3: Halachic Authority",
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
                                            role: "G2: Author & Social Worker (1890–1973) (Deceased)",
                                            image: "",
                                            description: "Born in Biezun, Poland. Immigrated to Jaffa in 1909.",
                                            partner: {
                                                name: "Bracha Rimon (Laznowsky)",
                                                role: "G2: Matriarch (b. Kutno)",
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
                                                    partnerLeft: true,
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
                                                        description: "Daughter of Shalom Weissbarst.",
                                                        image: ""
                                                    },
                                                    partnerLeft: false,
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
                                                                    coords: [37.3192, -8.8033],
                                                                    locationName: "Aljezur, Portugal",
                                                                    children: []
                                                                },
                                                                {
                                                                    name: "Nomi Rimon",
                                                                    role: "G5: Student",
                                                                    image: "https://osrg.lol/wp-content/uploads/2025/12/IMG-20250724-WA0005.jpg",
                                                                    coords: [37.3192, -8.8033],
                                                                    locationName: "Aljezur, Portugal",
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
                    image: "",
                    description: "Known by the nickname 'Talmy', he is a world-renowned Israeli linguist and Distinguished Professor Emeritus.",
                    partner: {
                        name: "Linda Givon",
                        role: "Partner (Second Wife)",
                        image: ""
                    },
                    children: [
                        {
                            name: "Chris Givon",
                            role: "G4: Son (from first marriage)",
                            children: [
                                {
                                    name: "Raquel Givon",
                                    role: "G5: Daughter",
                                    children: [
                                        { name: "Son", role: "G6: Grandson" },
                                        { name: "Daughter", role: "G6: Granddaughter" }
                                    ]
                                }
                            ]
                        },
                        {
                            name: "Nathaniel Givon",
                            role: "G4: Son (with Linda)",
                            children: []
                        }
                    ]
                },
                {
                    name: "Professor Moshe Givon",
                    role: "G3: Marketing Expert",
                    image: "",
                    partner: {
                        name: "Deborah Miriam Givon (Gurfinkel)",
                        role: "G3: Early Childhood Expert",
                        description: "Daughter of Ze'ev Gurfinkel and Leah Diamentstein. Born Deborah Miriam Gurfinkel.",
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
                            image: "https://scontent-mad1-1.xx.fbcdn.net/v/t1.6435-9/94432436_10222579086852096_7837351610438123520_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=9aQLxujBgTEQ7kNvwHwhXiR&_nc_oc=AdkrUeAUt_cU2GunGtCxAzBS61nTRlVVV-koUzJTDuMJUbOvUb98w2YdURzHLfgcRwU&_nc_zt=23&_nc_ht=scontent-mad1-1.xx&_nc_gid=c2gH7rGbsMLbYTB7DTjWmg&oh=00_AfleKGkY55UOGMBsuJe-hPGTZE42xTlYyauBuDvnEHLLaQ&oe=696E63ED",
                            coords: [37.3192, -8.8033],
                            locationName: "Aljezur, Portugal",
                            partner: {
                                name: "Arturo Whitelegg",
                                role: "Partner",
                                image: "",
                                coords: [37.3192, -8.8033],
                                locationName: "Aljezur, Portugal"
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
                            coords: [37.3192, -8.8033],
                            locationName: "Aljezur, Portugal",
                            partner: {
                                name: "Gil Rimon",
                                role: "G4: Entrepreneur & Branding",
                                image: "https://media.licdn.com/dms/image/v2/C4E03AQFekz6-k5QSGQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1516166655864?e=2147483647&v=beta&t=FbFriFy5jiB-Pr9DEteB0912XRyeEr8ETCpa00xde0Y",
                                coords: [37.3192, -8.8033],
                                locationName: "Aljezur, Portugal"
                            },
                            children: [
                                {
                                    name: "Omer Rimon",
                                    role: "G5: The Union (Age 13.5)",
                                    image: "https://i.pinimg.com/736x/c8/e1/c2/c8e1c2206c98cfbdb48d793c219d01e1.jpg",
                                    coords: [37.3192, -8.8033],
                                    locationName: "Aljezur, Portugal",
                                    children: []
                                },
                                {
                                    name: "Nomi Rimon",
                                    role: "G5: Student",
                                    image: "https://osrg.lol/wp-content/uploads/2025/12/IMG-20250724-WA0005.jpg",
                                    coords: [37.3192, -8.8033],
                                    locationName: "Aljezur, Portugal",
                                    children: []
                                }
                            ]
                        },
                        {
                            name: "Ronnie Heller",
                            role: "G4: Choreographer",
                            children: [
                                {
                                    name: "Amir Heller",
                                    role: "G5: Son (Age 21)",
                                    children: []
                                },
                                {
                                    name: "David Heller",
                                    role: "G5: Son (Age 15-16)",
                                    children: []
                                }
                            ]
                        },
                        {
                            name: "DUNICA",
                            role: "Shared Venture: Biotech & Therapeutics",
                            description: "A pioneering biomedical venture co-founded by Daniella Givon.",
                            type: "venture",
                            children: []
                        }
                    ]
                },
                {
                    name: "Haya Ran",
                    role: "G3: Sibling (Deceased)",
                    image: "",
                    children: [
                        {
                            name: "Amnon Marton",
                            role: "G3: First Husband",
                            children: [
                                {
                                    name: "Yifat Marton",
                                    role: "G4: Daughter (Deceased)",
                                    image: "",
                                    children: []
                                },
                                {
                                    name: "Orit Marton",
                                    role: "G4: Daughter (Amnon's branch)",
                                    children: []
                                },
                                {
                                    name: "Tzafra Marton",
                                    role: "G4: Daughter (Amnon's branch)",
                                    children: []
                                }
                            ]
                        },
                        {
                            name: "Moshe Ran",
                            role: "G3: Second Husband",
                            children: [
                                {
                                    name: "Gal Ran",
                                    role: "G4: Son",
                                    image: "",
                                    children: []
                                },
                                {
                                    name: "Maya Ran",
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
                                },
                                {
                                    name: "Iris Frumerman",
                                    role: "G4: Daughter (Moshe's branch)",
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
        },
        {
            name: "Leah Diamentstein",
            role: "G2: Matriarch (Deceased)",
            partner: {
                name: "Ze'ev Gurfinkel",
                role: "G2: Patriarch (Deceased)"
            },
            children: [
                {
                    name: "Ran Nergal",
                    role: "G3: Sibling",
                    children: [
                        {
                            name: "Kohava Nergal",
                            role: "G3: First Wife",
                            children: [
                                { name: "Tali Nergal", role: "G4: Daughter" },
                                { name: "Livnat Nergal", role: "G4: Daughter" }
                            ]
                        },
                        {
                            name: "Rachel Nergal",
                            role: "G3: Second Wife",
                            children: [
                                { name: "Ziv Nergal", role: "G4: Child" },
                                { name: "Chen Nergal", role: "G4: Child" }
                            ]
                        }
                    ]
                },
                {
                    name: "Deborah Miriam Givon (Gurfinkel)",
                    role: "G3: Early Childhood Expert",
                    description: "Born Deborah Miriam Gurfinkel. Sister of Ran Nergal. Daughter of Leah and Ze'ev.",
                    children: []
                }
            ]
        },
        {
            name: "Rachel Diamentstein",
            role: "G2: Sibling",
            partner: {
                name: "Ashkenazy",
                role: "Partner"
            },
            children: [
                {
                    name: "Herbert Ashkenazy",
                    role: "G3: Sibling",
                    partner: {
                        name: "Ruth Ashkenazy",
                        role: "Partner"
                    },
                    children: [
                        {
                            name: "Leah Ashkenazy",
                            role: "G4: Sibling",
                            children: [
                                { name: "Girl Reid 1", role: "G5: Daughter" },
                                { name: "Girl Reid 2", role: "G5: Daughter" }
                            ]
                        },
                        {
                            name: "David Ashkenazy",
                            role: "G4: Sibling",
                            children: []
                        },
                        {
                            name: "Miriam Ashkenazy",
                            role: "G4: Sibling",
                            children: [
                                { name: "Altamo Ashkenazy", role: "G5: Child" },
                                { name: "Ezria Ashkenazy", role: "G5: Child" }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            name: "Hirsch Weissbarst",
            role: "G-1: Ancestor",
            image: "",
            partner: {
                name: "Beile Frenkel",
                role: "G-1: Ancestor",
                image: ""
            },
            children: [
                {
                    name: "Rachmiel Muhlrad-Weissburst",
                    role: "G0: Ancestor",
                    image: "",
                    partner: {
                        name: "Scheindel Weissbarst",
                        role: "G0: Ancestor (b. 1861)",
                        image: ""
                    },
                    children: [
                        {
                            name: "Zvi Weissburst",
                            role: "G1: Merchant (b. 1888)",
                            image: "",
                            partner: {
                                name: "Sara Weissbarst",
                                role: "G1: Matriarch",
                                image: ""
                            },
                            children: [
                                {
                                    name: "Shalom Weissbarst",
                                    role: "G2: Architect (1915-2002) (Deceased)",
                                    image: "",
                                    description: "A distinguished architect and father of Talma Rimon. Born in Haifa (1915), he bridged the Weissbarst heritage with the family legacy.",
                                    partner: {
                                        name: "Tova (Gita) Wallach",
                                        role: "Partner (1917-2002)",
                                        image: "",
                                        description: "Born in Ukraine (Dec 1917), immigrated to Jerusalem in 1921. Daughter of Shmuel Eliezer Wallach and Tsipora Kaminetsky."
                                    },
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
    if (!container) return;
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
    const treeContainer = document.getElementById('family-tree');
    const viewport = document.querySelector('.tree-viewport');
    const zoomInBtn = document.getElementById('zoom-in');
    const zoomOutBtn = document.getElementById('zoom-out');
    const zoomResetBtn = document.getElementById('zoom-reset');
    const searchInput = document.getElementById('member-search');
    const searchResults = document.getElementById('search-results');

    if (!treeContainer || !viewport) return;

    const updateZoom = () => {
        treeContainer.style.transform = `scale(${zoomLevel})`;
    };

    const scrollToElement = (element) => {
        if (!element) return;

        // Spotlight highlight immediately
        element.classList.add('spotlight');

        // Robust centering logic that works at ANY zoom level
        const viewportRect = viewport.getBoundingClientRect();
        const elementRect = element.getBoundingClientRect();

        // Calculate the center points
        const elementCenterX = elementRect.left + (elementRect.width / 2);
        const elementCenterY = elementRect.top + (elementRect.height / 2);
        const viewportCenterX = viewportRect.left + (viewportRect.width / 2);
        const viewportCenterY = viewportRect.top + (viewportRect.height / 2);

        // The delta needed to bring element center to viewport center
        const deltaX = elementCenterX - viewportCenterX;
        const deltaY = elementCenterY - viewportCenterY;

        viewport.scrollBy({
            left: deltaX,
            top: deltaY,
            behavior: 'smooth'
        });

        setTimeout(() => element.classList.remove('spotlight'), 3000);
    };

    // --- Search Logic ---
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const query = e.target.value.toLowerCase().trim();
            searchResults.innerHTML = '';

            if (query.length < 1) {
                searchResults.style.display = 'none';
                return;
            }

            const matches = [];
            const cards = document.querySelectorAll('.member-card');
            cards.forEach(card => {
                const name = card.querySelector('.member-name').textContent;
                if (name.toLowerCase().includes(query)) {
                    matches.push({ name, element: card });
                }
            });

            if (matches.length > 0) {
                searchResults.style.display = 'block';
                matches.slice(0, 10).forEach(match => {
                    const div = document.createElement('div');
                    div.className = 'search-result-item';
                    const role = match.element.querySelector('.member-role').textContent;
                    div.innerHTML = `<strong>${match.name}</strong><br><small style="opacity:0.7">${role}</small>`;
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

    // --- Lineage Navigation ---
    const navBtns = document.querySelectorAll('.nav-jump-btn');
    navBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const index = parseInt(btn.dataset.lineage);
            const sections = document.querySelectorAll('.lineage-section');
            if (sections[index]) {
                navBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');

                // Focus the root card of this lineage
                const rootCard = sections[index].querySelector('.member-card');
                scrollToElement(rootCard);
            }
        });
    });

    // --- Generation Navigation ---
    const genBtns = document.querySelectorAll('.nav-gen-btn');
    genBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const genTag = btn.dataset.gen; // "G0" or "G5"
            const cards = Array.from(document.querySelectorAll('.member-card'));

            // Priority landmark for G5 is Omer Rimon
            let target;
            if (genTag === 'G5') {
                target = cards.find(c => c.querySelector('.member-name').textContent.includes('Omer Rimon'));
            }

            if (!target) {
                target = cards.find(card => {
                    const role = card.querySelector('.member-role').textContent;
                    return role.includes(genTag);
                });
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
            zoomLevel = Math.max(0.3, Math.min(2.5, zoomLevel + delta));
            updateZoom();
        }
    }, { passive: false });

    // --- Button Zoom ---
    zoomInBtn.addEventListener('click', () => {
        zoomLevel = Math.min(zoomLevel + 0.1, 2.5);
        updateZoom();
    });

    zoomOutBtn.addEventListener('click', () => {
        zoomLevel = Math.max(zoomLevel - 0.1, 0.3);
        updateZoom();
    });

    zoomResetBtn.addEventListener('click', () => {
        zoomLevel = 1;
        updateZoom();
        centerTree();
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
                case '-': zoomLevel = Math.max(zoomLevel - 0.1, 0.3); updateZoom(); break;
            }
        }
    });

    // --- Mouse Panning with Momentum ---
    let isDown = false;
    let startX, startY, scrollLeft, scrollTop;
    let velX = 0, velY = 0, lastX = 0, lastY = 0;

    const applyMomentum = () => {
        if (!isDown && (Math.abs(velX) > 0.1 || Math.abs(velY) > 0.1)) {
            viewport.scrollLeft -= velX;
            viewport.scrollTop -= velY;
            velX *= 0.95; // Friction
            velY *= 0.95;
            requestAnimationFrame(applyMomentum);
        }
    };

    viewport.addEventListener('mousedown', (e) => {
        if (e.target.closest('.member-card') || e.target.closest('.lineage-navigator')) return;
        isDown = true;
        startX = e.pageX - viewport.offsetLeft;
        startY = e.pageY - viewport.offsetTop;
        scrollLeft = viewport.scrollLeft;
        scrollTop = viewport.scrollTop;
        lastX = e.pageX;
        lastY = e.pageY;
        viewport.style.cursor = 'grabbing';
    });

    window.addEventListener('mouseup', () => {
        if (!isDown) return;
        isDown = false;
        viewport.style.cursor = 'grab';
        applyMomentum();
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

        // Calculate velocity for momentum
        velX = e.pageX - lastX;
        velY = e.pageY - lastY;
        lastX = e.pageX;
        lastY = e.pageY;
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
    mapInitialized = true;

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
