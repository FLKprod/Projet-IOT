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
    var tableauContainer = document.querySelector('.tableau-container');
    var contactContainer = document.querySelector('.contact-container');
    presentationContainer.innerHTML = '';
    equipeContainer.innerHTML = '';
    tableauContainer.innerHTML = '';
    contactContainer.innerHTML = '';
    var myDiv = document.querySelector('.center');
    
    if(id=== 'teamInfo'){
        myDiv.classList.add('fade-out');
        // Tableau des membres de l'equipe avec leurs informations
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
        ];

        // Ajout d'un participant dans l'equipe et de toutes ses informations
        teamData.forEach(member => {
            const teamInfoDiv = document.createElement("div");
            teamInfoDiv.classList.add("team-info");
        
            teamInfoDiv.appendChild(createImage(member.imageSrc));
        
            const teamInfoDivtext = document.createElement("div");
            teamInfoDivtext.classList.add("team-info-text");
            teamInfoDivtext.appendChild(createText('p',member.name));
            teamInfoDivtext.appendChild(createText('p',member.roles));
            teamInfoDiv.appendChild(teamInfoDivtext);
        

            teamInfoDiv.appendChild(createSocialLink(member.linkedin, "fa-linkedin"));
            teamInfoDiv.appendChild(createSocialLink(member.github, "fa-github"));
        
            equipeContainer.appendChild(teamInfoDiv);
            equipeContainer.appendChild(createElementWithClass("hr", ""));
        });
        }
        else if(id=== 'presentation'){
            // Création de l'élément h2
            const h2Element = createText('h2', "CyberSafe : C'est quoi ?");
            // Création de l'élément p
            const pElement = createText('p',"Avec la popularité croissante de l’Internet des Objets, les utilisateurs peuvent manquer de connaissances pour sécuriser correctement les objets connectés, le laissant et potentiellement le réseau auquel il est attaché vulnérable aux attaques. Le but de ce projet est d'explorer les vulnérabilités du système liées aux objets connectés et les implémentations conçues pour résister à ces vulnérabilités et/ou réduire le potentiel qu'un exploit résulte d'une telle vulnérabilité.  Un objet connecté peut être utilisé de plusieurs manières : (a) domotique, (b) un système indépendant conçu pour effectuer un nombre limité de tâches, ou (c) comme un appareil connecté à un réseau local typique fournissant des services réseau (c'est-à-dire DNS, serveur Web, serveur de messagerie, etc.).  Ainsi, CyberSafe est une plateforme web qui pourra se mettre à jour automatiquement pour informer les utilisateurs sur les vulnérabilités de sécurité des objets connectés.");

            // Création de l'élément h3
            const h3Element = createText('h3', 'Nos Sources');

            // Tableau des chemins d'accès des images
            const imageSources = ["Photos/cvelogo.png", "Photos/cwelogo.png", "Photos/nist-logo.png", "Photos/cornell-logo.png"];

            // Ajout des éléments à la page
            presentationContainer.appendChild(h2Element);
            presentationContainer.appendChild(pElement);
            presentationContainer.appendChild(h3Element);

            // Ajout des images à partir du tableau
            imageSources.forEach(src => {
                const imgElement = createImage(src);
                presentationContainer.appendChild(imgElement);
            });
        }
        else if(id === 'contact'){
            const infoSection1Data = [
                { type: 'paragraph', text: "Nous sommes joignables par mail !" },
                { type: 'icon', iconClass: "fa fa-envelope", fontSize: "2em", color: "white", cursor: "pointer", clickHandler: function () {
                    window.location.href = "mailto:contact.flkprod@gmail.com";
                }},
                { type: 'button', text: "Contactez-nous", clickHandler: function () {
                    window.location.href = "mailto:contact.flkprod@gmail.com";
                }}
            ];
            const infoSection1 = createInfoSection(infoSection1Data);
            contactContainer.appendChild(infoSection1);

            // Création de la deuxième section
            const infoSection2Data = [
                { type: 'paragraph', text: "Consultez le code de notre site en cliquant ici :" },
                { type: 'icon', iconClass: "fa fa-github", fontSize: "2em", color: "white", cursor: "pointer", clickHandler: function () {
                    window.location.href = "https://github.com/FLKprod/Projet-IOT";
                }}
            ];
            const infoSection2 = createInfoSection(infoSection2Data);
            contactContainer.appendChild(infoSection2);

            // Création de la troisième section
            const infoSection3Data = [
                { type: 'paragraph', text: "Suivez nous sur les réseaux sociaux :" },
                { type: 'icon', iconClass: "fa fa-instagram", fontSize: "2em", color: "white", cursor: "pointer", clickHandler: function () {
                    window.location.href = "https://www.instagram.com/flkprod_/";
                }},
                { type: 'icon', iconClass: "fa fa-facebook", fontSize: "2em", color: "white", cursor: "pointer", clickHandler: function () {
                    window.location.href = "https://www.facebook.com/profile.php?id=100070487814685";
                }}
            ];
            const infoSection3 = createInfoSection(infoSection3Data);
            contactContainer.appendChild(infoSection3);
        }
        else if(id === 'tableau'){
            var presentationContainer = document.querySelector('.presentation-container');
            var equipeContainer = document.querySelector('.team-info-container');
            presentationContainer.innerHTML = '';
            equipeContainer.innerHTML = '';

            const tableauContainer = document.querySelector('.tableau-container');
            tableauContainer.innerHTML = '';

            const searchDiv = createSearchDiv();
            const label = createLabel('Chercher une source :', 'sortDropdown');
            const sortDropdown = createSortDropdown();
            const tableContainer = createTableContainer();
            const refreshButton = createButton('Refresh 🔄', keywordSearch);

            tableauContainer.appendChild(searchDiv);
            tableauContainer.appendChild(label);
            tableauContainer.appendChild(sortDropdown);
            tableauContainer.appendChild(tableContainer);
            tableauContainer.appendChild(refreshButton);

            // Ajouter un gestionnaire d'événements à la zone de texte
            var textarea = document.getElementById('keywordInput');
            textarea.addEventListener('keyup', handleEnterKey);
            keywordSearch();

            refreshButton.addEventListener('click', function() {
                keywordSearch();
            });
        }
        myDiv.classList.add('fade-in');
}

function handleEnterKey(event) {
    if (event.key === 'Enter') {
        keywordSearch()
    }
}


// Fonction pour créer un élément avec du texte
function createTextElement(tag, textContent) {
    const element = document.createElement(tag);
    element.textContent = textContent;
    return element;
}

// Fonction pour créer un élément image
function createImage(src) {
    const element = document.createElement('img');
    element.src = src;
    return element;
}

// Fonction pour créer un titre avec du texte
function createText(tag, textContent) {
    return createTextElement(tag, textContent);
}

// Fonction pour créer un élément avec une icône Font Awesome
function createIcon(iconClass, fontSize, color, cursor, clickHandler) {
    const icon = document.createElement("i");
    icon.className = `fa ${iconClass}`;
    icon.style.fontSize = fontSize;
    icon.style.color = color;
    icon.style.cursor = cursor;
    icon.onclick = clickHandler;
    return icon;
}

// Fonction pour créer un bouton
function createButton(text, clickHandler) {
    const button = document.createElement("button");
    button.textContent = text;
    button.onclick = clickHandler;
    return button;
}

function createInfoSection(data) {
    const infoDiv = document.createElement("div");
    infoDiv.className = "info";

    data.forEach(item => {
        if (item.type === 'paragraph') {
            const paragraph = document.createElement("p");
            paragraph.textContent = item.text;
            infoDiv.appendChild(paragraph);
        } else if (item.type === 'icon') {
            const icon = document.createElement("i");
            icon.className = item.iconClass;
            icon.style.fontSize = item.fontSize;
            icon.style.color = item.color;
            icon.style.cursor = item.cursor;
            icon.onclick = item.clickHandler;
            infoDiv.appendChild(icon);
        } else if (item.type === 'button') {
            const button = createButton(item.text, item.clickHandler);
            infoDiv.appendChild(button);
        }
    });

    return infoDiv;
}

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

function createElementWithClass(tag, className) {
    const element = document.createElement(tag);
    element.className = className;
    return element;
}

function createSearchDiv() {
    const searchDiv = document.createElement('div');
    const keywordInput = createInput('text', 'keywordInput', 'Search here', 'padding: 10px; border: 2px solid #ccc; border-radius: 5px; width: 300px;');
    const searchButton = createButton('Search', keywordSearch);
    searchDiv.appendChild(keywordInput);
    searchDiv.appendChild(searchButton);
    return searchDiv;
}

function createInput(type, id, placeholder, style) {
    const input = document.createElement('input');
    input.type = type;
    input.id = id;
    input.placeholder = placeholder;
    input.style.cssText = style;
    return input;
}

function createLabel(text, forId) {
    const label = document.createElement('label');
    label.textContent = text;
    label.htmlFor = forId;
    return label;
}

function createSortDropdown() {
    const sortDropdown = createSelectElement('sortDropdown', sortTable);
    const chooseOption = createOption('choose', 'Choisir', true, true);
    const allOption = createOption('all', 'All');
    const optgroup = document.createElement('optgroup');
    optgroup.id = 'listes';
    optgroup.value = 'src';
    optgroup.label = 'Source';
    sortDropdown.appendChild(chooseOption);
    sortDropdown.appendChild(allOption);
    sortDropdown.appendChild(optgroup);
    return sortDropdown;
}

function createTableContainer() {
    const tableContainer = createElementWithClass('div', 'tableContainer');
    const vulnerabilityTable = document.createElement('table');
    vulnerabilityTable.id = 'vulnerabilityTable';
    tableContainer.appendChild(vulnerabilityTable);
    return tableContainer;
}

function createSelectElement(id, onchange) {
    const select = document.createElement('select');
    select.id = id;
    select.onchange = onchange;
    return select;
}

function createOption(value, text, disabled, selected) {
    const option = document.createElement('option');
    option.value = value;
    option.textContent = text;
    option.disabled = disabled;
    option.selected = selected;
    return option;
}
