const NoteModel = require("./noteModel");
const NoteView = require("./noteView");

const model = new NoteModel();
model.addNote('Make a notes app');

const view = new NoteView(model);

view.displayNotes();

console.log(model.getNotes());