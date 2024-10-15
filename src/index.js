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

const PORT = 3000;

app.listen(PORT, () => {
	console.log(`Server is running on http://localhost:${PORT}`);
});
