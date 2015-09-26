const defaultContent = 'nothing';

class NoteInputController {
  // inject things here
  constructor(Notes) {
  	this.notes = Notes;
    this.newNote = '';
  }

  createNote(content = defaultContent) {
    // will use this later
    this.notes.addNote(content);
    this.newNote = '';
  }
}

NoteInputController.$inject = ['Notes'];

export {NoteInputController};
