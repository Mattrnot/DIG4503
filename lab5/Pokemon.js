const Person = require("./Person.js");
const pokemons = require('json-pokemon');

class Pokemon {
    constructor() {

        this.pokemons = [0];

        for(let i = 0; i < 99; i++)
        {
            let id = pokemons.id.id();
            let name = pokemons.name.name();
            this.pokemons.push(new Person(id, name));
        }
    }
    readAllColor(req) {

        let result = [];

        this.pokemons.forEach((value)=> {
            if(value.name == req.params.name) {
                result.push(value);
            }
        });

        if(result.length == 0) {
            //Invalid
            result.push({"error": "Can't find!"});
        } else {
            //Valid
        }

        return result;
    }

    readAllName(req) {

        let result = [];

        this.pokemons.forEach((value)=> {
            if(value.id == req.params.id) {
                result.push(value);
            }
        });

        if(result.length == 0) {
            //Invalid
            result.push({"error": "Can't find!"});
        } else {
            //Valid
        }

        return result;
    }

    readColor(req) {

        let result = {"error": "Can't find!"};

        this.pokemons.forEach((value)=> {
            if(value.name == req.params.name) {
                result = value;
            }
        });

        if(result.error) {
            //Invalid
        } else {
            //Valid
        }

        return result;
    }

    readName(req) {

        let result = {"error": "Can't find!"};

        this.pokemons.forEach((value)=> {
            if(value.id == req.params.id) {
                result = value;
            }
        });

        if(result.error) {
            //Invalid
        } else {
            //Valid
        }

        return result;

    }

}

module.exports = Pokemon;
