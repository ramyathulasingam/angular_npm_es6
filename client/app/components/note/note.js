import angular from 'angular';
import {noteComponent} from './noteComponent';

let note = angular.module('note', [])
.directive('note', noteComponent)

export {note};