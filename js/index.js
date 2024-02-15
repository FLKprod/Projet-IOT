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
    equipeContainer.classList.remove('fade-in');
    tableauContainer.classList.remove('fade-in');
    contactContainer.classList.remove('fade-in');
    presentationContainer.classList.remove('fade-in');
    if(id=== 'teamInfo'){
        equipeContainer.classList.add('fade-in');
        equipeContainer.appendChild(createText('h2',"Notre Equipe"));
        const membresteamInfoDiv = document.createElement("div");
        membresteamInfoDiv.classList.add("membres-team-info");
        const teamData = [
            {
                name: "Maxime Falkowski",
                roles: "Étudiant en cybersécurité à l'Université du Québec à Chicoutimi",
                linkedin: "https://www.linkedin.com/feed/",
                github: "https://github.com/FLKprod",
                imageSrc: "Photos/_MG_9841.JPG"
            },
            {
                name: "A MODIFIER",
                roles: "Étudiant en cybersécurité à l'Université du Québec à Chicoutimi",
                linkedin: "https://www.linkedin.com/feed/",
                github: "https://github.com/FLKprod",
                imageSrc: "Photos/_MG_9841.JPG"
            },
            {
                name: "A MODIFIER",
                roles: "Étudiant en cybersécurité à l'Université du Québec à Chicoutimi",
                linkedin: "https://www.linkedin.com/feed/",
                github: "https://github.com/FLKprod",
                imageSrc: "Photos/_MG_9841.JPG"
            },
            {
                name: "A MODIFIER",
                roles: "Étudiant en cybersécurité à l'Université du Québec à Chicoutimi",
                linkedin: "https://www.linkedin.com/feed/",
                github: "https://github.com/FLKprod",
                imageSrc: "Photos/_MG_9841.JPG"
            },
            {
                name: "A MODIFIER",
                roles: "Étudiant en cybersécurité à l'Université du Québec à Chicoutimi",
                linkedin: "https://www.linkedin.com/feed/",
                github: "https://github.com/FLKprod",
                imageSrc: "Photos/_MG_9841.JPG"
            },
            {
                name: "A MODIFIER",
                roles: "Étudiant en cybersécurité à l'Université du Québec à Chicoutimi",
                linkedin: "https://www.linkedin.com/feed/",
                github: "https://github.com/FLKprod",
                imageSrc: "Photos/_MG_9841.JPG"
            }
        ];

            teamData.forEach(member => {
                const teamInfoDiv = document.createElement("div");
                teamInfoDiv.classList.add("team-info");
            
                teamInfoDiv.appendChild(createImage(member.imageSrc));
            
                const teamInfoDivtext = document.createElement("div");
                teamInfoDivtext.classList.add("team-info-text");
                teamInfoDivtext.appendChild(createText('h4',member.name));
                teamInfoDivtext.appendChild(createText('p',member.roles));
                teamInfoDiv.appendChild(teamInfoDivtext);
            
                const teamInfoDivNetworks = document.createElement("div");
                teamInfoDivNetworks.appendChild(createSocialLink(member.linkedin, "fa-linkedin"));
                teamInfoDivNetworks.appendChild(createSocialLink(member.github, "fa-github"));
                teamInfoDiv.appendChild(teamInfoDivNetworks);
                membresteamInfoDiv.appendChild(teamInfoDiv);
            });
            equipeContainer.appendChild(membresteamInfoDiv);
        }
        else if(id=== 'presentation'){
            presentationContainer.classList.add('fade-in');
            presentationContainer.appendChild(createText('h2', "CyberSafe : C'est quoi ?"));
            presentationContainer.appendChild(createText('p',"Avec la popularité croissante de l’Internet des Objets, les utilisateurs peuvent manquer de connaissances pour sécuriser correctement les objets connectés, le laissant et potentiellement le réseau auquel il est attaché vulnérable aux attaques. Le but de ce projet est d'explorer les vulnérabilités du système liées aux objets connectés et les implémentations conçues pour résister à ces vulnérabilités et/ou réduire le potentiel qu'un exploit résulte d'une telle vulnérabilité.  Un objet connecté peut être utilisé de plusieurs manières : (a) domotique, (b) un système indépendant conçu pour effectuer un nombre limité de tâches, ou (c) comme un appareil connecté à un réseau local typique fournissant des services réseau (c'est-à-dire DNS, serveur Web, serveur de messagerie, etc.).  Ainsi, CyberSafe est une plateforme web qui pourra se mettre à jour automatiquement pour informer les utilisateurs sur les vulnérabilités de sécurité des objets connectés."));

            presentationContainer.appendChild(createText('h3', ' Comment Identifions des Vulnérabilités ? '));
            presentationContainer.appendChild(createText('p',"Le principal objectif de CyberSafe est d'effectuer une analyse approfondie pour identifier les vulnérabilités potentielles présentes dans les objets connectés. Cette étape cruciale permettra de comprendre les points faibles qui pourraient être exploités par des attaquants."));

            presentationContainer.appendChild(createText('h3', "Les Types d'Objets Connectés Couverts par CyberSafe"));
            presentationContainer.appendChild(createText('p'," CyberSafe prend en charge la sécurité des objets connectés utilisés dans le domaine de la domotique. Cela englobe une variété d'appareils intelligents présents dans les maisons, tels que des thermostats, des caméras de sécurité, et des serrures intelligentes."));
            presentationContainer.appendChild(createText('p'," Le projet s'adresse également aux systèmes indépendants conçus pour effectuer des tâches spécifiques. Ces dispositifs, bien que spécialisés, nécessitent une protection contre les menaces potentielles."));
            presentationContainer.appendChild(createText('p'," CyberSafe étend sa couverture aux objets connectés intégrés à un réseau local, fournissant des services réseau tels que DNS, serveur web, serveur de messagerie, etc. Cette inclusivité garantit une approche complète de la sécurité des objets connectés."));

            presentationContainer.appendChild(createText('h3', ' Notre but : Sensibiliser les utilisateurs '));
            presentationContainer.appendChild(createText('p',"Un aspect essentiel du projet est de sensibiliser les utilisateurs aux enjeux de sécurité liés aux objets connectés. CyberSafe s'engage à fournir des informations éducatives pour aider les utilisateurs à sécuriser correctement leurs appareils et à adopter des pratiques de sécurité adéquates."));
            
            presentationContainer.appendChild(createText('h4', ' Nos Sources'));
            const imageSources = ["Photos/cvelogo.png", "Photos/cwelogo.png", "Photos/nist-logo.png", "Photos/cornell-logo.png"];
            imageSources.forEach(src => {
                const imgElement = createImage(src);
                presentationContainer.appendChild(imgElement);
            });

            
        }
        else if(id === 'contact'){
            contactContainer.classList.add('fade-in');
            const itemscontactContainer = document.createElement("div");
            itemscontactContainer.classList.add("contact-text");
            const infoSection1Data = [
                { type: 'icon', iconClass: "fa fa-envelope", clickHandler: function () {
                    window.location.href = "mailto:contact.flkprod@gmail.com";
                }},
                { type: 'paragraph', text: "Adresse courriel" },
                { type: 'paragraph', text: "contact.flkprod@gmail.com" }
            ];
            contactContainer.appendChild(createText('h2', "N'hésitez pas à nous contacter pour toute information ou problème rencontré sur notre site !"));
            itemscontactContainer.appendChild(createInfoSection(infoSection1Data));
            contactContainer.appendChild(createText('hr'));

            const infoSection2Data = [
                { type: 'icon', iconClass: "fa fa-github", clickHandler: function () {
                    window.open("https://github.com/FLKprod/Projet-IOT", "_blank");
                }}, { type: 'paragraph', text: "Code source du site" }
            ];
            itemscontactContainer.appendChild(createInfoSection(infoSection2Data));
            
            const infoSection3Data = [
                
                { type: 'icon', iconClass: "fa fa-instagram", clickHandler: function () {
                    window.open("https://www.instagram.com/flkprod_/", "_blank");
                }},{ type: 'paragraph', text: "Instagram" },
                { type: 'paragraph', text: "Page officielle" }
            ];

            const infoSection4Data = [
                { type: 'icon', iconClass: "fa fa-facebook", clickHandler: function () {
                    window.open("https://www.facebook.com/profile.php?id=100070487814685", "_blank");
                }},{ type: 'paragraph', text: "Facebook" },
                { type: 'paragraph', text: "Page officielle" }
            ];
            itemscontactContainer.appendChild(createInfoSection(infoSection3Data));
            itemscontactContainer.appendChild(createInfoSection(infoSection4Data));
            contactContainer.appendChild(itemscontactContainer);
        }
        else if(id === 'tableau'){
            tableauContainer.classList.add('fade-in');
            tableauContainer.innerHTML = '';

            tableauContainer.appendChild(createSearchDiv());
            tableauContainer.appendChild(createLabel('Chercher une source : ', 'sortDropdown'));
            tableauContainer.appendChild(createSortDropdown());
            
            var refreshButton = createButton('Refresh 🔄', keywordSearch);
            tableauContainer.appendChild(refreshButton);

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

    data.forEach((item, index) => {
        if (item.type === 'paragraph') {
            const paragraph = document.createElement("p");
            paragraph.textContent = item.text;
            if (index === 1) {
                paragraph.classList.add('bold-text');
            }
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
