import { formatRFC3339 } from "date-fns";
import { blankProject } from "./blank-project";
import { taskCreated } from "./blank-task";

//DOM manipulation to display the UI components
export function initialdom () {

    const taskContainer = document.querySelector('.right-container');
    const projectContainer = document.querySelector('.project-container')
    

     //DOM for todo's loads
    //  const tabTitle = document.createElement('h1');
    //  tabTitle.classList.add ('tab-title');
    //  taskContainer.appendChild(tabTitle);

    // //DOM for adding Todo
    // const taskBtn = document.createElement('div');
    // taskBtn.classList.add ('add-task-btn');
    // taskBtn.innerHTML = '<i class="fa-solid fa-circle-plus"></i> Add Task';
    // taskContainer.appendChild(taskBtn);

    //DOM for the default project load
    const projectTitle = document.createElement('h1')
    projectTitle.textContent = 'Projects';
    const projectBtn = document.createElement('div');
    projectBtn.classList.add ('add-project-btn');
    projectBtn.innerHTML = '<i class="fa-solid fa-circle-plus"></i> Add Project';
    projectContainer.appendChild(projectTitle);
    projectContainer.appendChild(projectBtn);

    const projectsInfoDiv = document.createElement('div');
    projectsInfoDiv.classList.add ("project-list")
    projectsInfoDiv.textContent = blankProject().projectTitle;
    projectContainer.appendChild(projectsInfoDiv);

    //DOM for taskload
    const taskInfoDiv = document.createElement('div');
    taskInfoDiv.classList.add 
    taskInfoDiv.textContent = taskCreated().taskTitle;
    taskContainer.appendChild(taskInfoDiv);
};


 // Dark mode
 const toggle = document.getElementById('toggle-dark');
 const body = document.querySelector('body');
 const header = document.querySelector('header');
 const formCard = document.querySelector('.card')
 const submitBtn = document.querySelector('.submit')

 toggle.addEventListener('click', function() {
     this.classList.toggle('fa-moon');
     if (this.classList.toggle('fa-sun')) {
         body.style.background = 'var(--light-background)';
         body.style.color = 'black';
         body.style.transition = '0.2s';
         header.style.background = 'var(--light-header)';
         header.style.transition = '0.2s';
     } else {
         body.style.background = 'var(--dark-background)';
         body.style.color = 'white';
         body.style.transition = '0.2s';
         header.style.background = 'var(--dark-header)';
         header.style.transition = '0.2s';
         formCard.style.background = 'var(--dark-background)';
         submitBtn.style.background = 'var(--opposite-dark)';
     }
 });
 