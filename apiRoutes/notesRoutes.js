const router = require("express").Router();
const { createNewNote } = require("../lib/notes");
const { notes } = require("../data/db");
// const uniqueId = require("uniqueId")

router.get("/notes", (req, res) => {
    let results = notes
    res.json(results)
})

router.post("/notes", (req, res) => {
    //set id randomly
    // req.body.id = uniqueId()
    const note = createNewNote(req.body, notes)
    res.json(note);
})


module.exports = router;