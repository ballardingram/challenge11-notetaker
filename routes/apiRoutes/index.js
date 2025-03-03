// DOCUMENTATION > API ROUTES WITH EXPRESS (https://expressjs.com/en/api.html)
// DOCUMENTATION > UUID (https://www.npmjs.com/package/uuid)
// NOTE > UUID - SYNTAX PULLED DIRECTLY FROM SITE TO WORK WITH COMMONJS - USED FOR UNIQUE ID
// ROUTES > EXTERNAL ROUTES
//IMPORT > FUNCTIONS REQUIRED FROM LIB/NOTE.JS
const router = require("express").Router();
const {updateDB, createNewNote} = require("../../lib/notes");
const { v4: uuidv4 } = require('uuid');
const {notes} = require("../../db/db.json");

// ROUTES > GET ALL EXISTING  NOTES
// NOTE > PULLED FROM MODULE 11 SAMPLE FOR GENERAL SYNTAX STRUCTURE
router.get("/notes", (req,res) => {
    let results = notes;
    res.json(results);
});

// ROUTES > POST WITH UUIDV4 INTEGRATED FOR IDS
router.post("/notes", (req,res) => {
    req.body.id = uuidv4();
    const newNote = createNewNote(req.body, notes);
    res.json(newNote);
});

// ROUTES > DELETE *BONUS*
// DOCUMENTATION > DELETE BASED ON ID, REFERENCED CRUD TABLE (https://www.rithmschool.com/courses/node-express-fundamentals/express-router)
router.delete("/notes/:id", (req,res) => {
const params = req.params.id;
updateDB(params, notes);
res.redirect('');
});

module.exports = router;