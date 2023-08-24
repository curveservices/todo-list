import { blankProject } from "./blank-project";

//DOM manipulation to display the UI components
export function initialdom () {

    //DOM for adding Todo
    const content = document.querySelector('.content');
    const addButton = document.createElement('div');
    
    const btn = document.createElement('button');
    btn.textContent = '+';
    btn.classList = 'tab';
    btn.setAttribute('id', 'new-todo')

    const heading = document.createElement('h2');
    heading.textContent = 'Add ToDo';

    content.appendChild(addButton);
    addButton.appendChild(btn);
    addButton.appendChild(heading);

    //DOM for the default project load
    const projectsInfoDiv = document.createElement('div');
    projectsInfoDiv.textContent = blankProject().projectTitle;
    content.appendChild(projectsInfoDiv);
};
