const NoteModel = require("./noteModel");
const NoteView = require("./noteView");
const NoteClient = require("./noteClient");

const client = new NoteClient();
const model = new NoteModel();
// model.addNote('Make a notes app');

const view = new NoteView(model, client);

view.displayNotes();

// console.log(model.getNotes());