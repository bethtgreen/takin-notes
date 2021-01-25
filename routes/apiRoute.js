//dependencies
const fs = require('fs');
const path = require('path');
// write instruction to tell what to export in this case its app
module.exports = app => {
    // this is where the notes var will be 
    fs.readFile("db/db.json", "utf8", (err,data)=> {

        //throw err
        if (err) throw (err);
        var notes = JSON.parse(data);
    })









}