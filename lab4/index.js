const Express = require("express");
const App = Express();
const port = 80;
const Person = require("./Person.js");
const pokemons = require('json-pokemon');
 
const pokemon = pokemons[0];


let pokemons = [];

for(let i = 0; i < 87; i++)
{
    let name = pokemons.name.name();
    let id = pokemons.id.id();
    pokemons.push(new Person(name, id));
}

App.get("/pokemons/name/:name", (req, res) => {
    pokemons.forEach((value)=> {
        if(value.name == req.params.name) {
            res.send(value);
        }
    });

    res.send(result.error);

    const error = chalk.red(result.error);
    const value = chalk.green(value);

    console.log(error('Can not find!'));
    console.log(value(''));
});

App.get("/pokemons/id/:id", (req, res) => {
    pokemons.forEach((value)=> {
        if(value.id == req.params.id) {
            res.send(value);
        }
    });

    res.send(result.error);

    const error = chalk.red(result.error);
    const value = chalk.green(value);

    console.log(value(''));
    console.log(error('Can not find!'));
});

App.listen(port, () => {
    console.log("Server running!");
});
