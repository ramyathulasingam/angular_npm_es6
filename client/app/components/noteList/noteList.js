import angular from 'angular';
import {noteListComponent} from './noteListComponent'

let noteList = angular.module('noteList', [])
.directive('noteList', noteListComponent);

export {noteList}

