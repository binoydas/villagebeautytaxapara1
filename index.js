const express = require('express');
const app = express();

// Define a route to serve your HTML page
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

// Start the server
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
