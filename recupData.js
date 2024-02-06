console.log("script.js loaded");

document.addEventListener("DOMContentLoaded", function() {
    loadTableData();

    document.getElementById('refreshButton').addEventListener('click', function() {
        loadTableData();
    });
});

function loadTableData() {
    var table = document.getElementById('vulnerabilityTable');

    // Clear existing table
    while (table.firstChild) {
        table.removeChild(table.firstChild);
    }

    // Ajouter un timestamp pour forcer le rafraîchissement du fichier JSON
    var timestamp = new Date().getTime();
    var url = 'data.json?timestamp=' + timestamp;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            // Vérifier si data est un tableau et s'il contient au moins une ligne
            if (Array.isArray(data) && data.length > 0) {
                // 1ere ligne = en-têtes
                var headerRow = table.createTHead().insertRow(0);
                Object.keys(data[0]).forEach(header => {
                    var cell = headerRow.insertCell();
                    cell.appendChild(document.createTextNode(header));
                });

                // Ajouter des lignes de data.json (à partir de la deuxième ligne)
                data.forEach(rowData => {
                    var row = table.insertRow();
                    Object.values(rowData).forEach(cellData => {
                        var cell = row.insertCell();
                        cell.appendChild(document.createTextNode(cellData));
                    });
                });
            } else {
                console.error('Le fichier JSON est vide ou mal formaté.');
            }
        })
        .catch(error => console.error('Erreur de chargement des données JSON:', error));
}
