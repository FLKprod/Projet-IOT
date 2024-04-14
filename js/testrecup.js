console.log("testrecup.js loaded");

// Ajoutez cette fonction pour enregistrer les données dans un fichier JSON
function saveDataToJson(data) {
    // Convertissez les données en format JSON
    const jsonData = JSON.stringify(data);
    // Créez un nouveau blob avec les données JSON
    const blob = new Blob([jsonData], { type: 'application/json' });
    // Créez un objet URL pour le blob
    const url = URL.createObjectURL(blob);

    // Créez un lien pour télécharger le fichier JSON
    const a = document.createElement('a');
    a.href = url;
    a.download = 'data.json';
    // Simulez un clic sur le lien pour déclencher le téléchargement du fichier JSON
    a.click();

    // Libérez les ressources en révoquant l'URL de l'objet blob
    URL.revokeObjectURL(url);
}

function keywordSearch() {
    var keywordInput = document.getElementById('keywordInput')
    var keywordSearch = keywordInput.value
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

    fetch(`https://services.nvd.nist.gov/rest/json/cves/2.0?keywordSearch=${keywordSearch}&pubStartDate=${pubStartDate}&pubEndDate=${pubEndDate}`) 
        .then(response => response.json())
        .then(data => {
            console.log("Réponse de l'API", data.vulnerabilities);
            // Appelez la fonction pour enregistrer les données dans un fichier JSON
            saveDataToJson(data.vulnerabilities);
        })  
        .catch(error => console.error('Erreur de chargement des données JSON:', error));  
}

// Ne lancez pas keywordSearch() ici, car cela l'exécuterait immédiatement dès le chargement du script
