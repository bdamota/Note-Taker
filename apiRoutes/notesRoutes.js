const router = require("express").Router();
const { createNewNote } = require("../lib/notes");
const { notes } = require("../data/db");
const uniqid = require("uniqid")

router.get("/notes", (req, res) => {
    let results = notes
    res.json(results)
})


router.post("/notes", (req, res) => {
    //set id 
    req.body.id = uniqid()
    const note = createNewNote(req.body, notes)
    res.json(note);
})

router.delete("/notes/:id", (req, res) => {
    const idDeleted = req.params.id.toString();

    for (let i = 0; i < notes.length; i++) {
        if (notes[i].id === idDeleted) {
            notes.splice(i, 1)
        } 
    } 

    res.json(notes)
});


module.exports = router;