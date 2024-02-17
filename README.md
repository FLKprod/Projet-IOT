# SafeConnect : Une Plateforme de Surveillance des Vulnérabilités de Sécurité des Objets Connectés

## Introduction
Avec la popularité croissante de l'Internet des Objets (IoT), les utilisateurs peuvent manquer de connaissances pour sécuriser correctement les objets connectés, le laissant et potentiellement le réseau auquel il est attaché vulnérable aux attaques. Le but de ce projet est d'explorer les vulnérabilités du système liées aux objets connectés et les implémentations conçues pour résister à ces vulnérabilités et/ou réduire le potentiel qu'un exploit résulte d'une telle vulnérabilité.

## Objectifs du Projet
Le projet vise à créer une plateforme web qui pourra se mettre à jour automatiquement pour informer les utilisateurs sur les vulnérabilités de sécurité des objets connectés. Un objet connecté peut être utilisé de plusieurs manières : (a) domotique, (b) un système indépendant conçu pour effectuer un nombre limité de tâches, ou (c) comme un appareil connecté à un réseau local typique fournissant des services réseau (c'est-à-dire DNS, serveur Web, serveur de messagerie, etc.).

## Sources de Données
### 1. [Common Vulnerabilities and Exposures (CVE)](https://cve.mitre.org/)
   - Mission : Identifier, définir et cataloguer les vulnérabilités de cybersécurité divulguées publiquement.
   
### 2. [Common Weakness Enumeration (CWE)](https://cwe.mitre.org/)
   - Complète le CVE en se concentrant sur les types de faiblesses ou de vulnérabilités qui peuvent exister dans les logiciels.
   
### 3. Classification par Blinowski et Piotrowski
   - G. J. Blinowski, P. Piotrowski, Classification basée sur le CVE des systèmes IoT vulnérables, in: Theory and Applications of Dependable Computer Systems, Springer, 2020, pp. 82–93. La description de cette classification est disponible sur la page web https://arxiv.org/abs/2006.16640

### 4. [Base de données sur les vulnérabilités (NVD)](https://nvd.nist.gov/)
   - Le NVD est le référentiel du gouvernement américain de données de gestion des vulnérabilités basées sur des normes et représentées à l'aide du Security Content Automation Protocol (SCAP). Ces données permettent d'automatiser la gestion des vulnérabilités, la mesure de la sécurité et la conformité. Le NVD comprend des bases de données de références de listes de contrôle de sécurité, de failles logicielles liées à la sécurité, de mauvaises configurations, de noms de produits et de mesures d'impact.

## Autres Sources d'Information
Pour plus d'informations sur les vulnérabilités, consultez [cette compilation](https://www.yeahhub.com/listvulnerability-databases-resources-2018/).

## Appel de l'API Nist avec PostMan

![image](https://github.com/FLKprod/Projet-IOT/assets/38373463/c13a0978-bfdd-4deb-98c6-ec032e25503b)

## Lancer le projet avec Python 
Javascript n'autorise pas de fetch des fichiers sur des serveurs locaux ( restriction CORS ), il faut alors démarrer un serveur http avec Python : 

python -m http.server 8001 

Nous pouvons ensuite accéder au site en entrant l'url : http://localhost:8001/index.html
## Licence
Ce projet est sous licence [MIT License](LICENSE).
