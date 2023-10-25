// Import necessary modules
const express = require('express');
const bodyParser = require('body-parser');

// Create an instance of express
const app = express();

// Use body-parser middleware to parse incoming requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Define a port number
const PORT = 3000;

// Simple route for testing
app.get('/', (req, res) => {
    res.send('Hello World!');
});

// Start the server on the specified port
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

module.exports = app; // This line is for testing purposes and can be removed if not needed.
