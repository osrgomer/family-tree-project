let godsTreeData = {};

fetch('gods_data.json')
    .then(response => response.json())
    .then(data => {
        godsTreeData = data;
        // Refresh if currently selected
        if (typeof switchTree === 'function') {
            const selector = document.getElementById('tree-selector');
            if (selector && selector.value === 'gods') {
                switchTree('gods');
            }
        }
    })
    .catch(err => console.error("Error loading Gods data:", err));
