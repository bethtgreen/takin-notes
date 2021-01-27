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
//added this in the place of making two htmls and put both files together 
require('./routes/routes')(app);


// listener
app.listen(PORT, function() {
    console.log("Listening on PORT: " + PORT);
});  

// // delete function
// app.delete(db/db.json, (req, res) => {
//     const noteId = req.params.id;
// });

//     fs.readFile(db/db.json, (err, data) => {
//         if (err) throw err;
//         var notes = JSON.parse(data);
//         var filterNotes = notes.filter(note => note.id != noteId);
//     });

//         fs.writeFile(db/db.json, JSON.stringify(filterNotes, null, 2), err =>{
//             if (err) throw err;
//             res.send();
//         });