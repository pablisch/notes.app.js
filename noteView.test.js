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
    document.body.innerHTML = fs.readFileSync('./index.html');
    model = new Model();
    view = new View(model);
  });

  test('should display a blank list of notes when there are no notes', () => {
    expect(document.querySelectorAll('div').length).toBe(1);
    expect(document.querySelectorAll('div.note').length).toBe(0);
    expect(document.querySelectorAll('p').length).toBe(0);
  });

  test('should display a list of notes when notes are added', () => {
    model.addNote('Cancel subscription to Netflix');
    model.addNote('Go on holiday');
    view.displayNotes();

    expect(document.querySelectorAll('div').length).toBe(3);
    expect(document.querySelectorAll('div.note').length).toBe(2);
    expect(document.querySelectorAll('p').length).toBe(2);
  });
  
  test('should display a blank list of notes when there are no notes', () => {
    model.addNote('Cancel subscription to Netflix');
    model.addNote('Go on holiday');
    model.addNote('Get more sleep');
    model.addNote('Eat cake');
    view.displayNotes();

    expect(document.querySelectorAll('div').length).toBe(5);
    expect(document.querySelectorAll('div.note').length).toBe(4);
    expect(document.querySelectorAll('p').length).toBe(4);
  });
  
  test('should create a new note when the button is clicked', () => {
    const inputEl = document.querySelector('#new-note-input');
    inputEl.value = "This is a new note test";
    
    const buttonEl = document.querySelector('#new-note-button');
    buttonEl.click();

    expect(document.querySelectorAll('div').length).toBe(2);
    expect(document.querySelectorAll('div.note').length).toBe(1);
    expect(document.querySelectorAll('p')[0].textContent).toEqual("This is a new note test");
  });
  
  test('should create a single new note when the button is clicked multiple times', () => {
    const inputEl = document.querySelector('#new-note-input');
    inputEl.value = "This is a new note test";
    
    const buttonEl = document.querySelector('#new-note-button');
    buttonEl.click();
    buttonEl.click();
    buttonEl.click();

    expect(document.querySelectorAll('div').length).toBe(2);
    expect(document.querySelectorAll('div.note').length).toBe(1);
    expect(document.querySelectorAll('p')[0].textContent).toEqual("This is a new note test");
  });
  
  test('should create multiple new notes but only one per input', () => {
    const inputEl = document.querySelector('#new-note-input');
    inputEl.value = "This is a new note test";
    
    const buttonEl = document.querySelector('#new-note-button');
    buttonEl.click();
    buttonEl.click();

    inputEl.value = "This is another new note test";
    
    buttonEl.click();
    buttonEl.click();

    expect(document.querySelectorAll('div').length).toBe(3);
    expect(document.querySelectorAll('div.note').length).toBe(2);
    expect(document.querySelectorAll('p')[1].textContent).toEqual("This is another new note test");
  });
});
