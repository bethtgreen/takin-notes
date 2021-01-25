var fs = require('fs');
var path = require('path');

module.exports = app => {

    // this will be the notes variable
    fs.readFile("db/db.json","utf8", (err, data) => {
        // throw err
         if (err) throw err;
        var notes = JSON.parse(data);
        //console log the data 
        console.log(data);

        // api route to get the data
        app.get("/api/notes", function(req, res) {
        
            res.json(notes);
        });

        // notes route
        app.post("/api/notes", function(req, res) {
            // this will take the note you typed, and send it to the db.json
            let takeNote = req.body;
            notes.push(takeNote);
            updateDb();
            return console.log("Yay! You have a new note! It says:  "+ takeNote.title);
        });

        //his uses the id assigned to each note to help bring back the note
        app.get("/api/notes/:id", function(req,res) {
            // json
            res.json(notes[req.params.id]);
        });

     //this will help delete the notes you made already
        app.delete("/api/notes/:id", function(req, res) {
            notes.splice(req.params.id, 1);
            updateDb();
            console.log("Note has been deleted. Id:  "+ req.params.id);
        });


       //notes and index function to sendFile
        app.get('/notes', function(req,res) {
            res.sendFile(path.join(__dirname, "../public/notes.html"));
        });
        app.get('*', function(req,res) {
            res.sendFile(path.join(__dirname, "../public/index.html"));
        });

        //updateDb to whatever has been deleted or added
        function updateDb() {
            fs.writeFile("db/db.json",JSON.stringify(notes,'\t'),err => {
                if (err) throw err;
                return true;
            });
        }

    });

}