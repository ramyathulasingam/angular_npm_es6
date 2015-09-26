import './app.styl';
import angular from 'angular';
import {noteInput} from './components/noteInput/noteInput';
import {noteList} from './components/noteList/noteList';
import {note} from './components/note/note';
import {common} from './lib/common';

var app = angular.module('app',[
	noteInput.name,
	noteList.name,
	note.name,
	common.name
	])
.directive('myApp', () => {
	return {
		restrict: 'E',
		replace: true,
		template: 
		`<div> 
		   <note-input> </note-input>
		   <note-list> </note-list>
		 </div>`
	}
})