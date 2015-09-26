import template from './noteList.html'
import './noteList.styl'

import {NoteListController as controller} from './noteListController' 


let noteListComponent = () => {
	return {
		restrict: 'E',
		controller,
		template,
		controllerAs: 'vm'
	}
}

export {noteListComponent}