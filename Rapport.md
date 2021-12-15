# API - Labo HTTP
Auteurs :
Guilain Mbayo,
Mehdi Salhi

## Description

## Marche à suivre
créer un dossier docker-images
créer un dossier "apache_php-image" dans le dossier créé précédemment
créer un fichier Dockerfile dans ce dossier.

Ecrire le contenu suivant dans le dockerfile:
```
FROM php:7.2-apache
COPY src/ /var/www/html/
```

Cela permet de copier le contenu que l'on aura créé en local dans le répertoire src
vers le répertoir /var/www/html/ de notre container docker à son exécution.

Créer un répertoire nommé "public-tml" au même niveau que le dockerfile

Créer un répertoir src
Construire et runner l'image docker à l'aide des commandes suivantes:
```
sudo docker build -t my-php-app .
sudo docker run -d --name my-running-app -p 8080:80 my-php-app 
```

Se connecter à un terminal dan le container que l'on vient d'exécuter:
```
sudo docker exec -it my-running-app2 /bin/bash
```
On peut ensuite explorer l'arborescence à l'aide des commandes
classic (ls, cd, etc...)

Créer un fichier "index.html" dans le répertoire src créé précédemment. Ce 
fichier servira de page d'accueil pour notre serveur apache.


