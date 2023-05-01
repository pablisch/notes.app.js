const NoteModel = require('./noteModel');

let model;

describe('NoteModel', () => {
  beforeEach(() => {
    model = new NoteModel();
  });

  test('should return an empty list of notes on my todo list', () => {
    expect(model.getNotes()).toEqual([]);
  });

  test('should return a list of notes on my todo list after an note has been added', () => {
    model.addNote('Cancel subscription to Netflix');
    expect(model.getNotes()).toEqual(['Cancel subscription to Netflix']);
  });

  test('should return a list of notes on my todo list after notes have been added', () => {
    model.addNote('Cancel subscription to Netflix');
    model.addNote('Go on holiday');
    expect(model.getNotes()).toEqual([
      'Cancel subscription to Netflix',
      'Go on holiday',
    ]);
  });

  test('should return an empty list of notes after reset', () => {
    model.addNote('Cancel subscription to Netflix');
    model.addNote('Go on holiday');
    expect(model.getNotes()).toEqual([
      'Cancel subscription to Netflix',
      'Go on holiday',
    ]);
    model.reset();
    expect(model.getNotes()).toEqual([]);
  });
});
