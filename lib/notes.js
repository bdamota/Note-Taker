const fs = require("fs");
const path = require("path");

function createNewNote (body, notesArray) {
  const note = body;
  notesArray.push(note);
  fs.writeFileSync(
    path.join(__dirname, '../data/db.json'),
    JSON.stringify({ notes: notesArray }, null, 2)
  );
  return note;
}

function findById(id, notesArray) {
  const result = notesArray.filter(note => note.id === id)[0];
  return result;
}

function removeNote(id) {
  return this.getNotes()
  .then(notes => notes.filter(note => note.id !== id))
  .then(filteredNotes => this.write(filteredNotes))
}

  module.exports = {
   createNewNote,
   findById,
   removeNote
  };