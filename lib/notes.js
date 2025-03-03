// EXTERNAL > REQUIRED; FS AND PATH DO NOT REQUIRE INSTALL
const fs = require('fs');
const path = require('path');

// FUNCTION > UPDATE DATABASE AND NOTES
// DOCUMENTATION > UPDATE DATABSE AND FUNCTIONS (https://www.geeksforgeeks.org/how-to-update-a-record-in-your-local-custom-database-in-node-js/)
// DOCUMENTATION > FOR LOOP, 'LET' SECTION, (https://www.w3schools.com/js/js_loop_for.asp)
function updateDB(id, notesArray) {
    const deletedNote = id;
    for(let i = 0; i < notesArray.length; i++) {
        if(deletedNote === notesArray[i].id) {
            notesArray.splice(i,1);
            fs.writeFileSync(
                path.join(__dirname, "../db/db.json"),
                JSON.stringify({notes: notesArray}, null, 2), err => {
                if (err) {
                    throw err;
                }
            });
        }
    }
}

// FUNCTION > NEW NOTE SYNTAX
function createNewNote (body, notesArray) {
    const newNote = body
    notesArray.push(newNote);
    fs.writeFileSync(
        path.join(__dirname, "../db/db.json"),
        JSON.stringify({notes: notesArray}, null, 2)
    );
    return newNote;
};

// DOCUMENTATION > MULTIPLE FUNCTIONS EXPORTED, i forgot how, USED IMAGE ABOVE 'SUMMARY' (https://atomizedobjects.com/blog/javascript/how-to-export-multiple-functions-in-javascript/)
module.exports = {updateDB, createNewNote};