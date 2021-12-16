var Chance = require('chance');
var chance = new Chance();

for(var i = 0; i < 10; ++i) {
if(chance.gender() == "Male") {
    console.log("Hello Mr "+ chance.animal());
}
else {
    console.log("Hello Mrs " + chance.animal());
}
}
