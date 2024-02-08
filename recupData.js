console.log("script.js loaded");

loadTableData();

document.addEventListener("DOMContentLoaded", function() {
    

    document.getElementById('refreshButton').addEventListener('click', function() {
        loadTableData();
    });
});

Datas = []
function loadTableData() {
    var table = document.getElementById('vulnerabilityTable');
    const keywordSearch = "Microsoft";
    const pubStartDate = "2021-08-04T00:00:00.000";
    const pubEndDate = "2021-08-22T00:00:00.000";

    fetch(`https://services.nvd.nist.gov/rest/json/cves/2.0?keywordSearch=${keywordSearch}&pubStartDate=${pubStartDate}&pubEndDate=${pubEndDate}`) 
        .then(response => response.json())
        .then(data => {
            console.log("Réponse de l'API", data.vulnerabilities);
            // Utilisez "data" comme nécessaire
            data = data.vulnerabilities;
            // Clear existing table
            while (table.firstChild) {
                table.removeChild(table.firstChild);
            }
            // Vérifier si data est un tableau et s'il contient au moins une ligne
            if (Array.isArray(data) && data.length > 0) {
                // 1ere ligne = en-têtes
                var headerRow = table.createTHead().insertRow(0);
                Object.keys(data[0].cve).forEach(header => {
                    var cell = headerRow.insertCell();
                    cell.appendChild(document.createTextNode(header));
                });
                headerRow.classList.add('header-row');

                // Ajouter des lignes de data.json (à partir de la deuxième ligne)
                data.forEach((rowData,rowIndex) => {
                    var row = table.insertRow();
                    Object.entries(rowData.cve).forEach(([key, value]) => {
                        var cell = row.insertCell();
                        // Si la valeur n'est pas un tableau, ajoutez-la normalement
                        
                        if (key == "descriptions"){
                            cell.appendChild(document.createTextNode(value[0].value));
                        }
                        else if (key == "metrics"){
                            cell.appendChild(document.createTextNode(value.cvssMetricV2[0].source));
                        }
                        else if (key == "configurations"){
                            cell.appendChild(document.createTextNode(value[0].nodes[0].cpeMatch[0].versionEndExcluding));
                        }
                        else if (key == "references"){
                            textcase="";
                            for (let i = 0; i < value.length; i++) {
                                textcase += value[i].url;
                                textcase += "\n"
                            }
                            cell.appendChild(document.createTextNode(textcase));
                        }
                        else{
                            cell.appendChild(document.createTextNode(value));
                        }
                        // Ajouter une classe en fonction de la dernière colonne
                        if (key == "vulnStatus") {
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
    if (value === 'Analyzed') {
        return 'low-risk';
    } else if (value === 'Modified') {
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