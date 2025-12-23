import React, { useState } from 'react';

const GedcomMerger = () => {
  const [mergedContent, setMergedContent] = useState('');

  const fixGedcomIds = (text) => {
    // This fixes the "0 I1 INDI" error by adding the missing @ symbols
    return text.replace(/^0\s+(I\d+)\s+INDI/gm, '0 @$1@ INDI')
               .replace(/^1\s+(FAMS|FAMC|CHIL|HUSB|WIFE)\s+(I\d+|F\d+)/gm, '1 $1 @$2@')
               .replace(/^0\s+(F\d+)\s+FAM/gm, '0 @$1@ FAM');
  };

  const handleMerge = async (event) => {
    const files = Array.from(event.target.files);
    let allRecords = [];
    
    // We'll keep the header from the first file
    let header = "0 HEAD\n1 GEDC\n2 VERS 5.5.1\n2 FORM LINEAGE-LINKED\n1 CHAR UTF-8\n";

    for (const file of files) {
      const text = await file.text();
      const fixedText = fixGedcomIds(text);
      
      // Remove the original Header and Trailer so we can stack the records
      const recordsOnly = fixedText
        .replace(/0 HEAD[\s\S]*?(?=0 @)/g, '') 
        .replace(/0 TRLR/g, '');
      
      allRecords.push(recordsOnly.trim());
    }

    const finalFile = `${header}\n${allRecords.join('\n')}\n0 TRLR`;
    setMergedContent(finalFile);
  };

  const downloadFile = () => {
    const element = document.createElement("a");
    const file = new Blob([mergedContent], {type: 'text/plain'});
    element.href = URL.createObjectURL(file);
    element.download = "merged_family_tree.ged";
    document.body.appendChild(element);
    element.click();
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h1>GEDCOM Format Merger</h1>
      <p>Upload your .ged files to fix IDs and merge them into one standard 5.5.1 file.</p>
      
      <input type="file" multiple accept=".ged" onChange={handleMerge} />
      
      {mergedContent && (
        <div style={{ marginTop: '20px' }}>
          <button onClick={downloadFile} style={{ padding: '10px 20px', cursor: 'pointer' }}>
            Download Merged File
          </button>
          <pre style={{ background: '#f4f4f4', padding: '10px', marginTop: '10px', maxHeight: '300px', overflow: 'auto' }}>
            {mergedContent.substring(0, 500)}...
          </pre>
        </div>
      )}
    </div>
  );
};

export default GedcomMerger;