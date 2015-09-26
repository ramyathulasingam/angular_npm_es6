import angular from 'angular';
import {noteInputComponent} from './noteInputComponent';

let noteInput = angular.module('noteInput', [])
  .directive('noteInput', noteInputComponent);

export {noteInput};