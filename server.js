const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const routes = require("./routes");
const db = require("./models");
const app = express();

const PORT = process.env.PORT || 3001;

// app.get('/', (req, res) => res.sendFile('auth.html', { root: __dirname }));


// Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Serve up static assets

app.use(express.static("client/build"));


app.use(routes);



// Add routes, both API and view

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/squonk";

mongoose.Promise = global.Promise;


mongoose.connect(MONGODB_URI);
// Start the server PORTS
app.listen(PORT, function () {
    console.log("App running on port " + PORT + "!");
});









