$(function() {
    console.log("Loading animals");

    function loadAnimals() {
        $.getJSON( "/api/animals/", function( data ) {
            console.log(data);
        });
    };

    loadAnimals();
    setInterval(loadAnimals, 2000);
});
