class NoteListController {
	constructor(Notes){
		this.notes = Notes.getNotes().reverse();
	}
}

NoteListController.$inject = ['Notes'];

export {NoteListController}