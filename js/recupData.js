
console.log("recupData.js loaded");

Datas = []

    function keywordSearch() {

        var keywordInput = document.getElementById('keywordInput');
        console.log('keywordInput : ',keywordInput);
        if(keywordInput===null){
            var keywordSearch = '';
        }
        else{
            var keywordSearch = keywordInput.value;
        }
        console.log('keywordSearch : ',keywordSearch);

        // Obtenez la date d'aujourd'hui
        const today = new Date();

        // Soustrayez 100 jours de la date d'aujourd'hui
        const startDate = new Date(today);
        startDate.setDate(today.getDate() - 100);

        // Formatez les dates au format ISO 8601 requis ("YYYY-MM-DDTHH:MM:SS.000")
        const pubStartDate = startDate.toISOString();
        const pubEndDate = today.toISOString();

        console.log("Date de début :", pubStartDate);
        console.log("Date de fin :", pubEndDate);

        //const proxyUrl = '';
        
        console.log(keywordSearch);
        fetch(`https://services.nvd.nist.gov/rest/json/cves/2.0?keywordSearch=${keywordSearch}&pubStartDate=${pubStartDate}&pubEndDate=${pubEndDate}`) 
            .then(response => response.json())
            .then(data => {
                console.log("Réponse de l'API", data.vulnerabilities);
                var table = document.getElementById('vulnerabilityTable');
                
                data = data.vulnerabilities;
                while (table.firstChild) {
                    table.removeChild(table.firstChild);
                }
                
                table.classList.remove('fade-in');
                if (Array.isArray(data) && data.length > 0) {
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
                            if (key =="id"){
                                console.log(value);
                                if (value.length > 20){}
                            }
                            if (key == "sourceIdentifier"){
                                //var statusGroup = document.getElementById("vulnerabilityTable");
                                var textNode = document.createTextNode(value);
                                //statusGroup.appendChild(textNode);
                            }
                            // Si la valeur n'est pas un tableau, ajoutez-la normalement
                            if (key == "descriptions"){
                                if (localStorage.getItem('Language') == "EN"){
                                    cell.appendChild(document.createTextNode(value[0].value));
                                }
                                else if (localStorage.getItem('Language') == "Spanish"){
                                    cell.appendChild(document.createTextNode(value[1].value));
                                }
                                else {
                                    langue = localStorage.getItem('Language');
                                    console.log(langue);
                                    CallAPITranslate(langue, value[0].value)
                                    .then(response => {
                                        cell.appendChild(document.createTextNode(response));
                                        })
                                    .catch(error => {
                                        console.error('Erreur lors de la traduction:', error);
                                        });
                                }                           
                            }
                            //else if (key == "metrics"){
                            //    cell.appendChild(document.createTextNode(value.cvssMetricV31[0].impactScore));
                            //}
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
                                cell.className = value;
                            }
                        });
                    });
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
                    //console.log("Réponse de l'API DEEPL", data.translations[0].text);
                    const translation = data.translations[0].text;
                    resolve(translation);
                })
                .catch(error => {
                    console.error('Erreur lors de la requête :', error);
                    reject(error);
                });
        });
    }

/*document.addEventListener('DOMContentLoaded', function () {
    // Attacher la fonction keywordSearch à un événement, comme le clic d'un bouton
    var searchButton = document.getElementById("searchButton");
    searchButton.addEventListener('click', keywordSearch);
});*/