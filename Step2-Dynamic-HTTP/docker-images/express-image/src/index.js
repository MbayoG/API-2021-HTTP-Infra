// Importe le module chance
var Chance = require('chance');
var chance = new Chance();

// Importe le module express
var express = require('express');
var app = new express();

// Importe le module random-words-slugs
var randomWords = require('random-word-slugs');



/*
for(var i = 0; i < 10; ++i) {
    if(chance.gender() == "Male") {
        console.log("Hello Mr "+ chance.animal());
    }
    else {
        console.log("Hello Mrs " + chance.animal());
    }
}
*/

// execute le code à chaque requête "GET /"
app.get('/', function(req, res) {
    res.send(generateAnimals());
});

app.get('/test', function(req, res) {
    res.send("You tried to access /test.");
});

// Met l'application en mode écoute sur le port 3000 et execute la fonction
// "function() à chaque nouvelle connexion
app.listen(3000, function() {
    console.log("Accepting HTTP request on port 3000");
});

function generateAnimals() {
    var animalsList = "Welcome to HEIG, these animals are currently enrolled at our school: \n";
    var numberOfAnimals = chance.integer({
        min: 5,
        max: 10
    });
    console.log(numberOfAnimals);
    //var animals = [];
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
        //var word = randomWords({exactly: 1, wordsPerString: 3});
        /*
        animals.push({
            lastName: chance.last(),
            firstName: chance.first(),
            gender: gender,
            species: species,
            birthday: chance.birthday({
                year: birthYear
            })
        });
        */
        animalsList += (gender == "Male" ? "Mr. " : "Mrs. ") + firstName + " " + lastName + ", " + species + ", born on " + birthYear + ", Favourite words: " + word + "\n";
    };
    console.log(animalsList);
    return animalsList;
}
