// Import the express library
const express = require("express");

// Create a new express application/instance
const app = express();

app.get("/", (request, response) => {
	// response.send("<h1>Hello World!</h1>");

	response.json({
		message: "Hello World!",
	});
});

app.post("/", (request, response) => {
	response.json({
		message: "Post request received!",
	});
});

const PokemonController = require("./controllers/pokemonController.js");
// const { router } = require("./controllers/pokemonController");
app.use("/pokemon", PokemonController);

module.exports = { app };