// DOCUMENTATION > API ROUTES WITH EXPRESS (https://expressjs.com/en/api.html)
// ROUTES > EXTERNAL ROUTES
const path = require("path");
const router = require("express").Router();

// ROUTES > GET FROM INDEX.HTML
router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../../public/index.html"));
});

// ROUTES > GET FROM NOTES.HTML
router.get("/notes", (req,res) => {
    res.sendFile(path.join(__dirname, "../../public/notes.html"));
});

router.get("*", (req,res) => {
    res.sendFile(path.join(__dirname, "../../public/index.html"));
});

module.exports = router;