// DOCUMENTATION > API ROUTES WITH EXPRESS (https://expressjs.com/en/api.html)
// DOCUMENTATION > UUID (https://www.npmjs.com/package/uuid)
// NOTE > UUID - SYNTAX PULLED DIRECTLY FROM SITE TO SUE WITH COMMONJS
// ROUTES > EXTERNAL ROUTES
const router = require('express').Router();
const { v4: uuidv4} = require('uuid');

//IMPORT > FUNCTIONS REQUIRED FROM LIB/NOTE.JS
const {updateDB, newNote} = require("../../lib/note");
const {note} = require("../../db/db.json")

// ROUTES > GET ALL
// NOTE > PULLED FROM MODULE 11 SAMPLE FOR GENERAL SYNTAX STRUCTURE
router.get('/note', (req,res) => {
    let results = note;
    res.json(results);
});

// ROUTES > POST WITH UUIDV4 INTEGRATED
router.post('/note', (req,res) => {
    req.body.id = uuidv4();
    const newNote = createNewNote(req.body, note);
    res.json(newNote)
});

// ROUTES > DELETE *BONUS*
router.delete('/note', (req,res) => {
const params = req.params.id
updateDB(params, note);
res.redirect('');
});

module.exports = router;