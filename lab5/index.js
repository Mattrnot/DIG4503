const Express = require("express");
const App = Express();
const port = 80;
const Pokemon = require("./Pokemon.js");

let pokemon = new Pokemon();

App.use("/", Express.static("public"));

App.get("/name/:name", (req, res) => {

    res.send(pokemon.readAllColor(req));

});

App.get("/id/:id", (req, res) => {

    res.send(pokemon.readAllName(req));

});

App.get("/person/name/:name", (req, res) => {

    res.send(pokemon.readColor(req));

});

App.get("/person/id/:id", (req, res) => {
   
    res.send(pokemon.readName(req));

});

App.use("/", Express.static("public"));

App.get("/api", (req, res) => {

    let result = {"error": "Error message"};

    if(req.params.value == 5) {
        result = {"secret": "you knew the secret!"};
    }

    res.json(result);
});

App.listen(port, () => {
    console.log("Server is running!");
});