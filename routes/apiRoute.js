//dependencies
const fs = require("fs");
const path = require("path");
// write instruction to tell what to export in this case its app
module.exports = (app) => {
  // this is where the notes var will be
  fs.readFile("db/db.json", "utf8", (err, data) => {
    //throw err
    if (err) throw err;
    var notes = JSON.parse(data);
    // api to get route (notes)
    app.get("/api/notes", function (req, res) {
      //json file should be read here and it will bring back saved notes
      res.JSON(notes);
    });
    // this should ** post the notes
    app.post("/api/notes", function(req, res){
        let takeNote = req.body;
        //take new notes
        notes.push(takeNote);
        //update the database
        newDb();
        return console.log("A new note has been added! It says: " + takeNote.title);
    })
  });
};
