const chalk = require("chalk");

class person {
    constructor(name,favoritecolor ) {
        this.name = name;
        this.favoritecolor = favoritecolor;
    
    }
   

    speak() {
        console.log(chalk.keyword(this.favoritecolor)(this.name));
    }
}

module.exports = person;