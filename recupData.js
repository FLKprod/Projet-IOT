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
                data.forEach((rowData,rowIndex) => {
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
                sortTable();
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


function sortTable() {
    var table = document.getElementById('vulnerabilityTable');
    var sortDropdown = document.getElementById('sortDropdown');
    var sortOrder = sortDropdown.value;

    if (sortOrder === 'choose') {
        return;
    }

    var rows = Array.from(table.rows).slice(1); // Exclure la première ligne (en-têtes)

    if (sortOrder === 'alphabetic' || sortOrder === 'reverseAlphabetic') {
        rows.sort(function (rowA, rowB) {
            var cellA = rowA.cells[0].innerText.trim().toUpperCase();
            var cellB = rowB.cells[0].innerText.trim().toUpperCase();

            // Trier par nom d'objet IoT
            if (cellA < cellB) {
                return -1;
            } else if (cellA > cellB) {
                return 1;
            }
            return 0;
        });

        if (sortDropdown.dataset.prevSortOrder === 'alphabetic') {
            // Inverser l'ordre si sélection alphabétique à nouveau
            rows.reverse();
            sortDropdown.dataset.prevSortOrder = 'reverseAlphabetic';
        } else {
            sortDropdown.dataset.prevSortOrder = 'alphabetic';
        }
    }

    if (sortOrder === 'asc' || sortOrder === 'desc') {
        rows.sort(function(rowA, rowB) {
            var cellA = rowA.cells[rowA.cells.length - 1].innerText; // Dernière cellule de chaque ligne
            var cellB = rowB.cells[rowB.cells.length - 1].innerText;

            // Trier par niveau de difficulté
            var comparison = compareDifficulty(cellA, cellB);

            // Inverser l'ordre si décroissant
            return sortOrder === 'asc' ? comparison : -comparison;
        });
    }
    // Remplacer les lignes dans le tableau trié
    rows.forEach(function(row, index) {
        table.appendChild(row);
    });
}

function compareDifficulty(diffA, diffB) {
    // Fonction pour comparer les niveaux de difficulté (personnalisez selon vos besoins)
    var levels = ['faible', 'moyen', 'élevé'];

    var indexA = levels.indexOf(diffA.toLowerCase());
    var indexB = levels.indexOf(diffB.toLowerCase());

    if (indexA === -1 || indexB === -1) {
        // Gestion des erreurs si le niveau de difficulté n'est pas reconnu
        console.error('Niveau de difficulté non reconnu:', diffA, diffB);
        return 0;
    }

    return indexA - indexB;
}
