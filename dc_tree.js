let dcTreeData = {};

fetch('dc_data.json')
    .then(response => response.json())
    .then(data => {
        dcTreeData = data;
        // Refresh if currently selected
        if (typeof switchTree === 'function') {
            const selector = document.getElementById('tree-selector');
            if (selector && selector.value === 'dc') {
                switchTree('dc');
            }
        }
    })
    .catch(err => console.error("Error loading DC data:", err));
