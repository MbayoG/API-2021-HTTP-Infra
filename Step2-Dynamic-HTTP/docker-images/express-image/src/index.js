// Importe le module chance
var Chance = require('chance');
var chance = new Chance();

// Importe le module express
var express = require('express');
var app = new express();

// Importe le module random-words-slugs
var randomWords = require('random-word-slugs');

// execute le code à chaque requête "GET /"
app.get('/', function(req, res) {
    console.log("GET / received");
    res.send(generateAnimals());
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

// Fonction qui génère une String sous forme de liste d'animaux
function generateAnimals() {
    var animals = [];
    //var animalsList = "Welcome to HEIG, these animals are currently enrolled at our school: \n";
    var numberOfAnimals = chance.integer({
        min: 5,
        max: 10
    });
    console.log(numberOfAnimals);
    for(var i = 0; i < numberOfAnimals; ++i) {
        var gender = chance.gender();
        var species = chance.animal();
        var birthYear = chance.year({
            min: 1800,
            max: 2021,
        });
        var firstName = chance.first({ gender: gender });
        var lastName = chance.last();
        var word = randomWords.generateSlug(4, {format: "title" });

        animals.push({
            firstname: firstName,
            lastname: lastName,
            gend: gender,
            specie: species,
            birthyear: birthYear,
            favouriteWords: word
        });
    };
    console.log(animals);
    return animals;
}
