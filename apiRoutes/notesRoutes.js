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

router.delete('/notes/:id', function (req, res) {
  store 
  .removeNote(req.params.id)
  .then(() => res.json({ ok: true}))
  .catch(err => res.status(500).json(err));
});


module.exports = router;