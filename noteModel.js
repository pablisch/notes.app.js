class NoteModel {
  constructor() {
    this.list = []
  }

  getNotes() {
    return this.list
  }

  addNote(todo) {
    this.list.push(todo)
  }

  reset() {
    this.list = []
  }
}

module.exports = NoteModel;