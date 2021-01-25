// dependencies
const express = require("express");
const fs = require("fs");
const path = require('path');

// express app initializer
const app = express();
const PORT = process.env.PORT || 3001;

// data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(__dirname));

//write file for the api and html routes folder
require('./routes/routes')(app);

//where we serve html
app.get("/", function(req, res) {res.json(path.join(__dirname, "public/index.html"));});

// listener
app.listen(PORT, function() {
    console.log("Listening on PORT: " + PORT);
});  
