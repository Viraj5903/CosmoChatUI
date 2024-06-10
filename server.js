// Import the 'json-server' package/module and assign it to the variable 'jsonServer'.
const jsonServer = require("json-server");
// Version: json-server@^0.17.3

// Create a new instance of the JSON Server and assign it to the variable 'server'.
const server = jsonServer.create();

// Create a router for the JSON Server that will handle requests based on the data provided in the file "data/db.json".
const router = jsonServer.router("data/db.json");

// Set up default middlewares for the JSON Server, which include logging, parsing JSON bodies, and handling CORS.
const middlewares = jsonServer.defaults();

// Define the port on which the server will listen for incoming connections.
// It will either use the port specified in the environment variable 'PORT' or default to port 3500.
const port = process.env.PORT || 3500;

// Use the defined middlewares in the JSON Server instance.
server.use(middlewares);

// Use the defined router in the JSON Server instance.
server.use(router);

// Start the server and make it listen for incoming connections on the specified port.
server.listen(port, function () {
    // Log a message indicating that the JSON Server is running and listening on the specified port.
    console.log(`JSON Server is running on port ${port}.`);
})
