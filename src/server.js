// Import the express library
const express = require("express");

// Create a new express application/instance
const app = express();

/*
instance.verb(routePath,
	middleware,
	middleware,
	middleware,
	middleware,
	route handler
	)
*/

function xanderMiddleware (request, response, next){
	console.log("Xander middleware is now running!");
	request.coolCoderAcademyStuff = {
		...request.coolCoderAcademyStuff,
		xander: "cool programmer!"
	};
	// This doesn't work because request.coolCoderAcademyStuff wasn't defined yet 
	// request.coolCoderAcademyStuff.xander = "cool programmer!"
	next();
}

app.get("/", 
	xanderMiddleware,
	(request, response) => {
	// response.send("<h1>Hello World!</h1>");

	response.json({
		message: "Hello World!",
		customStuff: request.coolCoderAcademyStuff,
	});
});

app.post("/", xanderMiddleware, (request, response) => {
	response.json({
		message: "POST request received!"
	});
});

// http://localhost:3000/bananas
app.post(
	"/bananas", 
	(request, response, next) => {
		console.log("Bananas route has run"); 
		next();
	}, 
	(request, response) => {
	response.json({
		message: "POST bananas received!"
	});
});

const PokemonController = require("./controllers/pokemonController.js");
// const { router } = require("./controllers/pokemonController");
app.use("/pokemon", PokemonController);

module.exports = { app };