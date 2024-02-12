console.log("index.js loaded");


document.getElementById("selectLanguage").value = localStorage.getItem("Language");
function selectLanguage() {
    localStorage.setItem('Language',document.getElementById('selectLanguage').value);
    console.log(localStorage.getItem('Language'))
}

toggleTeamInfo('presentation');
function toggleTeamInfo(id) {
    var presentationContainer = document.querySelector('.presentation-container');
    var equipeContainer = document.querySelector('.team-info-container');
    const tableauContainer = document.querySelector('.tableau-container');
    presentationContainer.innerHTML = '';
    equipeContainer.innerHTML = '';
    tableauContainer.innerHTML = '';
    if(id=== 'teamInfo'){
        const teamData = [
            {
                name: "Maxime Falkowski",
                roles: "Développeurs, Experts en cybersécurité",
                linkedin: "https://www.linkedin.com/feed/",
                github: "https://github.com/FLKprod",
                imageSrc: "Photos/_MG_9841.JPG"
            },
            {
                name: "Maxime Falkowski",
                roles: "Développeurs, Experts en cybersécurité",
                linkedin: "https://www.linkedin.com/feed/",
                github: "https://github.com/FLKprod",
                imageSrc: "Photos/_MG_9841.JPG"
            },
            {
                name: "Maxime Falkowski",
                roles: "Développeurs, Experts en cybersécurité",
                linkedin: "https://www.linkedin.com/feed/",
                github: "https://github.com/FLKprod",
                imageSrc: "Photos/_MG_9841.JPG"
            },
            // Ajoutez d'autres membres de l'équipe ici
        ];

        const teamContainer = equipeContainer;

        // Générer les divs d'information d'équipe
        teamData.forEach(member => {
            const teamInfoDiv = document.createElement("div");
            teamInfoDiv.classList.add("team-info");

            // Ajouter l'image
            const image = document.createElement("img");
            image.src = member.imageSrc;
            teamInfoDiv.appendChild(image);

            // Ajouter les paragraphes d'information
            const teamInfoDivtext = document.createElement("div");
            teamInfoDivtext.classList.add("team-info-text");
            const nameParagraph = document.createElement("p");
            nameParagraph.textContent = member.name;
            teamInfoDivtext.appendChild(nameParagraph);

            const rolesParagraph = document.createElement("p");
            rolesParagraph.textContent = member.roles;
            teamInfoDivtext.appendChild(rolesParagraph);

            teamInfoDiv.appendChild(teamInfoDivtext);
            // Ajouter les liens sociaux
            const linkedinLink = createSocialLink("https://www.linkedin.com/feed/", "fa-linkedin");
            const githubLink = createSocialLink("https://github.com/FLKprod", "fa-github");

            teamInfoDiv.appendChild(linkedinLink);
            teamInfoDiv.appendChild(githubLink);

            // Ajouter la div d'information d'équipe au conteneur
            teamContainer.appendChild(teamInfoDiv);

            // Ajouter une ligne de séparation
            const hr = document.createElement("hr");
            teamContainer.appendChild(hr);
            teamContainer.classList.add('fadeIn');
        });

        // Fonction pour créer un lien social avec une icône Font Awesome
        function createSocialLink(href, iconClass) {
            const link = document.createElement("a");
            link.href = href;
            link.target = "_blank";

            const icon = document.createElement("i");
            icon.classList.add("fa", iconClass);
            icon.style.fontSize = "2em";
            icon.style.color = "white";

            link.appendChild(icon);
            return link;
        }
    }
    else if(id=== 'presentation'){
        const teamContainer = presentationContainer;
        var h2Element = document.createElement('h2');
        h2Element.textContent = "CyberSafe : C'est quoi ?";

        // Création de l'élément p
        var pElement = document.createElement('p');
        pElement.textContent = "Avec la popularité croissante de l’Internet des Objets, les utilisateurs peuvent manquer de connaissances pour sécuriser correctement les objets connectés, le laissant et potentiellement le réseau auquel il est attaché vulnérable aux attaques. Le but de ce projet est d'explorer les vulnérabilités du système liées aux objets connectés et les implémentations conçues pour résister à ces vulnérabilités et/ou réduire le potentiel qu'un exploit résulte d'une telle vulnérabilité.  Un objet connecté peut être utilisé de plusieurs manières : (a) domotique, (b) un système indépendant conçu pour effectuer un nombre limité de tâches, ou (c) comme un appareil connecté à un réseau local typique fournissant des services réseau (c'est-à-dire DNS, serveur Web, serveur de messagerie, etc.).  Ainsi, CyberSafe est une plateforme web qui pourra se mettre à jour automatiquement pour informer les utilisateurs sur les vulnérabilités de sécurité des objets connectés.";

        // Création de l'élément h3
        var h3Element = document.createElement('h3');
        h3Element.textContent = "Nos Sources";

        // Création des éléments img
        var img1Element = document.createElement('img');
        img1Element.src = "cvelogo.png";

        var img2Element = document.createElement('img');
        img2Element.src = "cwelogo.png";

        var img3Element = document.createElement('img');
        img3Element.src = "nist-logo.png";

        // Ajout des éléments à la page
        teamContainer.appendChild(h2Element);
        teamContainer.appendChild(pElement);
        teamContainer.appendChild(h3Element);
        teamContainer.appendChild(img1Element);
        teamContainer.appendChild(img2Element);
        teamContainer.appendChild(img3Element);
    }
    else if(id === 'tableau'){
        var presentationContainer = document.querySelector('.presentation-container');
        var equipeContainer = document.querySelector('.team-info-container');
        presentationContainer.innerHTML = '';
        equipeContainer.innerHTML = '';
        const tableauContainer = document.querySelector('.tableau-container');
        const searchDiv = document.createElement('div');
        const keywordInput = document.createElement('input');
        keywordInput.type = 'text';
        keywordInput.id = 'keywordInput';
        keywordInput.placeholder = 'Search here';
        keywordInput.style.cssText = 'padding: 10px; border: 2px solid #ccc; border-radius: 5px; width: 300px;';
        const searchButton = document.createElement('button');
        searchButton.textContent = 'Search';
        searchButton.onclick = keywordSearch;
        searchDiv.appendChild(keywordInput);
        searchDiv.appendChild(searchButton);

        const label = document.createElement('label');
        label.htmlFor = 'sortDropdown';
        label.textContent = 'Chercher une source :';
        const sortDropdown = document.createElement('select');
        sortDropdown.id = 'sortDropdown';
        sortDropdown.onchange = sortTable;
        const chooseOption = document.createElement('option');
        chooseOption.value = 'choose';
        chooseOption.disabled = true;
        chooseOption.selected = true;
        chooseOption.textContent = 'Choisir';
        const allOption = document.createElement('option');
        allOption.value = 'all';
        allOption.textContent = 'All';
        const optgroup = document.createElement('optgroup');
        optgroup.id = 'listes';
        optgroup.value = 'src';
        optgroup.label = 'Source';
        sortDropdown.appendChild(chooseOption);
        sortDropdown.appendChild(allOption);
        sortDropdown.appendChild(optgroup);

        const tableContainer = document.createElement('div');
        tableContainer.className = 'tableContainer';
        const vulnerabilityTable = document.createElement('table');
        vulnerabilityTable.id = 'vulnerabilityTable';
        tableContainer.appendChild(vulnerabilityTable);

        const refreshButton = document.createElement('button');
        refreshButton.id = 'refreshButton';
        refreshButton.onclick = keywordSearch;
        refreshButton.textContent = 'Refresh 🔄';
        const backButton = document.createElement('button');
        backButton.onclick = function () {
            location.href = 'index.html';
        };
        backButton.textContent = 'Back';

        tableauContainer.appendChild(searchDiv);
        tableauContainer.appendChild(label);
        tableauContainer.appendChild(sortDropdown);
        tableauContainer.appendChild(tableContainer);
        tableauContainer.appendChild(refreshButton);
        tableauContainer.appendChild(backButton);
        // Ajouter un gestionnaire d'événements à la zone de texte
        var textarea = document.getElementById('keywordInput');
        textarea.addEventListener('keyup', handleEnterKey);
        keywordSearch();
        document.getElementById('refreshButton').addEventListener('click', function() {
            keywordSearch();
        });
    }
}

function handleEnterKey(event) {
    if (event.key === 'Enter') {
        keywordSearch()
    }
}