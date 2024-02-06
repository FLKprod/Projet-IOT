console.log("script.js loaded");
loadTableData();

document.addEventListener("DOMContentLoaded", function() {
    

    document.getElementById('refreshButton').addEventListener('click', function() {
        loadTableData();
    });
});

function loadTableData() {
    var table = document.getElementById('vulnerabilityTable');

    

    // Ajouter un timestamp pour forcer le rafraîchissement du fichier JSON
    var timestamp = new Date().getTime();
    var url = 'data.json?timestamp=' + timestamp;

    fetch(url)
        .then(response => response.json())
        .then(data => {

            // Clear existing table
            while (table.firstChild) {
                table.removeChild(table.firstChild);
            }
            // Vérifier si data est un tableau et s'il contient au moins une ligne
            if (Array.isArray(data) && data.length > 0) {
                // 1ere ligne = en-têtes
                var headerRow = table.createTHead().insertRow(0);
                Object.keys(data[0]).forEach(header => {
                    var cell = headerRow.insertCell();
                    cell.appendChild(document.createTextNode(header));
                });
                headerRow.classList.add('header-row');

                // Ajouter des lignes de data.json (à partir de la deuxième ligne)
                data.forEach(rowData => {
                    var row = table.insertRow();
                    Object.entries(rowData).forEach(([key, value]) => {
                        var cell = row.insertCell();
                        cell.appendChild(document.createTextNode(value));

                        // Ajouter une classe en fonction de la dernière colonne
                        if (key === Object.keys(rowData).pop()) {
                            cell.className = evaluateRisk(value);
                        }
                    });
                });
            } else {
                console.error('Le fichier JSON est vide ou mal formaté.');
            }
        })
        .catch(error => console.error('Erreur de chargement des données JSON:', error));
}

function evaluateRisk(value) {
    // Ajouter des conditions pour déterminer la classe en fonction de la valeur
    if (value === 'Faible') {
        return 'low-risk';
    } else if (value === 'Moyen') {
        return 'medium-risk';
    } else if (value === 'Élevé') {
        return 'high-risk';
    } else {
        return ''; // Classe par défaut si la valeur n'est pas reconnue
    }
}


