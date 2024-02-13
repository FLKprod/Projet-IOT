console.log("recupData.js loaded");

Datas = []

function keywordSearch() {
    var table = document.getElementById('vulnerabilityTable');
    var keywordInput = document.getElementById('keywordInput')
    var keywordSearch = keywordInput.value
    const pubStartDate = "2021-08-04T19:15:08.000";
    const pubEndDate = "2021-08-05T00:00:00.000";

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
                data.forEach((rowData) => {
                    var row = table.insertRow();
                    Object.entries(rowData.cve).forEach(([key, value]) => {
                        var cell = row.insertCell();
                        if (key == "sourceIdentifier"){
                            var statusGroup = document.getElementById("listes");
                            addOptionsToGroup(value, statusGroup);
                        }
                        // Si la valeur n'est pas un tableau, ajoutez-la normalement
                        if (key == "descriptions"){
                            if (localStorage.getItem('Language') == "English"){
                                cell.appendChild(document.createTextNode(value[0].value));
                            }
                            else if (localStorage.getItem('Language') == "French") {
                            // Appeler la fonction de l'API DeepL sur value[0].value
                                CallAPITranslate("FR", value[0].value)
                                  .then(response => {
                                    console.log(response);
                                    cell.appendChild(document.createTextNode(response));
                                    })
                                  .catch(error => {
                                    console.error('Erreur lors de la traduction:', error);
                                    });
                            }
                            else{
                                cell.appendChild(document.createTextNode(value[1].value));
                            }
                            
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


function CallAPITranslate(langage, textInput) {
    const AIP_KYE = "4f6307f0-3624-6a55-2328-b7ad5b02ff94:fx";
    const targetLanguage = langage.toString();
    const textToTranslate = textInput.toString();
    const apiUrl = `https://api-free.deepl.com/v2/translate?auth_key=${AIP_KYE}&text=${encodeURIComponent(textToTranslate)}&target_lang=${targetLanguage}`;

    return new Promise((resolve, reject) => {
        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                console.log("Réponse de l'API DEEPL", data.translations[0].text);
                const translation = data.translations[0].text;
                resolve(translation);
            })
            .catch(error => {
                console.error('Erreur lors de la requête :', error);
                reject(error);
            });
    });
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

function addOptionsToGroup(optionText, group) {
    if (!group.querySelector('option[value="' + optionText + '"]')) {
        var option = document.createElement("option");
        option.value = optionText;
        option.text = optionText;
        option.id = optionText.toLowerCase();
        group.appendChild(option);
    }
}

function sortTable() {
    var sortOrderDropdown = document.getElementById('sortDropdown');
    var sortOrder = sortOrderDropdown.value;

    if (sortOrder === 'choose') {
        return;
    }

    var table = document.getElementById('vulnerabilityTable');
    var rows = Array.from(table.rows).slice(1); // Exclure la 1ere ligne

    var sourceDropdown = document.getElementById('sortDropdown');
    var selectedSource = sourceDropdown.value.toLowerCase().trim();

    for (var i = 0; i < rows.length; i++) {
        var cell = rows[i].getElementsByTagName("td")[1]; // Deuxième cellule pour la source
        if (selectedSource === "all" || cell.textContent.toLowerCase().trim() == selectedSource) {
            console.log("identic")
            rows[i].style.display = ""; // Affiche la ligne
        } else {
            rows[i].style.display = "none"; // Masque la ligne
        }
    }
}

function selectLanguage() {
    localStorage.setItem('Language',document.getElementById('selectLanguage').value);
    console.log(localStorage.getItem('Language'));
    keywordSearch();
}