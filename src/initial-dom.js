import { blankProject } from "./blank-project";

//DOM manipulation to display the UI components
export function initialdom () {

    //DOM for adding Todo

    // Dark mode
    const content = document.querySelector('.content');
    
    const toggle = document.getElementById('toggle-dark');
    const taskBtn = document.getElementById('toggle-dark');
    const body = document.querySelector('body');
    const header = document.querySelector('header');

    toggle.addEventListener('click', function() {
        this.classList.toggle('bi-moon');
        if (this.classList.toggle('bi-brightness-high-fill')) {
            body.style.background = '#ffffff';
            body.style.color = 'black';
            body.style.transition = '0.1s';
        } else {
            body.style.background = '#344a67';
            body.style.color = 'white';
            body.style.transition = '0.1s';
        }
    });

    //DOM for the default project load
    const projectsInfoDiv = document.createElement('div');
    projectsInfoDiv.textContent = blankProject().projectTitle;
    content.appendChild(projectsInfoDiv);
};
