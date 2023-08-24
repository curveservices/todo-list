 import { createToDo } from './create-todo';
 import { blankProject } from './blank-project';
 import { initialdom } from './initial-dom';

 //call blankProject
 blankProject();

 //call DOM manipulation module to control UI.
 initialdom();

//call createToDo module and apply some objects/properties
const myToDo = createToDo('shopping run', 'got get shopping', '15/08/2023', 'low','yes');
const myToDo2 = createToDo('homework', 'do odin project work', '15/08/2023', 'medium', 'yes');
console.log('show me properies on mtToDo from index.js.....', myToDo)
console.log('show me properties from myToDo2 from index.js....', myToDo2);