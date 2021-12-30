/*
    API - Labo HTTP Infrastructure
    Authors: Guilain Mbayo, Mehdi Salhi
    Date: 30.12.2021
    Description: JS script that uses jquery to send a query to our node.js
     server and gets a JSON object and then updates the content of our page
      with it every 5 seconds.
 */
$(function() {
    console.log("Loading animals");
    
    function loadAnimals() {
        
            $.getJSON( '/api/animals/', function( animals ) {
                        console.log(animals);
                        var message = animals[0].firstname + " " +
                            animals[0].lastname + ", " +
                            animals[0].gend + ", " +
                            animals[0].specie + ", born in " +
                            animals[0].birthyear + ", favourite words: " +
                            animals[0].favouriteWords;

                    $(".mySuperClass").html(message);
                    });
    };

    loadAnimals();
    setInterval(loadAnimals, 5000);
});
