// dependencies
const express = require("express");
const fs = require("fs");
const path = require('path');

// express app initializer
const app = express();
const PORT = process.env.PORT || 3001;

// Setup data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(__dirname));

//Require routes file
require('./routes/routes')(app);

//serve html
app.get("/", function(req, res) {
    res.json(path.join(__dirname, "public/index.html"));
  });

// Setup listener
app.listen(PORT, function() {
    console.log("Listening on PORT: " + PORT);
});  
