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
app.use(express.static("public"));

//write files for the api and html routes folder
// require('./routes/apiRoute')(app);
// require('./routes/htmlRoute')(app);

//added this instead and put both files together 
require('./routes/routes')(app);


// listener
app.listen(PORT, function() {
    console.log("Listening on PORT: " + PORT);
});  
