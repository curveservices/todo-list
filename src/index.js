 import { displayTask } from './create-todo';
 import { taskCreated } from './blank-task';
 import { blankProject } from './blank-project';
 import { initialdom } from './initial-dom';
 import { formOpenOrClosed } from './popUp';

//call populateTask
blankProject();

//Click event Module
formOpenOrClosed()

//Click event for displaying the form

//Click event to add an item to the check list
// const clearBtn = document.querySelector('.reset');
// clearBtn.addEventListener('click', clearForm);

// })();
//call DOM manipulation module to control UI.
initialdom();

//call createToDo module and apply some objects/properties
// const myToDo = createToDo('shopping run', 'got get shopping', '15/08/2023', 'low','yes');
// const myToDo2 = createToDo('homework', 'do odin project work', '15/08/2023', 'medium', 'yes');
// console.log('show me properies on mtToDo from index.js.....', myToDo)
// console.log('show me properties from myToDo2 from index.js....', myToDo2);