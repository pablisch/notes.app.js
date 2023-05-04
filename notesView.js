// const NotesModel = require('./notesModel');

class NotesView {
  constructor(model, client) {
    this.buttonEl = document.querySelector('#new-note-button');
    this.testButtonEl = document.querySelector('#test-button');
    this.model = model;
    this.client = client;
    this.mainContainerEl = document.querySelector('.main_container');

    this.buttonEl.addEventListener('click', () => {
      let newNote = document.querySelector('#new-note-input').value;
      if (newNote.length > 0) {
        this.addNewNote(newNote);
      }
    });

    this.testButtonEl.addEventListener('click', () => {
      this.displayNotesFromApi();
    });
  }

  displayNotesFromApi() { // new function for notes from fetch API
    this.client.loadData((notes) => { // error handling to pass in 2nd parameter ?????
      console.log(notes);
      this.model.setNotes(notes);
      this.displayNotes()
      return "hello"
    });
  }

  displayError() {
    console.log("hello")
  }

  clearInputField() {
    document.querySelector('#new-note-input').value = '';
  }

  addNewNote(newNote) {
    this.client.createNote({ content: newNote });
    this.model.addNote(newNote);
    this.clearInputField();
    this.displayNotes();
  }

  clearNotes() {
    const allNotes = document.querySelectorAll('.note');
    allNotes.forEach((note) => note.remove());
  }

  displayNotes() {
    this.clearNotes(); // clears current display of notes prior to reload

    const notes = this.model.getNotes(); // get stored notes
    notes.forEach((note) => {
      // console.log(note)
      const newDivEl = document.createElement('div'); // name div
      newDivEl.className = 'note'; // give div .note
      const newParaEl = document.createElement('p'); // name new paragraph El
      newParaEl.textContent = note; // make p text = each iterated 'note'
      newDivEl.append(newParaEl); // add each new para to each new div
      const mainDivEl = document.querySelector('.main_container'); // name main container div
      mainDivEl.append(newDivEl); // add each new div to the main container
    });
  }
}

module.exports = NotesView;
