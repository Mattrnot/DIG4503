const Express = require("express");
const App = Express();
const port = 80;
const Person = require("./Person.js");
const pokemons = require('json-pokemon');
const cors = require("cors");

App.use(cors());

const Pokemon = Pokemons[0];

let Pokemons = [];

for(let i = 0; i < 87; i++)
{
    let name = Pokemons.name.name();
    let id = Pokemons.id.id();
    Pokemons.push(new Person(name, id));
}
App.use("/", Express.static("client/build"));

App.get("/pokemons/name/:name", (req, res) => {
    Pokemons.forEach((value)=> {
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
    Pokemons.forEach((value)=> {
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