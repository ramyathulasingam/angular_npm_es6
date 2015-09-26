import template from './noteInput.html'
import './noteInput.styl'
import {NoteInputController as controller} from './noteInputController';

let noteInputComponent = ()=> {
	return {
		    controllerAs: 'vm',
    		restrict: 'E',
    		controller,
    		replace: true,
    		scope: {},
    		template	
    	};
};
export {noteInputComponent};