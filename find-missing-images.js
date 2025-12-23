// Script to find family members without image URLs
const fs = require('fs');

// Read the script.js file
const scriptContent = fs.readFileSync('script.js', 'utf8');

// Extract familyData object (simplified parsing)
const familyDataMatch = scriptContent.match(/const familyData = ({[\s\S]*?});/);
if (!familyDataMatch) {
    console.log('Could not find familyData object');
    process.exit(1);
}

// Evaluate the familyData object
const familyDataStr = familyDataMatch[1];
const familyData = eval('(' + familyDataStr + ')');

const missingImages = [];

function scanForMissingImages(member, path = '') {
    const currentPath = path ? `${path} > ${member.name}` : member.name;
    
    // Check main member
    if (!member.image || member.image === '') {
        missingImages.push({
            name: member.name,
            role: member.role || 'Unknown',
            path: currentPath
        });
    }
    
    // Check partner
    if (member.partner) {
        if (!member.partner.image || member.partner.image === '') {
            missingImages.push({
                name: member.partner.name,
                role: member.partner.role || 'Partner',
                path: `${currentPath} > ${member.partner.name}`
            });
        }
    }
    
    // Check second partner
    if (member.secondPartner) {
        if (!member.secondPartner.image || member.secondPartner.image === '') {
            missingImages.push({
                name: member.secondPartner.name,
                role: member.secondPartner.role || 'Second Partner',
                path: `${currentPath} > ${member.secondPartner.name}`
            });
        }
    }
    
    // Recursively check children
    if (member.children && member.children.length > 0) {
        member.children.forEach(child => {
            scanForMissingImages(child, currentPath);
        });
    }
}

// Scan the entire family tree
if (familyData.children) {
    familyData.children.forEach(lineage => {
        scanForMissingImages(lineage);
    });
}

// Output results
console.log(`\n=== FAMILY MEMBERS WITHOUT IMAGE URLS ===`);
console.log(`Total missing: ${missingImages.length}\n`);

missingImages.forEach((member, index) => {
    console.log(`${index + 1}. ${member.name}`);
    console.log(`   Role: ${member.role}`);
    console.log(`   Path: ${member.path}`);
    console.log('');
});

// Group by generation
const byGeneration = {};
missingImages.forEach(member => {
    const genMatch = member.role.match(/G(-?\d+):/);
    const gen = genMatch ? genMatch[1] : 'Unknown';
    if (!byGeneration[gen]) byGeneration[gen] = [];
    byGeneration[gen].push(member.name);
});

console.log('\n=== BY GENERATION ===');
Object.keys(byGeneration).sort().forEach(gen => {
    console.log(`Generation ${gen}: ${byGeneration[gen].length} members`);
    byGeneration[gen].forEach(name => console.log(`  - ${name}`));
    console.log('');
});