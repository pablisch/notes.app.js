/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const View = require('./noteView');
const Model = require('./noteModel');
let model;
let view;

describe('TodoListView', () => {
  beforeEach(() => {
    model = new Model();
    view = new View(model);
  });

  test('should display a blank list of notes when there are no notes', () => {
    document.body.innerHTML = fs.readFileSync('./index.html');
    expect(document.querySelectorAll('div').length).toBe(1);
    expect(document.querySelectorAll('div.note').length).toBe(0);
    expect(document.querySelectorAll('p').length).toBe(0);
  });

  test('should display a list of notes when notes are added', () => {
    document.body.innerHTML = fs.readFileSync('./index.html');
    model.addNote('Cancel subscription to Netflix');
    model.addNote('Go on holiday');
    view.displayNotes();
    expect(document.querySelectorAll('div').length).toBe(3);
    expect(document.querySelectorAll('div.note').length).toBe(2);
    expect(document.querySelectorAll('p').length).toBe(2);
  });
  
  test('should display a blank list of notes when there are no notes', () => {
    document.body.innerHTML = fs.readFileSync('./index.html');
    model.addNote('Cancel subscription to Netflix');
    model.addNote('Go on holiday');
    model.addNote('Get more sleep');
    model.addNote('Eat cake');
    view.displayNotes();
    expect(document.querySelectorAll('div').length).toBe(5);
    expect(document.querySelectorAll('div.note').length).toBe(4);
    expect(document.querySelectorAll('p').length).toBe(4);
  });
});
