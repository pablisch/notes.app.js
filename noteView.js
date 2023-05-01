// const NoteModel = require('./noteModel');

class NoteView {
  constructor(model) {
    this.model = model;
    this.mainContainerEl = document.querySelector('.main_container');
  }

  displayNotes() {
    const notes = this.model.getNotes();
    notes.forEach(note => {
      const newDivEl = document.createElement('div');
      newDivEl.className = ('note');
      const newParaEl = document.createElement('p');
      newParaEl.textContent = note;
      newDivEl.append(newParaEl);
      const mainDivEl = document.querySelector('.main_container');
      mainDivEl.append(newDivEl);
      // this.mainContainerEl.append(newDivEl);
    })
  }
}

module.exports = NoteView;
