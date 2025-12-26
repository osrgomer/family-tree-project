/**
 * Family Tree Data Structure
 */

const familyData = {
    name: "The Rimon-Givon Legacy",
    role: "United Family",
    children: [
        {
            name: "Granat",
            role: "Roots: Biezun & Jaffa",
            coords: [52.9515, 20.0119],
            children: [
                {
                    name: "Yosef Granat",
                    role: "G-2: Ancestor",
                    image: "",
                    coords: [52.9566, 19.8893],
                    locationName: "Biezun, Poland",
                    description: "The early ancestor from the Bieżuń/Mazovian region.",
                    children: [
                        {
                            name: "Hirsch Granat",
                            role: "G-1: Ancestor",
                            image: "",
                            coords: [52.9566, 19.8894], // Slight offset
                            locationName: "Biezun, Poland",
                            description: "Ancestor and namesake for the Granat/Rimon branch.",
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
                                                    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Yosef_Zvi_Rimon%2C_1939_%28FL12175215%29.jpg/250px-Yosef_Zvi_Rimon%2C_1939_%28FL12175215%29.jpg",
                                                    coords: [31.7683, 35.2137],
                                                    locationName: "Jerusalem, Israel",
                                                    description: "Renowned poet close to Rav Kook. Advisor to Shai Agnon. Changed surname from Granat.",
                                                    children: [
                                                        {
                                                            name: "David Rimon",
                                                            role: "G3: Haganah Member (1916–2002)",
                                                            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/%D7%93%D7%95%D7%93_%D7%A8%D7%99%D7%9E%D7%95%D7%9F_-_%D7%A7%D7%91%D7%9C%D7%AA_%D7%99%D7%A7%D7%99%D7%A8_%D7%94%D7%A2%D7%99%D7%A8_%D7%AA%D7%9C_%D7%90%D7%91%D7%99%D7%91.tif/lossy-page1-200px-%D7%93%D7%95%D7%93_%D7%A8%D7%99%D7%9E%D7%95%D7%9F_-_%D7%A7%D7%91%D7%9C%D7%AA_%D7%99%D7%A7%D7%99%D7%A8_%D7%94%D7%A2%D7%99%D7%A8_%D7%AA%D7%9C_%D7%90%D7%91%D7%99%D7%91.tif.jpg",
                                                            coords: [32.0667, 34.7772],
                                                            locationName: "Tel Aviv-Yafo, Israel",
                                                            description: "Haganah member, Military Police founder, and Yakir Tel Aviv (1998). Founded the 'Rimon School'.",
                                                            children: [
                                                                {
                                                                    name: "Rabbi Yosef Zvi Rimon",
                                                                    role: "G4: Halachic Authority & Rabbi",
                                                                    image: "https://bluefringes.s3.amazonaws.com/wp-content/uploads/2020/01/17122129/0080_Yosef-Zvi-Rimon.jpg",
                                                                    coords: [31.6167, 35.1167],
                                                                    locationName: "Alon Shvut, Israel",
                                                                    description: "Distinguished rabbi and halachic authority. Chief Rabbi of Gush Etzion, Nasi of World Mizrachi, Rosh Yeshiva of Lev Academic Center (JCT). Great-grandson of Ephraim Eliezer Granat Rimon and grandson of poet Yosef Zvi Rimon.",
                                                                    partner: {
                                                                        name: "Rabbanit Sharon Rimon (Blumenzweig)",
                                                                        role: "G4: Tanach Scholar & Educator",
                                                                        description: "Daughter of Rabbi Eliyahu Blumenzweig (founder of Yeshivat Hesder Yerucham). Content editor for HaTanakh website, teacher in women's midrashot, author of 'Prisms: Perspectives on the Parasha'.",
                                                                        image: "https://mizrachi.org/wp-content/uploads/2022/04/HaMizrachi-Pesach-27.jpg"
                                                                    },
                                                                    children: [
                                                                        { name: "Daughter 1 Rimon", role: "G5: Daughter", children: [] },
                                                                        { name: "Daughter 2 Rimon", role: "G5: Daughter", children: [] },
                                                                        { name: "Daughter 3 Rimon", role: "G5: Daughter", children: [] },
                                                                        { name: "Daughter 4 Rimon", role: "G5: Daughter", children: [] },
                                                                        { name: "Daughter 5 Rimon", role: "G5: Daughter", children: [] },
                                                                        { name: "Daughter 6 Rimon", role: "G5: Daughter", children: [] },
                                                                        { name: "Daughter 7 Rimon", role: "G5: Daughter", children: [] },
                                                                        { name: "Daughter 8 Rimon", role: "G5: Daughter", children: [] }
                                                                    ]
                                                                }
                                                            ]
                                                        }
                                                    ]
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
                                            coords: [32.0554, 34.7531],
                                            locationName: "Jaffa, Israel",
                                            description: "Renowned Hebrew poet and author of the religious-Zionist movement. Born in Biezun, Poland. Immigrated to Jaffa in 1909.",
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
                                                    coords: [32.0853, 34.7818],
                                                    locationName: "Ha-Rav Herzog St 17, Tel Aviv-Jaffa, Israel",
                                                    partner: {
                                                        name: "Talma Rimon",
                                                        role: "G3: Bank of Israel",
                                                        coords: [32.0853, 34.7818],
                                                        locationName: "Ha-Rav Herzog St 17, Tel Aviv-Jaffa, Israel",
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
                                                                image: "https://scontent-mad2-1.xx.fbcdn.net/v/t1.6435-1/90784911_10156686869197610_3607218928830382080_n.jpg?stp=c0.205.1638.1638a_dst-jpg_s200x200_tt6&_nc_cat=109&ccb=1-7&_nc_sid=fe59b0&_nc_ohc=q4PniCXWyiAQ7kNvwFb4qeu&_nc_oc=AdmtC3FesuZAuFgUe5twQKHYuIQPJL8-8o6AP-VngbiDEkruxZEeoDCHfnMTg7zBwXk&_nc_zt=24&_nc_ht=scontent-mad2-1.xx&_nc_gid=97MW2ts3B2nUE0djMgpevQ&oh=00_AfnLF5TiEr47ptHm6RUOcPzJvVGdDv_6RFQMoZ4AnyMtIw&oe=696BD180",
                                                                coords: [37.330462, -8.731486],
                                                                locationName: "Aljezur, Portugal"
                                                            },
                                                            coords: [37.330462, -8.731486],
                                                            locationName: "Aljezur, Portugal",
                                                            partnerLeft: true,
                                                            children: [
                                                                {
                                                                    name: "Omer Shalom Rimon",
                                                                    role: "G5: The Union (Age 13.5)",
                                                                    image: "https://i.pinimg.com/736x/c8/e1/c2/c8e1c2206c98cfbdb48d793c219d01e1.jpg",
                                                                    description: "Named after Shalom Weissbarst, his great-grandfather. Nickname: OSRG (Omer Shalom Rimon Givon).",
                                                                    coords: [37.330462, -8.731486],
                                                                    locationName: "Aljezur, Portugal",
                                                                    children: []
                                                                },
                                                                {
                                                                    name: "Nomi Rimon",
                                                                    role: "G5: Daughter (Omer's Sister)",
                                                                    image: "https://osrg.lol/wp-content/uploads/2025/12/IMG-20250724-WA0005.jpg",
                                                                    coords: [37.330462, -8.731486],
                                                                    locationName: "Aljezur, Portugal",
                                                                    children: []
                                                                }
                                                            ]
                                                        },
                                                        {
                                                            name: "Ran Rimon",
                                                            role: "G4: Entrepreneur",
                                                            image: "https://pbs.twimg.com/profile_images/1524011464109002752/GLGXYNu9_400x400.jpg",
                                                            coords: [32.0746, 34.7778],
                                                            locationName: "Sanhedrin St 4, Tel Aviv-Jaffa, Israel",
                                                            partner: {
                                                                name: "Shulamit Bonder",
                                                                role: "Spouse",
                                                                coords: [32.0746, 34.7778],
                                                                locationName: "Sanhedrin St 4, Tel Aviv-Jaffa, Israel",
                                                                image: "https://scontent-mad2-1.xx.fbcdn.net/v/t39.30808-6/533403493_10163326229828001_8494516799865299173_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=IolxikDnQVIQ7kNvwFMYnZf&_nc_oc=AdltJbVOONpMwdv1m4BXbw2xQ2HlYqUqhf5YkKa9LGTg-hUIPs9vB2S-C87KxA780SA&_nc_zt=23&_nc_ht=scontent-mad2-1.xx&_nc_gid=8R1DQ8G_MLMTBV8qMclJAw&oh=00_AfmUHCRSox1lt5tJsHSQYZ29VABrMGgFZFSJpT0loBZ4Tw&oe=6950EF48",
                                                            },
                                                            children: [
                                                                {
                                                                    name: "Eyal Rimon",
                                                                    role: "G5: Student (Age 14)",
                                                                    image: "https://scontent-mad2-1.xx.fbcdn.net/v/t39.30808-6/533403493_10163326229828001_8494516799865299173_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=IolxikDnQVIQ7kNvwFMYnZf&_nc_oc=AdltJbVOONpMwdv1m4BXbw2xQ2HlYqUqhf5YkKa9LGTg-hUIPs9vB2S-C87KxA780SA&_nc_zt=23&_nc_ht=scontent-mad2-1.xx&_nc_gid=8R1DQ8G_MLMTBV8qMclJAw&oh=00_AfmUHCRSox1lt5tJsHSQYZ29VABrMGgFZFSJpT0loBZ4Tw&oe=6950EF48",
                                                                    coords: [32.0746, 34.7778],
                                                                    locationName: "Sanhedrin St 4, Tel Aviv-Jaffa, Israel",
                                                                    children: []
                                                                },
                                                                {
                                                                    name: "Talia Rimon",
                                                                    role: "G5: Student (Age 11-12)",
                                                                    image: "https://scontent-mad2-1.xx.fbcdn.net/v/t39.30808-6/533403493_10163326229828001_8494516799865299173_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=IolxikDnQVIQ7kNvwFMYnZf&_nc_oc=AdltJbVOONpMwdv1m4BXbw2xQ2HlYqUqhf5YkKa9LGTg-hUIPs9vB2S-C87KxA780SA&_nc_zt=23&_nc_ht=scontent-mad2-1.xx&_nc_gid=8R1DQ8G_MLMTBV8qMclJAw&oh=00_AfmUHCRSox1lt5tJsHSQYZ29VABrMGgFZFSJpT0loBZ4Tw&oe=6950EF48",
                                                                    coords: [32.0746, 34.7778],
                                                                    locationName: "Sanhedrin St 4, Tel Aviv-Jaffa, Israel",
                                                                    children: []
                                                                },
                                                                {
                                                                    name: "Gur Rimon",
                                                                    role: "G5: Student (Age 6-7)",
                                                                    image: "https://scontent-mad2-1.xx.fbcdn.net/v/t39.30808-6/533403493_10163326229828001_8494516799865299173_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=IolxikDnQVIQ7kNvwFMYnZf&_nc_oc=AdltJbVOONpMwdv1m4BXbw2xQ2HlYqUqhf5YkKa9LGTg-hUIPs9vB2S-C87KxA780SA&_nc_zt=23&_nc_ht=scontent-mad2-1.xx&_nc_gid=8R1DQ8G_MLMTBV8qMclJAw&oh=00_AfmUHCRSox1lt5tJsHSQYZ29VABrMGgFZFSJpT0loBZ4Tw&oe=6950EF48",
                                                                    coords: [32.0746, 34.7778],
                                                                    locationName: "Sanhedrin St 4, Tel Aviv-Jaffa, Israel",
                                                                    children: []
                                                                },
                                                                {
                                                                    name: "Ana Rimon",
                                                                    role: "G5: Student (Age 1.5)",
                                                                    image: "https://scontent-mad2-1.xx.fbcdn.net/v/t39.30808-6/533403493_10163326229828001_8494516799865299173_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=IolxikDnQVIQ7kNvwFMYnZf&_nc_oc=AdltJbVOONpMwdv1m4BXbw2xQ2HlYqUqhf5YkKa9LGTg-hUIPs9vB2S-C87KxA780SA&_nc_zt=23&_nc_ht=scontent-mad2-1.xx&_nc_gid=8R1DQ8G_MLMTBV8qMclJAw&oh=00_AfmUHCRSox1lt5tJsHSQYZ29VABrMGgFZFSJpT0loBZ4Tw&oe=6950EF48",
                                                                    coords: [32.0746, 34.7778],
                                                                    locationName: "Sanhedrin St 4, Tel Aviv-Jaffa, Israel",
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
            name: "Givon",
            role: "Heritage: Zoref-Gelbman-Givon",
            coords: [37.330462, -8.731486],
            children: [
                {
                    name: "Yehuda Zoref",
                    image: "",
                    partner: {
                        name: "Zimbul Behar",
                        role: "G1: Matriarch",
                        image: ""
                    },
                    children: [
                        {
                            name: "Victoria Zoref",
                            role: "G2: Matriarch (Poor sense of smell)",
                            image: "",
                            description: "Mother of Moshe Givon. Had impaired sense of smell.",
                            partner: {
                                name: "Zvi Gelbman",
                                role: "G2: Patriarch",
                                image: ""
                            },
                            children: [
                                {
                                    name: "Moshe Givon (Gelbman)",
                                    role: "G3: The Marketer (1927–2010)",
                                    image: "",
                                    coords: [32.0746, 34.7778],
                                    locationName: "Meishar, Israel",
                                    description: "Born in Budapest. Married Ronnie Heller.",
                                    partner: {
                                        name: "Ronnie Heller",
                                        role: "G3: Matriarch",
                                        image: "",
                                        coords: [32.0805, 34.7733],
                                        locationName: "Bar Kochba, Tel Aviv, Israel"
                                    },
                                    children: [
                                        {
                                            name: "Amir Heller",
                                            role: "G5: Pro Surfer (Age 21)",
                                            image: "https://osrg.lol/wp-content/uploads/2025/12/IMG-20250724-WA0006.jpg",
                                            coords: [37.330462, -8.731486],
                                            locationName: "Aljezur, Portugal",
                                            description: "Professional suffer.",
                                            children: []
                                        },
                                        {
                                            name: "David Heller",
                                            role: "G5: Sibling (Age 15-16)",
                                            image: "https://osrg.lol/wp-content/uploads/2025/12/David-Heller.jpg",
                                            coords: [37.330462, -8.731486],
                                            locationName: "Aljezur, Portugal",
                                            children: []
                                        },
                                        {
                                            name: "Daphna Givon",
                                            role: "G4: Mother of Omer/Nomi/Eyal",
                                            image: "",
                                            children: [] // (Assuming children are defined elsewhere or omitted for brevity in this fix block)
                                        }
                                    ]
                                },
                                {
                                    name: "Zvi Givon (Gelbman)",
                                    role: "G3: Brother (Kept Gelbman surname)",
                                    image: "",
                                    coords: [32.0853, 34.7818],
                                    locationName: "Tel Aviv, Israel",
                                    description: "Brother of Moshe Givon. Born Zvi Gelbman, son of Victoria Zoref.",
                                    children: [
                                        {
                                            name: "Thomas (Tsvi) Givon",
                                            role: "G4: Distinguished Professor (Linguistics)",
                                            image: "https://cas.uoregon.edu/sites/default/files/uo_profiles/tgivon_cas_499767.png",
                                            coords: [44.0448, -123.0726],
                                            locationName: "Eugene, Oregon, USA",
                                            description: "Known by the nickname 'Talmy', he is a world-renowned linguist and Distinguished Professor Emeritus at the University of Oregon.",
                                            partner: {
                                                name: "Linda Givon",
                                                role: "Partner (Second Wife)",
                                                image: "https://scontent-mad2-1.xx.fbcdn.net/v/t39.30808-6/503846725_122133761840783651_9154276442130859309_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=Syu0j3XfFSsQ7kNvwFOnBm9&_nc_oc=Adl2kAchI2lUSXoZMMKrPQwQfJZgGEP_-ey_caywb8NteS24vPXdVRM7KNb6WTLYg4o&_nc_zt=23&_nc_ht=scontent-mad2-1.xx&_nc_gid=LnbX0EfZGLPepb8ocOLk4Q&oh=00_AfmOt2Fk4Y582w-fDSs5fMyENQHq02TdmliSkPfyI8gvXw&oe=6950D8F3"
                                            },
                                            children: [
                                                {
                                                    name: "Chris Givon",
                                                    role: "G5: Son (from first marriage)",
                                                    children: [
                                                        {
                                                            name: "Raquel Givon",
                                                            role: "G6: Daughter",
                                                            children: [
                                                                { name: "Son", role: "G7: Grandson" },
                                                                { name: "Daughter", role: "G7: Granddaughter" }
                                                            ]
                                                        }
                                                    ]
                                                },
                                                {
                                                    name: "Nathaniel Givon",
                                                    role: "G5: Son (with Linda)",
                                                    children: []
                                                }
                                            ]
                                        },
                                        {
                                            name: "Haya Ran",
                                            role: "G4: Daughter (Deceased)",
                                            coords: [32.0853, 34.7818],
                                            locationName: "Tel Aviv, Israel",
                                            image: "",
                                            partner: {
                                                name: "Amnon Marton",
                                                role: "G4: First Husband",
                                                coords: [32.0853, 34.7818],
                                                locationName: "Tel Aviv, Israel",
                                                image: ""
                                            },
                                            secondPartner: {
                                                name: "Moshe Ran",
                                                role: "G4: Second Husband",
                                                coords: [32.0853, 34.7818],
                                                locationName: "Tel Aviv, Israel",
                                                image: ""
                                            },
                                            partnerLeft: true,
                                            children: [
                                                {
                                                    name: "Yifat Marton",
                                                    role: "G5: Daughter (Deceased)",
                                                    image: "",
                                                    children: []
                                                },
                                                {
                                                    name: "Orit Marton",
                                                    role: "G5: Daughter",
                                                    children: []
                                                },
                                                {
                                                    name: "Tzafra Marton",
                                                    role: "G5: Daughter",
                                                    children: []
                                                },
                                                {
                                                    name: "Gal M. Ran",
                                                    role: "G5: Son",
                                                    coords: [32.0853, 34.7818],
                                                    locationName: "Tel Aviv, Israel",
                                                    image: "https://scontent-mad2-1.xx.fbcdn.net/v/t39.30808-6/437066131_10160129146198527_5926308342990968437_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=Lul9qunEtK0Q7kNvwEP4ELx&_nc_oc=AdkfpdXM9BeGJfaCszTyf77hMltJiA5Ia1fLAbV947IBdD3rKFivQ2qcojwK3_9RC30&_nc_zt=23&_nc_ht=scontent-mad2-1.xx&_nc_gid=oL7XDiG9PS3Lr2r-1O8XKQ&oh=00_AfnFzYBZdxREjulKQoBRcVuwC_wO-Yp74JUEWbMYlY6VZg&oe=6950D33B",
                                                    children: []
                                                },
                                                {
                                                    name: "Maya Ran",
                                                    role: "G5: Daughter (Deceased)",
                                                    coords: [32.0853, 34.7818],
                                                    locationName: "Tel Aviv, Israel",
                                                    image: "",
                                                    children: [
                                                        {
                                                            name: "Matan Punk",
                                                            role: "G6: Son",
                                                            coords: [32.0853, 34.7818],
                                                            locationName: "Tel Aviv, Israel",
                                                            image: "https://scontent-mad2-1.xx.fbcdn.net/v/t39.30808-6/540989036_122137830242829366_6835664265111869651_n.jpg?stp=dst-jpg_p526x296_tt6&_nc_cat=104&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=NE_HQESTJJ4Q7kNvwH9nl8I&_nc_oc=AdkOzG9bjViWU5JT6yFXOnM7bTeqPRyetAnWWMvYYU75g1LtFZAUjH5xVNCC0JbSaRE&_nc_zt=23&_nc_ht=scontent-mad2-1.xx&_nc_gid=Q0wJa_GO43ed-PxMwnFg7g&oh=00_Afn0lUpzyTBMJbcAaVnhLPHL1SFnb4Q4mDTiy6Ex4VrUqw&oe=6950C310",
                                                            children: []
                                                        }
                                                    ]
                                                },
                                                {
                                                    name: "Iris Leal",
                                                    role: "G5: Daughter",
                                                    coords: [32.0853, 34.7818],
                                                    locationName: "Tel Aviv, Israel",
                                                    image: "https://scontent-mad2-1.xx.fbcdn.net/v/t39.30808-6/461947836_3836661456554090_2781556915325872438_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=3YssWM3ga0YQ7kNvwGrd8Ir&_nc_oc=AdkGvoTqov2ViRK4aYAalDCmbF1AQ9VZEUHHx45PYS-wbCwJdzTD7DNHK3NQMARqSxI&_nc_zt=23&_nc_ht=scontent-mad2-1.xx&_nc_gid=KwVuvDoUTwzySLHNMLgM0g&oh=00_AfnT5JHhOWbThbhzu1zhchMwI9FPx0j8QV8b3e4Mm1U38Q&oe=6950D865",
                                                    description: "Born Iris Frumerman. Daughter of Moshe Ran. First married to Leal, then to Tamir Sher.",
                                                    partner: {
                                                        name: "Dudi Leal",
                                                        role: "G5: First Husband",
                                                        image: ""
                                                    },
                                                    secondPartner: {
                                                        name: "Tamir Sher",
                                                        role: "G5: Second Husband",
                                                        image: ""
                                                    },
                                                    partnerLeft: true,
                                                    children: [
                                                        {
                                                            name: "Jorden Leal",
                                                            role: "G6: Daughter (first marriage)",
                                                            image: "",
                                                            children: []
                                                        },
                                                        {
                                                            name: "Itamar Sher",
                                                            role: "G6: Son (second marriage)",
                                                            image: "",
                                                            children: []
                                                        },
                                                        {
                                                            name: "Ari Sher",
                                                            role: "G6: Daughter (second marriage)",
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
        },


        {
            name: "Cohen",
            role: "Heritage: Paternal Roots",
            coords: [31.7683, 35.2137],
            children: [
                {
                    name: "Baruch Tzvi Hirsh Cohen",
                    role: "Paternal Roots (1852–1941)",
                    children: [
                        {
                            name: "Rabbi Mosheh David Rozental Hacohen",
                            role: "G2: Rabbi & Scholar",
                            children: [
                                {
                                    name: "Benjamin Cohen",
                                    role: "G3: Husband (1921–1981)",
                                    children: []
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            name: "Diamentstein",
            role: "Heritage: Sátoraljaújhely, Hungary",
            coords: [48.3949, 21.6586],
            children: [
                {
                    name: "Leah Diamentstein",
                    role: "G2: Matriarch",
                    coords: [48.3949, 21.6586],
                    description: "Sister of Rachel Diamentstein. Ancestral root in Hungary.",
                    children: []
                },
                {
                    name: "Rachel Diamentstein",
                    role: "G2: Sibling",
                    coords: [48.3949, 21.6586],
                    description: "Sister of Leah Diamentstein.",
                    children: []
                }
            ]
        },
        {
            name: "Weissbarst",
            role: "Heritage: Haifa & Tel Aviv",
            coords: [32.7940, 34.9896],
            children: [
                {
                    name: "Hirsch Weissbarst",
                    role: "G-1: Ancestor",
                    children: [
                        {
                            name: "Rachmiel Muhlrad-Weissburst",
                            role: "G0: Ancestor",
                            children: [
                                {
                                    name: "Zvi Weissburst",
                                    role: "G1: Merchant",
                                    children: [
                                        {
                                            name: "Shalom Weissbarst",
                                            role: "G2: Architect (1915-2002)",
                                            coords: [32.7940, 34.9896],
                                            description: "Distinguished architect and father of Talma Rimon.",
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
            name: "DUNICA",
            type: "venture",
            coords: [37.330462, -8.731486],
            description: "Artistic workshop and craftsmanship collective (Ex-Company)",
            children: [
                {
                    name: "The Workshop",
                    role: "Historical Focus",
                    description: "The core of the collective's operations in Aljezur.",
                    children: []
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

function renderTree() {
    const container = document.getElementById('family-tree');
    if (!container) return;
    container.innerHTML = ''; // Clear previous content

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
    const treeContainer = document.getElementById('family-tree');
    const viewport = document.querySelector('.tree-viewport');
    const zoomInBtn = document.getElementById('zoom-in');
    const zoomOutBtn = document.getElementById('zoom-out');
    const zoomResetBtn = document.getElementById('zoom-reset');
    const exportGedcomBtn = document.getElementById('export-gedcom');
    const searchInput = document.getElementById('member-search');
    const searchResults = document.getElementById('search-results');

    if (!treeContainer || !viewport || !zoomResetBtn) return;

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
                            const lineageName = section.dataset.lineageName.toLowerCase();
                            if (lineageName.includes('granat') || lineageName.includes('yosef')) {
                                lineage = 'Granat';
                            } else if (lineageName.includes('givon') || lineageName.includes('zvi')) {
                                lineage = 'Givon';
                            } else if (lineageName.includes('cohen') || lineageName.includes('baruch')) {
                                lineage = 'Cohen';
                            } else if (lineageName.includes('diamentstein') || lineageName.includes('leah')) {
                                lineage = 'Diamentstein';
                            } else if (lineageName.includes('weissbarst') || lineageName.includes('hirsch')) {
                                lineage = 'Weissbarst';
                            }
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

    // --- Lineage Navigation ---
    const navBtns = document.querySelectorAll('.nav-jump-btn');
    navBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const index = parseInt(btn.dataset.lineage);
            const sections = document.querySelectorAll('.lineage-section');

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

    // --- Click & Drag Panning (Industry Standard) ---
    let isDown = false;

    const startDragging = (e) => {
        if (shouldIgnoreDrag(e.target)) return;
        isDown = true;
        viewport.style.cursor = 'grabbing';
        e.preventDefault();
    };

    const stopDragging = () => {
        isDown = false;
        viewport.style.cursor = 'grab';
    };

    const move = (e) => {
        if (!isDown) return;
        e.preventDefault();

        // Use built-in movementX/Y for frame-to-frame movement
        viewport.scrollLeft -= e.movementX;
        viewport.scrollTop -= e.movementY;
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

        gedcom += `0 ${id} INDI\n`;
        gedcom += `1 NAME ${member.name}\n`;
        if (member.role) gedcom += `1 NOTE ${member.role}\n`;
        if (member.coords) gedcom += `1 RESI\n2 PLAC ${member.locationName || 'Unknown'}\n`;
        if (parentFamilyId) gedcom += `1 FAMC @${parentFamilyId}@\n`;

        if (member.partner) {
            const famId = `F${familyId++}`;
            const spouseId = `I${individualId++}`;
            personMap.set(member.partner.name, spouseId);

            gedcom += `1 FAMS @${famId}@\n`;

            gedcom += `0 ${spouseId} INDI\n`;
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