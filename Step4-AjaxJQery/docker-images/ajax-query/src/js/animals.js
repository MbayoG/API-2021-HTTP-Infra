$(function() {
    console.log("Loading animals");

    function loadAnimals() {
        $.getJSON( "/api/animals/", function( data ) {
            console.log(data);
            var message = data;
        $(".mySuperClass").text(message);
        });
    };

    loadAnimals();
    setInterval(loadAnimals, 2000);
});
