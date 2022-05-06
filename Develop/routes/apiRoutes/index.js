// DOCUMENTATION > API ROUTES WITH EXPRESS (https://expressjs.com/en/api.html)
// DOCUMENTATION > UUID (https://www.npmjs.com/package/uuid)
// NOTE > UUID - SYNTAX PULLED DIRECTLY FROM SITE TO WORK WITH COMMONJS - USED FOR UNIQUE ID
// ROUTES > EXTERNAL ROUTES
//IMPORT > FUNCTIONS REQUIRED FROM LIB/NOTE.JS
const router = require("express").Router();
const { v4: uuidv4 } = require('uuid');
const notes = require("../../db/db.json");

// ROUTES > GET ALL
// NOTE > PULLED FROM MODULE 11 SAMPLE FOR GENERAL SYNTAX STRUCTURE
router.get("/notes", (req,res) => {
    res.json(notes);
});

// ROUTES > POST WITH UUIDV4 INTEGRATED
router.post("/notes", (req,res) => {
    req.body.id = uuidv4();
    notes.push(req.body);
    res.json(notes);
});

// ROUTES > DELETE *BONUS*
// DOCUMENTATION > DELETE BASED ON ID, REFERENCED CRUD TABLE (https://www.rithmschool.com/courses/node-express-fundamentals/express-router)
router.delete("/notes/:id", (req,res) => {
const {id} = req.params;
const appIndex = notes.findIndex((p) => p.id ==id);
res.json(notes);
});

module.exports = router;