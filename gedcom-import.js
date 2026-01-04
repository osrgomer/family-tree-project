/**
 * GEDCOM Parser for Import
 */
function parseGedcom(content) {
    const lines = content.split(/\r?\n/);
    const individuals = {};
    const families = {};
    let currentId = null;
    let currentType = null;

    // Pass 1: Parse Records
    lines.forEach(line => {
        const parts = line.trim().match(/^(\d+)\s+(@\w+@)?\s*(\w+)(?:\s+(.*))?/);
        if (!parts) return;
        const level = parseInt(parts[1]);
        const id = parts[2];
        const tag = parts[3];
        const value = parts[4] || "";

        if (level === 0) {
            if (id && tag === 'INDI') {
                currentId = id;
                currentType = 'INDI';
                individuals[id] = { id, name: "Unknown", gender: "", notes: [], famc: [], fams: [] };
            } else if (id && tag === 'FAM') {
                currentId = id;
                currentType = 'FAM';
                families[id] = { id, husb: null, wife: null, children: [] };
            } else {
                currentId = null;
            }
        } else if (currentId) {
            if (currentType === 'INDI') {
                const indi = individuals[currentId];
                if (tag === 'NAME') indi.name = value.replace(/\//g, '');
                if (tag === 'SEX') indi.gender = value;
                if (tag === 'NOTE') indi.notes.push(value);
                if (tag === 'OCCU' || tag === 'TITL') indi.role = value;
                if (tag === 'FAMC') indi.famc.push(value);
                if (tag === 'FAMS') indi.fams.push(value);
            } else if (currentType === 'FAM') {
                const fam = families[currentId];
                if (tag === 'HUSB') fam.husb = value;
                if (tag === 'WIFE') fam.wife = value;
                if (tag === 'CHIL') fam.children.push(value);
            }
        }
    });

    // Pass 2: Build Tree
    const processed = new Set();

    function buildNode(indiId) {
        if (!indiId || processed.has(indiId)) return null;
        processed.add(indiId);

        const indi = individuals[indiId];
        if (!indi) return null;

        const node = {
            name: indi.name,
            role: indi.role || (indi.gender === 'F' ? "Matriarch" : "Patriarch"),
            description: indi.notes.join(' '),
            image: "",
            children: []
        };

        if (indi.fams.length > 0) {
            indi.fams.forEach(famId => {
                const fam = families[famId];
                if (fam) {
                    const partnerId = (fam.husb === indiId) ? fam.wife : fam.husb;
                    if (partnerId && individuals[partnerId]) {
                        const partner = individuals[partnerId];
                        node.partner = {
                            name: partner.name,
                            role: partner.role || "Partner",
                            image: ""
                        };
                        processed.add(partnerId);
                    }
                    if (fam.children) {
                        fam.children.forEach(childId => {
                            const childNode = buildNode(childId);
                            if (childNode) node.children.push(childNode);
                        });
                    }
                }
            });
        }
        return node;
    }

    const rootNodes = [];
    Object.keys(individuals).forEach(id => {
        const indi = individuals[id];
        if (!indi.famc || indi.famc.length === 0) {
            const root = buildNode(id);
            if (root) rootNodes.push(root);
        }
    });

    return {
        name: "Imported Family Tree",
        role: "GEDCOM Import",
        children: rootNodes
    };
}
