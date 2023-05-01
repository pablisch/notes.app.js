const NoteModel = require("./noteModel");
const NoteView = require("./noteView");

const model = new NoteModel();
model.addNote('An example note');

const view = new NoteView(model);

view.displayNotes();

console.log(model.getNotes());