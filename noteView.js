// const NoteModel = require('./noteModel');

class NoteView {
  constructor(model, client) {
    this.buttonEl = document.querySelector('#new-note-button');
    this.model = model;
    this.client = client;
    this.mainContainerEl = document.querySelector('.main_container');

    this.buttonEl.addEventListener('click', () => {
      let newNote = document.querySelector('#new-note-input').value;
      if (newNote.length > 0) {
        this.addNewNote(newNote);
        this.client.getNotesFromDb();
      }
    });
  }

  clearInputField() {
    document.querySelector('#new-note-input').value = ""
  }

  addNewNote(newNote) {
    this.model.addNote(newNote);
    this.clearInputField();
    this.displayNotes();
  }

  clearNotes() {
    const allNotes = document.querySelectorAll('.note');
    allNotes.forEach(note => note.remove());
  }

  displayNotes() {
    this.clearNotes();

    const notes = this.model.getNotes();
    notes.forEach(note => {
      const newDivEl = document.createElement('div');
      newDivEl.className = ('note');
      const newParaEl = document.createElement('p');
      newParaEl.textContent = note;
      newDivEl.append(newParaEl);
      const mainDivEl = document.querySelector('.main_container');
      mainDivEl.append(newDivEl);
    })
  }
}

module.exports = NoteView;
