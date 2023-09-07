import UI from './UI'
import projects from './Projects';
import tasks from './Tasks';

const handlers = (() => {

    // task & projects
    const listenClicks = () => {
        

    
    // popup modal open close
    const newTask = document.querySelector('.add-task-btn');
    const formCard = document.querySelector('.card');
    const taskForm = document.getElementById('form');
    
    const closeButton = document.querySelector('.close');
    const addProject = document.querySelector('.add-project-modal')
    const closeProject = document.querySelector('.button-cancel-project')
    const projectPopup = document.querySelector('.add-project-popup')
    const projectInput = document.querySelector('#input-form')
    let formOpen;

    newTask.addEventListener('click', () => {
        if (formOpen) {
            formCard.style.transform = 'scale(0)';
            taskForm.reset();
            
            formOpen = false;
        } else {
            formCard.style.transform = 'scale(1)';
            
            addProject.style.transform = 'scale(1)';
            formOpen = true;
        }
    });

    closeButton.addEventListener('click', () => {
        if (formOpen) {
            formCard.style.transform = 'scale(0)';
            taskForm.reset();
            
            formOpen =false;
        } else {
            formCard.style.transform = 'scale(1)';
            
            formOpen = true;
        }
    });

    addProject.addEventListener('click', () => {
        if (formOpen) {
            projectPopup.style.transform = 'scale(0)';
            projectInput.reset();
            formOpen = false;
        } else {
            projectPopup.style.transform = 'scale(1)';
            formOpen = true;
        }
    })

    closeProject.addEventListener('click', () => {
        if (formOpen) {
            projectPopup.style.transform = 'scale(0)';
            projectInput.reset();
            formOpen = false;
        } else {
            projectPopup.style.transform = 'scale(1)';
            formOpen = true;
        }
    })
};

//  //form validation
//  const taskTitle = document.getElementById('title');
//  const titleError = document.querySelector('.title-error'); 
//  taskTitle.addEventListener('input', () => {
//      taskTitle.value === '' ? titleError.textContent = '* Please enter a title' : titleError.textContent = '';
//  });

//  const taskNotes = document.getElementById('notes');
//  const notesError = document.querySelector('.notes-error');
//  taskNotes.addEventListener('input', () => {
//      taskNotes.value === '' ? notesError.textContent = '* Please enter a notes' : notesError.textContent = '';
//  });

// // Dark mode
// const toggle = document.getElementById('toggle-dark');
// const body = document.querySelector('body');
// const header = document.querySelector('header');
// const formCard = document.querySelector('.card')
// const submitBtn = document.querySelector('.submit')

// toggle.addEventListener('click', function() {
//     this.classList.toggle('fa-moon');
//     if (this.classList.toggle('fa-sun')) {
//         body.style.background = 'var(--light-background)';
//         body.style.color = 'black';
//         body.style.transition = '0.2s';
//         header.style.background = 'var(--light-header)';
//         header.style.transition = '0.2s';
//     } else {
//         body.style.background = 'var(--dark-background)';
//         body.style.color = 'white';
//         body.style.transition = '0.2s';
//         header.style.background = 'var(--dark-header)';
//         header.style.transition = '0.2s';
//         formCard.style.background = 'var(--dark-background)';
//         submitBtn.style.background = 'var(--opposite-dark)';
//     }

// });


return {
    listenClicks,
}

})();

export default handlers;