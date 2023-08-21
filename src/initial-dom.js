import { blankProject } from "./blank-project";

//DOM manipulation to display the UI components
export function initialdom () {

    //DOM for Heading
    const content = document.querySelector('.content');
    const heading = document.createElement('h1');
    heading.textContent = 'To-Do WebApp';
    content.appendChild(heading);

    //DOM for the default project load
    const projectsInfoDiv = document.createElement('div');
    projectsInfoDiv.textContent = blankProject().projectTitle;
    content.appendChild(projectsInfoDiv);
};
