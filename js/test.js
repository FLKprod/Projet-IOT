// Charger le fichier JSON contenant les données IoT
fetch('query.json')
  .then(response => response.json())
  .then(iotData => {
    // Charger le fichier JSON contenant les mots-clés des marques
    fetch('keywords.json')
      .then(response => response.json())
      .then(keywordsData => {
        // Fonction pour récupérer le mot-clé d'une marque à partir des mots-clés JSON
        function getKeywordForBrand(brand) {
          return keywordsData.brands[brand];
        }

        // Fonction pour effectuer une requête API et récupérer les données
        function fetchDataForBrand(brand) {
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
          const keyword = getKeywordForBrand(brand);
          const apiUrl = `https://services.nvd.nist.gov/rest/json/cves/2.0?keywordSearch=${keyword}&pubStartDate=${pubStartDate}&pubEndDate=${pubEndDate}`;
          // Effectuer la requête API et retourner les données
          // Utilisez une bibliothèque comme Axios ou fetch
          return fetch(apiUrl)
            .then(response => response.json())
            .catch(error => {
              console.error('Erreur de requête API : ', error);
              throw error;
            });
        }

        // Fonction pour mettre à jour les données de la marque dans iotData
        function updateBrandData(brand, newData) {
          const brandIndex = iotData.findIndex(item => item.brand === brand);
          if (brandIndex !== -1) {
            iotData[brandIndex] = { ...iotData[brandIndex], ...newData };
            console.log('Données mises à jour pour la marque : ', brand);
          } else {
            console.error('Marque non trouvée : ', brand);
          }
        }

        // Boucle à travers les marques dans iotData
        iotData.forEach(brandItem => {
          const brand = brandItem.brand;
          const keyword = getKeywordForBrand(brand);
          console.log("brand : ",brand, " / keyword : ",keyword)
          if (keyword) {
            // Effectuer une requête API pour chaque marque
            fetchDataForBrand(brand)
              .then(data => {
                // Mettre à jour les données de la marque avec les nouvelles données
                updateBrandData(brand, { newData: data });
              })
              .catch(error => {
                console.error(`Erreur lors de la récupération des données pour la marque ${brand} : `, error);
              });
          } else {
            console.error(`Mot-clé non trouvé pour la marque : ${brand}`);
          }
        });
      })
      .catch(error => {
        console.error('Erreur de chargement du fichier keywords.json : ', error);
      });
  })
  .catch(error => {
    console.error('Erreur de chargement du fichier query.json : ', error);
  });
