import './note.styl';
import template from './note.html'
import {NoteController as controller} from './noteController'

let noteComponent = () => {
	return {
		restrict: 'E',
		controller,
		template,
		replace: true,
		controllerAs: 'vm',
		scope: {noteData: "="},
		bindToController: true
	}
}

export {noteComponent}