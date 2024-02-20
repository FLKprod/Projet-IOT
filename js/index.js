console.log("index.js loaded");
toggleTeamInfo('presentation');


function selectLanguage() {
    localStorage.setItem('Language',document.getElementById('selectLanguage').value);
    console.log(localStorage.getItem('Language'))
}

function toggleTeamInfo(id) {
    var presentationContainer = document.querySelector('.presentation-container');
    var equipeContainer = document.querySelector('.team-info-container');
    var tableauContainer = document.querySelector('.tableau-container');
    var contactContainer = document.querySelector('.contact-container');
    var defContainer = document.querySelector('.definitions-container');
    presentationContainer.innerHTML = '';
    equipeContainer.innerHTML = '';
    tableauContainer.innerHTML = '';
    contactContainer.innerHTML = '';
    defContainer.innerHTML = '';
    var myDiv = document.querySelector('.center');
    equipeContainer.classList.remove('fade-in');
    tableauContainer.classList.remove('fade-in');
    contactContainer.classList.remove('fade-in');
    presentationContainer.classList.remove('fade-in');
    defContainer.classList.remove('fade-in');
    if(id=== 'teamInfo'){
        equipeContainer.classList.add('fade-in');
        equipeContainer.appendChild(createText('h2',"Notre Equipe"));
        const membresteamInfoDiv = document.createElement("div");
        membresteamInfoDiv.classList.add("membres-team-info");
        const teamData = [
            {
                name: "Maxime Falkowski",
                roles: "ÉTUDIANT VENANT DE L'École supérieure d'ingénieurs de recherche en matériaux et en infotronique de Dijon et ACTUELLEMENT en cybersécurité à l'Université du Québec à Chicoutimi",
                linkedin: "https://www.linkedin.com/feed/",
                github: "https://github.com/FLKprod",
                imageSrc: "Photos/_MG_9841.JPG"
            },
            {
                name: "Jérémie Schemith",
                roles: "Étudiant en cybersécurité à l'Université du Québec à Chicoutimi",
                linkedin: "https://www.linkedin.com/feed/",
                github: "https://github.com/FLKprod",
                imageSrc: "Photos/jeremie_photo.png"
            },
            {
                name: "Maxime Molesin",
                roles: "Étudiant venant de l'École Nationale d'Ingénieur de Brest actuellement en maitrise en informatique à l'Université du Québec à Chicoutimi",
                linkedin: "https://www.linkedin.com/in/maximemolesin",
                github: "https://github.com/LaMoleOG",
                imageSrc: "Photos/maxime_molesin.jpg"
            },
            {
                name: "Léo Mackowiak",
                roles: "Étudiant spécialisé en Ingénierie d'affaires et Objets Connectés en maîtrise informatique à l'Université du Québec à Chicoutimi",
                linkedin: "https://www.linkedin.com/in/leo-mackowiak",
                github: "https://github.com/LeoMacko",
                imageSrc: "Photos/leo_photo.jpg"
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
            
                const teamInfoDivNetworks = createElementWithClass("div","networks");
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
            tableauContainer.appendChild(createSearchDiv());

            tableContainer = createTableContainer();
  
            tableauContainer.appendChild(tableContainer);

            var textarea = document.getElementById('keywordInput');
            textarea.addEventListener('keyup', handleEnterKey);
            keywordSearch();
        }
        else if (id === 'definitions') {
            defContainer.classList.add('fade-in');
            const definitionsContainer = document.querySelector('.definitions-container');
            definitionsContainer.classList.add('fade-in');
            definitionsContainer.appendChild(createText('h2',"Comprendre et Contrer : Tel est l'enjeux de chacun au quotidien"));
            definitionsContainer.appendChild(createText('p',"À mesure que la technologie évolue, de nouvelles opportunités émergent, mais malheureusement, elles s'accompagnent également de vulnérabilités potentielles qui peuvent compromettre la sécurité de nos systèmes et données."));
            definitionsContainer.appendChild(createText('p',"Que vous soyez un professionnel de la cybersécurité, un responsable informatique, ou simplement soucieux de la protection de vos données, cet outil vous fournit des informations cruciales sur les menaces actuelles."));

            fetch('http://localhost:8001/def.json')
                .then(response => response.json())
                .then(data => {
                    console.log(data);
                    const definitionsTableContainer = document.createElement('div');
                    definitionsTableContainer.id = 'definitionsTableContainer';
                    definitionsContainer.appendChild(definitionsTableContainer);
        
                    // Create and populate the table with data from the JSON file
                    const definitionsTable = document.createElement('table');
                    definitionsTable.classList.add('defTable');
                    
        
                    // Add table header
                    const headerRow = definitionsTable.createTHead().insertRow();
                    const headers = ['Vulnérabilité', 'Définition', 'Solution'];
                    headers.forEach(headerText => {
                        const th = document.createElement('th');
                        th.textContent = headerText;
                        headerRow.appendChild(th);
                    });
        
                    // Add table rows with data
                    data.forEach(vulnerability => {
                        const row = definitionsTable.insertRow();
                        const cells = [vulnerability.name, vulnerability.definition, vulnerability.solution];
                        cells.forEach(cellText => {
                            const cell = row.insertCell();
                            cell.textContent = cellText;
                        });
                    });
        
                    definitionsTableContainer.appendChild(definitionsTable);
                })
                .catch(error => console.error('Error loading JSON:', error));
        }
        myDiv.classList.add('fade-in');
}

function handleEnterKey(event) {
    if (event.key === 'Enter') {
        keywordSearch()
    }
}

document.addEventListener('DOMContentLoaded', function () {
    createMenu =function () {
    const menuDiv = document.createElement('div');
    menuDiv.id = 'menu3';
    menuDiv.classList.add('menu3');
    const menuList = document.createElement('ul');
    menuList.id = 'menu-list';
    menuDiv.appendChild(menuList);
    loadMenuItems();
    return menuDiv;
}


function loadMenuItems() {
    
    fetch('http://localhost:8001/iot.json')
        .then(response => response.json())
        .then(data => {
            const menuList = document.getElementById('menu-list');
            data.forEach(item => {
                const li = document.createElement('li');
                const a = document.createElement('a');
                a.href = '#'; 
                a.textContent = item.category; 
                li.appendChild(a);
                var table = document.getElementById('vulnerabilityTable');
                
                const submenu = document.createElement('ul');
                submenu.id = 'submenu3';
                submenu.classList.add('submenu3');
                item.brands.forEach(brand => {
                    const subLi = document.createElement('li');
                    subLi.textContent = brand.brand;
                    
                    subLi.addEventListener('click',function(){
                        console.log("Click on ::: " + brand.brand);
                        data = brand.vulnerabilities;
                        while (table.firstChild) {
                            table.removeChild(table.firstChild);
                        }
                        //table.classList.remove('fade-in');
                        table.classList.add('opacity0');
                        console.log("REEEEEMMMMOOOOOVVVVVEEEEEED");
                        console.log("AAAAAADDDDDDDDDDDDD");
                        table.classList.add('fade-in');
                        
                        if (Array.isArray(data) && data.length > 0) {
                            var headerRow = table.createTHead().insertRow(0);
                            Object.keys(data[0].cve).forEach(header => {
                                if (header === "id" || header === "sourceIdentifier" || header === "published" || header === "descriptions" || header === "lastModified" || header === "references" || header === "vulnStatus"){
                                    var cell = headerRow.insertCell();
                                    cell.appendChild(document.createTextNode(header));
                                    if(header === "descriptions"){
                                        cell.style = "padding: 1em 8em 1em 8em;";
                                    }
                                }
                                    
                            });
                            headerRow.classList.add('header-row');

                            // Ajouter des lignes de data.json (à partir de la deuxième ligne)
                            data.forEach((rowData) => {
                                var row = table.insertRow();
                                Object.entries(rowData.cve).forEach(([key, value]) => {
                                    if (key == "id" || key == "sourceIdentifier" || key == "published"|| key == "lastModified" || key == "vulnStatus"){
                                        var cell = row.insertCell();
                                        
                                        cell.appendChild(document.createTextNode(value));
                                    }
                                    // Si la valeur n'est pas un tableau, ajoutez-la normalement
                                    else if (key == "descriptions"){
                                        var cell = row.insertCell();
                                        cell.style = "padding: 2em;";
                                        if (localStorage.getItem('Language') == "EN"){
                                            cell.appendChild(document.createTextNode(value[0].value));
                                        }
                                        else if (localStorage.getItem('Language') == "Spanish"){
                                            cell.appendChild(document.createTextNode(value[1].value));
                                        }
                                        else {
                                            langue = localStorage.getItem('Language');
                                            /*console.log(langue);
                                            CallAPITranslate(langue, value[0].value)
                                            .then(response => {
                                                 cell.appendChild(document.createTextNode(response));
                                                 })
                                             .catch(error => {
                                                 console.error('Erreur lors de la traduction:', error);
                                                 });*/
                                        }                           
                                    }
                                    /*else if (key == "metrics"){
                                        var cell = row.insertCell();
                                        cell.appendChild(document.createTextNode(value.cvssMetricV2[0].source));
                                    }
                                    else if (key == "configurations"){
                                        var cell = row.insertCell();
                                        cell.appendChild(document.createTextNode(value[0].nodes[0].cpeMatch[0].versionEndExcluding));
                                    }
                                    
                                    */
                                    else if (key == "references"){
                                        var cell = row.insertCell();
                                        cell.style = "padding: 2em;";
                                        textcase="";
                                        for (let i = 0; i < value.length; i++) {
                                            textcase += value[i].url;
                                            textcase += "\n"
                                        }
                                        cell.appendChild(document.createTextNode(textcase));
                                    }
                                });
                            }
                            );
                            
                            
            } else {
                console.error('Le fichier JSON est vide ou mal formaté.');
            }


                    })


                    submenu.appendChild(subLi);

                });

           
                li.appendChild(submenu);

         
                li.addEventListener('mouseenter', function() {
                    submenu.style.display = 'block';
                    console.log("La souris est rentréeeeeeeeee !")
                    submenu.querySelectorAll('li').forEach(subLi => {
                        console.log(subLi.textContent);
                    });
                });

                li.addEventListener('mouseleave', function() {
                    submenu.style.display = 'none';
                });

                menuList.appendChild(li);

            });
            
        })
        .catch(error => {
            console.error('Une erreur s\'est produite lors du chargement des données du menu :', error);
        });
}

});

// ----------------------------------------------- CREATION DES ELEMENTS HTML -------------------------------------------------------//

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

function createSocialLink(href, iconClass) {
    const link = document.createElement("a");
    link.href = href;
    link.target = "_blank";
    const icon = document.createElement("i");
    icon.classList.add("fa", iconClass);
    link.appendChild(icon);
    return link;
}

function createElementWithClass(tag, className) {
    const element = document.createElement(tag);
    element.className = className;
    return element;
}

function createSearchDiv() {
    const searchDiv = createElementWithClass('div','research');
    const keywordInput = createInput('text', 'keywordInput', 'Search here');
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

function createTableContainer() {
    const tableContainer = createElementWithClass('div', 'tableContainer');
    const table = createElementWithClass('div','vulnerabilityTable');
    const vulnerabilityTable = document.createElement('table');
    vulnerabilityTable.id = 'vulnerabilityTable';
    menu = createMenu();
    tableContainer.appendChild(menu);
    table.appendChild(vulnerabilityTable);
    tableContainer.appendChild(table)
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

