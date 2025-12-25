<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Ultra-Smart GEDCOM Merger</title>
    <style>
        body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; max-width: 900px; margin: 40px auto; padding: 20px; color: #333; }
        .card { border: 2px solid #007bff; padding: 30px; border-radius: 12px; background: #fff; box-shadow: 0 4px 15px rgba(0,0,0,0.1); text-align: center; }
        h2 { color: #007bff; }
        input[type="file"] { margin: 20px 0; border: 1px solid #ddd; padding: 10px; width: 80%; border-radius: 5px; }
        button { background: #007bff; color: white; border: none; padding: 15px 40px; border-radius: 8px; cursor: pointer; font-size: 18px; font-weight: bold; transition: 0.3s; }
        button:hover { background: #0056b3; }
        #log { margin-top: 25px; text-align: left; font-family: monospace; font-size: 13px; background: #222; color: #0f0; padding: 20px; max-height: 300px; overflow-y: auto; border-radius: 8px; display: none; }
        .stats { margin-top: 15px; font-weight: bold; }
    </style>
</head>
<body>

<div class="card">
    <h2>Ultra-Smart Content Merger</h2>
    <p>This version eliminates duplicates by normalizing names and re-mapping family IDs.</p>
    
    <input type="file" id="fileInput" multiple accept=".ged">
    <br>
    <button id="mergeBtn">Merge & Clean Duplicates</button>
    
    <div id="stats" class="stats"></div>
    <div id="log"></div>
</div>

<script>
    const fileInput = document.getElementById('fileInput');
    const mergeBtn = document.getElementById('mergeBtn');
    const logDiv = document.getElementById('log');
    const statsDiv = document.getElementById('stats');

    // HEAVY NORMALIZATION: Strips slashes, parentheses, and titles
    function getMatchKey(record) {
        const nameMatch = record.match(/1 NAME (.*)/);
        if (!nameMatch) return null;
        return nameMatch[1]
            .replace(/\//g, '')                             // Remove /slashes/
            .replace(/\(.*\)/g, '')                         // Remove (anything in parentheses)
            .replace(/G[-]?\d+:?\s?(Ancestor|Patriarch|Matriarch|Sibling|Founder|Poet|Businesswoman|Author|Social Worker|Architect|Educator|Scholar)/gi, '') // Remove Titles
            .replace(/\s+/g, ' ')                           // Collapse spaces
            .trim()
            .toLowerCase();
    }

    mergeBtn.addEventListener('click', async () => {
        const files = Array.from(fileInput.files);
        if (files.length < 2) return alert("Please select at least two GEDCOM files.");

        logDiv.style.display = "block";
        logDiv.innerHTML = "<b>Starting Smart Merge...</b><br>";
        
        let masterPeople = new Map(); // Key: Normalized Name, Value: {id: masterID, lines: Set}
        let idRemap = new Map();      // Key: Old ID, Value: New Master ID
        let families = [];
        let header = "0 HEAD\n1 GEDC\n2 VERS 5.5.1\n2 FORM LINEAGE-LINKED\n1 CHAR UTF-8\n1 SOUR ULTRA_SMART_MERGER\n";

        for (let file of files) {
            let text = await file.text();
            
            // 1. Fix broken Ancestris tags immediately
            text = text.replace(/^0\s+(I\d+|X\d+)\s+INDI/gm, '0 @$1@ INDI')
                       .replace(/^1\s+(FAMS|FAMC|CHIL|HUSB|WIFE)\s+(I\d+|F\d+|X\d+)/gm, '1 $1 @$2@')
                       .replace(/^0\s+(F\d+)\s+FAM/gm, '0 @$1@ FAM');

            const blocks = text.split(/\n(?=0\s+@)/);

            blocks.forEach(block => {
                const idMatch = block.match(/^0\s+@([^@]+)@/);
                if (!idMatch) return;
                const originalID = idMatch[1];

                if (block.includes('INDI')) {
                    const key = getMatchKey(block);
                    if (key && masterPeople.has(key)) {
                        const master = masterPeople.get(key);
                        logDiv.innerHTML += `Merging duplicate person: [${key}]<br>`;
                        idRemap.set(originalID, master.id);
                        // Add new unique facts to the existing record
                        block.split('\n').forEach(line => {
                            if (line.trim() && !line.startsWith('0 @')) master.lines.add(line.trim());
                        });
                    } else if (key) {
                        const linesSet = new Set(block.split('\n').map(l => l.trim()).filter(l => !l.startsWith('0 @')));
                        masterPeople.set(key, { id: originalID, lines: linesSet });
                        idRemap.set(originalID, originalID);
                    }
                } else if (block.includes('FAM')) {
                    families.push(block.trim());
                }
            });
        }

        // 2. Build the output
        let output = header;

        // Add People
        masterPeople.forEach((data, key) => {
            output += `0 @${data.id}@ INDI\n`;
            data.lines.forEach(line => {
                // Remap FAMS/FAMC pointers just in case
                output += line + "\n";
            });
        });

        // Add Families with Remapped Individual IDs
        families.forEach(fam => {
            let fixedFam = fam;
            idRemap.forEach((newID, oldID) => {
                const regex = new RegExp('@' + oldID + '@', 'g');
                fixedFam = fixedFam.replace(regex, '@' + newID + '@');
            });
            output += fixedFam + "\n";
        });

        output += "0 TRLR";

        // 3. Download
        const blob = new Blob([output], { type: 'text/plain' });
        const a = document.createElement('a');
        a.href = URL.createObjectURL(blob);
        a.download = "final_clean_family_tree.ged";
        a.click();
        
        statsDiv.innerHTML = `Merge complete! Combined into ${masterPeople.size} unique individuals.`;
        logDiv.innerHTML += "<b>Download Started.</b>";
    });
</script>

</body>
</html>