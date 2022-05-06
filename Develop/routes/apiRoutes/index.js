// DOCUMENTATION > API ROUTES WITH EXPRESS (https://expressjs.com/en/api.html)
// DOCUMENTATION > UUID (https://www.npmjs.com/package/uuid)
// NOTE > UUID - SYNTAX PULLED DIRECTLY FROM SITE TO SUE WITH COMMONJS
// ROUTES > EXTERNAL ROUTES
const router = require('express').Router();
const { v4: uuidv4} = require('uuid');

//IMPORT > FUNCTIONS REQUIRED FROM LIB/NOTE.JS
const {updateDB, newNote} = require("../../lib/note");
const {note} = require("../../db/db.json")


module.exports = router;