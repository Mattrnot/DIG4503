const person = require("./person.js");
class matt extends person {
    constructor(name, favoritecolor){
        super(name, favoritecolor);
    }
}
module.exports = matt;