import React, { useState } from 'react';

const GedcomMerger = () => {
  const [mergedContent, setMergedContent] = useState('');
  const [status, setStatus] = useState('Waiting for files...');

  // This function fixes the "Invalid Entity" error you saw in the screenshot
  const fixGedcomFormatting = (text) => {
    return text
      // 1. Fixes "0 I1 INDI" -> "0 @I1@ INDI"
      .replace(/^0\s+(I\d+|X\d+)\s+INDI/gm, '0 @$1@ INDI')
      // 2. Fixes family pointers "1 FAMS F1" -> "1 FAMS @F1@"
      .replace(/^1\s+(FAMS|FAMC|CHIL|HUSB|WIFE)\s+(I\d+|F\d+|X\d+)/gm, '1 $1 @$2@')
      // 3. Fixes family definitions "0 F1 FAM" -> "0 @F1@ FAM"
      .replace(/^0\s+(F\d+)\s+FAM/gm, '0 @$1@ FAM')
      // 4. Fixes double @@ symbols sometimes caused by bad exports
      .replace(/@@/g, '@');
  };

  const handleMerge = async (event) => {
    const files = Array.from(event.target.files);
    if (files.length < 2) {
      setStatus('Please select at least two files.');
      return;
    }

    setStatus('Processing...');
    let allRecords = [];
    let header = "0 HEAD\n1 GEDC\n2 VERS 5.5.1\n2 FORM LINEAGE-LINKED\n1 CHAR UTF-8\n1 SOUR MERGED_APP\n";

    for (const file of files) {
      const text = await file.text();
      const fixedText = fixGedcomFormatting(text);
      
      // Extract everything between HEAD and TRLR
      const recordsOnly = fixedText
        .replace(/0 HEAD[\s\S]*?(?=0 @)/g, '') 
        .replace(/0 TRLR/g, '');
      
      allRecords.push(recordsOnly.trim());
    }

    const finalFile = `${header}\n${allRecords.join('\n')}\n0 TRLR`;
    setMergedContent(finalFile);
    setStatus('Merge Complete! Ready to download.');
  };

  const downloadFile = () => {
    const blob = new Blob([mergedContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = "master_family_tree.ged";
    link.click();
  };

  return (
    <div style={{ padding: '40px', maxWidth: '600px', margin: 'auto', textAlign: 'center', border: '1px solid #ddd', borderRadius: '10px' }}>
      <h2>GEDCOM Master Merger</h2>
      <p>{status}</p>
      
      <input 
        type="file" 
        multiple 
        accept=".ged" 
        onChange={handleMerge} 
        style={{ margin: '20px 0', padding: '10px' }}
      />

      {mergedContent && (
        <div>
          <button 
            onClick={downloadFile} 
            style={{ backgroundColor: '#28a745', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
          >
            Download Master File (.ged)
          </button>
        </div>
      )}
    </div>
  );
};

export default GedcomMerger;