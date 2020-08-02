const router = require("express").Router();
const { createNewNote } = require("../lib/notes");
const { notes } = require("../data/db");
const uniqid = require("uniqid")

router.get("/notes", (req, res) => {
    let results = notes
    res.json(results)
})

router.get('/notes/:id', (req, res) => {
    const result = findById(req.params.id, notes);
    if (result) {
      res.json(result);
    } else {
      res.send(404);
    }
  });

router.post("/notes", (req, res) => {
    //set id 
    req.body.id = uniqid()
    const note = createNewNote(req.body, notes)
    res.json(note);
})


module.exports = router;