class NotesModel {
  constructor() {
    this.list = [];
  }

  setNotes(notes) { // takes array response from fetch and passes it into this.list
    this.list = notes;
  }

  getNotes() {
    return this.list;
  }

  addNote(todo) {
    this.list.push(todo);
  }

  reset() {
    this.list = [];
  }
}

module.exports = NotesModel;
