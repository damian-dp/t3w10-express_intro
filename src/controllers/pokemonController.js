const express = require("express");

// Create an instance of the express router, not a full express application
const router = express.Router();

// Pokemon API request
router.get("/random", async (request, response) => {
	let pokemonData = {};

	let randomPokemonId = Math.floor(Math.random() * 100) + 1;
	let responseData = await fetch(
		"https://pokeapi.co/api/v2/pokemon/" + randomPokemonId
	);

	pokemonData = await responseData.json();

	response.json({
		result: pokemonData,
	});
});

// Export the router for the main application to use
module.exports = router;
