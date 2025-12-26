const fs = require('fs');

// Read the script.js file to extract familyData
const scriptContent = fs.readFileSync('script.js', 'utf8');

// Quick and dirty extraction of the familyData object string
// This assumes familyData is defined as 'const familyData = { ... };' 
// and that it ends before the createCard function
const startIndex = scriptContent.indexOf('const familyData = {');
const endIndex = scriptContent.indexOf('};', startIndex) + 2;

// We can't easily eval() the raw file because it might contain comments or other JS.
// For a robust gap analysis without running the browser, let's regex scan or parse carefully.
// Actually, since we have the file structure, let's just use regex to find names and check for coords within the block.

// Better approach: Let's assume the syntax is valid JSON-ish and try to parse it after cleaning.
// OR, we can just effectively duplicate the logic in a small node script if we copy the object.
// But copying is error prone.

// Let's use a regex scan for "name:" and look ahead for "coords:".
// This is a heuristic scan.

const lines = scriptContent.split('\n');
let currentLineage = "Unknown";
let currentPerson = null;
let hasCoords = false;
let persons = [];

lines.forEach((line, index) => {
    const trimmed = line.trim();

    // Detect Lineage Start (Roots)
    if (trimmed.includes('name: "Granat"')) currentLineage = "Granat";
    if (trimmed.includes('name: "Givon"')) currentLineage = "Givon";
    if (trimmed.includes('name: "Cohen"')) currentLineage = "Cohen";
    if (trimmed.includes('name: "Diamentstein"')) currentLineage = "Diamentstein";
    if (trimmed.includes('name: "Weissbarst"')) currentLineage = "Weissbarst";
    if (trimmed.includes('name: "DUNICA"')) currentLineage = "DUNICA";

    // Detect Name
    if (trimmed.startsWith('name: "')) {
        // If we were tracking a person, push them if they had no coords
        if (currentPerson && !hasCoords) {
            persons.push({ lineage: currentLineage, name: currentPerson });
        }

        // Start new person
        const match = trimmed.match(/name: "(.*?)"/);
        currentPerson = match ? match[1] : "Unknown";
        hasCoords = false;
    }

    // Detect Coords
    if (trimmed.includes('coords: [')) {
        hasCoords = true;
    }
});

// Check the last person
if (currentPerson && !hasCoords) {
    persons.push({ lineage: currentLineage, name: currentPerson });
}

// Group by lineage
const grouped = {};
persons.forEach(p => {
    if (!grouped[p.lineage]) grouped[p.lineage] = [];
    grouped[p.lineage].push(p.name);
});

console.log("--- MISSING COORDINATES REPORT ---");
Object.keys(grouped).forEach(lineage => {
    console.log(`\n[${lineage} Lineage]`);
    grouped[lineage].forEach(name => console.log(`- ${name}`));
});
