
try {
    console.log("DEBUG: Checking familyData structure...");
    if (typeof familyData === 'undefined') {
        console.error("DEBUG: familyData is undefined!");
    } else {
        console.log("DEBUG: familyData.children length:", familyData.children.length);
        familyData.children.forEach((child, index) => {
            console.log(`DEBUG: Index ${index} -> Name: ${child.name}`);
        });
    }
} catch (e) {
    console.error("DEBUG: Error checking structure:", e);
}
