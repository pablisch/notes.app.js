const NotesModel = require('./notesModel');
const NotesView = require('./notesView');
const NotesClient = require('./notesClient');

const client = new NotesClient();
const model = new NotesModel();
// model.addNote('Make a notes app');

const view = new NotesView(model, client);

view.displayNotes();

// console.log(model.getNotes());
