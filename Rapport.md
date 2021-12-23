# API - Labo HTTP
Auteurs :
Guilain Mbayo,
Mehdi Salhi

# Etape 1
## Description

## Marche à suivre

Commencer par créer un dossier docker-images. 

Ensuite, créer un dossier "apache_php-image" dans le dossier 
créé précédemment. 

Pour finir, créer un fichier Dockerfile dans ce dossier.

Ecrire le contenu suivant dans le dockerfile:
```
FROM php:7.2-apache
COPY src/ /var/www/html/
```

Cela va permettre de créer un container docker à partir de l'image *php:7.2-apache*
tout en copiant le contenu de notre répertoire *src/* local vers le répertoire
*/var/www/html/* du container docker.

Créer un répertoire src au même niveau que le Dockerfile.

Construire et lancer l'image docker à l'aide des commandes suivantes:
```
sudo docker build -t my-php-app .
sudo docker run -d -p 8080:80 my-php-app 
```
*Noter l'utilisation du `-p` qui va mapper le port 80 de notre serveur apache
au port 8080 de notre service docker.*

Se connecter à un terminal dans le container que l'on vient d'exécuter:

```
sudo docker exec -it my-running-app2 /bin/bash
```
On peut ensuite explorer l'arborescence à l'aide des commandes
classic (ls, cd, etc...)

Créer un fichier "index.html" dans le répertoire src créé précédemment. Ce
fichier servira de page d'accueil pour notre serveur apache.
Dans notre cas, nous avons inclus un bootsrap déjà fait afin d'avoir une
présentation plus élégante qu'un simple titre sur fond blanc.

## Démo
### Construction de l'image
Depuis le répértoire contenant le Dockerfile:
```
sudo docker build -t my-php-app .
```
### Lancement de l'image
```
sudo docker run -d -p 8080:80 my-php-app 
```

### Accès au contenu depuis un navigateur
Se rendre à l'adresse *localhost:8080*. 

# Etape 2
## Prérequis
Installer node.js et npm

## Description

## Marche à suivre
Au même niveau que le répertoire "apache_php-image" créé à l'étape 1,
créer un répertoire express-image.

Ensuite, créer un fichier Dockerfile ainsi qu'un répertoire *src*
dans ce dossier.

Pour choisir l'image de node.js à installer, nous avons chercher sur 
`node.js.org` la dernière version stable de node. En l'occurence, il 
s'agissait de la version 16.13.1.

Nous avons donc utilisé une image de la version 16.13.1-alpine.

Créer un *package.json*dans le répertoir *src"
à l'aide de la commande suivante:
```
npm init
```
*Noter que les informations renseignée peuvent être choisie selon leur 
pertinence pour l'utilisateur, ou laisser par défaut*

Afin de générer des utilisateur de manière aléatoire dans notre *package.json*,
utiliser la commande suivante:
```
npm install --save chance
```

Créer un fichier *index.js*, qui contiendra le script js voulu.

Dans ce fichier, nous avons entré les instructions suivantes:
```
var chance = require('chance');
var chance = new Chance();

for(var i = 0; i < 10; ++i) {
    if(chance.gender() == "Male") {
        console.log("Hello Mr " + chance.animal());
    } else{
        console.log("Hello Mrs " + chance.animal());
    }
}
```
### Express
Aller dans le répertoire src/ puis
```
npm install --save express
```
Modifier le fichier index.js

```
// Importe le module express                                                                              
var express = require('express');                                                                         
var app = new express();                                                                                  
                                                                                                          
// execute le code à chaque requête "GET /"                                                               
app.get('/', function(req, res) {                                                                         
    res.send("You tried to access /.");                                                                   
});                                                                                                       
                                                                                                          
// execute le code à chaque requête "GET /test"                                 
                              
app.get('/test', function(req, res) {                                                                     
    res.send("You tried to access /test.");                                                               
});                                                                                                       
                                                                                                          
// Met l'application en mode écoute sur le port 3000 et execute la fonction                               
// "function() à chaque nouvelle connexion                                                                
app.listen(3000, function() {                                                                             
    console.log("Accepting HTTP request on port 3000");                                                   
});     
```

Puis tester en lancant
```
node index.js
```
Puis executer la commande suivante depuis un terminal, réaliser une requête 
"GET / HTTP/1.1" et  "GET /test HTTP/1.1" et observer le résultat coté serveur.

On constate que ce script permet de réaliser un aiguillage en fonction de la 
requête du client afin de lui renvoyer le contenu désiré.

```
telnet localhost 3000
```









Ensuite, créer et lancer une image docker en exécutant les 
commandes suivantes au même niveau que le Dockerfile:
```
sudo docker build -t res/express_students .
sudo docker run res/express_students
```

## Démo
