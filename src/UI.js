import { format } from 'date-fns';
import  Project  from './Projects';
import Tasks from './Tasks';
import Storage from './Storage';
import TodoList from './TodoList';

// Load on index.js
export const pageLoad = () => {
    loadContent()
    formOpenOrClosed()
};

//DOM manipulation to display the UI components
export const loadContent = (taskName) => {
    const rightContainer = document.querySelector('.right-container')
    const projectContainer = document.querySelector('.project-container')
    rightContainer.innerHTML =`
        <h1 class="task-title">Inbox</h1>
    <div class="add-task-btn"><i class="fa-solid fa-circle-plus"></i>Add Task</div>
    <div class='task-display'></div>

    <!-- pop up modal  -->
    <section class="popup">
        <div class="card">
            <div class="head"><h1>Add new Task</h1>
            <div class="close"><i class="fa-solid fa-circle-xmark"></i></div>
            </div>
            <form id="form" action="#" method="get">
                <label for="title">Title: </label>
                <input type="text" id="title" name="title" placeholder="Task Title..." autocomplete="off" required/>
                <span class="title-error"></span>
                <br>
                <label for="notes">Notes: </label>
                <textarea rows="6" type="text" id="notes" name="notes" placeholder="Enter notes..." autocomplete="off" required></textarea>
                <span class="notes-error"></span>
                <br>
                <label for="dueDate">Due Date: </label>
                <input type="date" id="dueDate" name="pages" autocomplete="off" required>
                <span class="dueDate-error"></span>
                <br>
                <label for="priority" name="priority">Priority:</label>
                <select name="priority" id="priority">
                    <option type="ra" value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                    <span class="priority-error"></span>
                </select>
                <!-- <label for="checklist">checklist items added (if any):</label>
                <ul class="todo-ul"></ul> -->
                <br>
                <input class="submit" type="submit" value="submit">
            </form>
    </section>`
    
projectContainer.innerHTML = `
    <h1 class="project-title">Projects</h1> 
    <div class="project-list tab" id="project-list">
        <div class='project'><i class="fa-regular fa-rectangle-list"></i>
        create todo list</div>
        <i class="fa-solid fa-circle-xmark"></i>   
    </div> 
    <button class="button-add-project tab" id="button-add-project">
        <i class="fa-solid fa-circle-plus" aria-hidden="true"></i>
        Add Project 
    </button>
    <div class="add-project-popup" id="add-project-popup">
        <form id="input-form" action="#" method="get">
            <input type="text" class="input-project-popup" id="input-project-popup">
            <button class="button-add-project" id="button-add-project"> Add </button>
            <button class="button-cancel-project" id="button-cancel-project"> Cancel</button>
        </form>
    </div>`
};


//popup modal open close
export const formOpenOrClosed = () => {
    const newTask = document.querySelector('.add-task-btn');
    const formCard = document.querySelector('.card');
    const taskForm = document.querySelector('#form');
    const overLay = document.querySelector('.over-lay');
    const closeButton = document.querySelector('.close');
    const addProject = document.querySelector('.button-add-project')
    const closeProject = document.querySelector('.button-cancel-project')
    const projectPopup = document.querySelector('.add-project-popup')
    const projectInput = document.querySelector('#input-form')
    let formOpen;

    newTask.addEventListener('click', () => {
        if (formOpen) {
            formCard.style.transform = 'scale(0)';
            taskForm.reset();
            overLay.style.opacity = 0;
            formOpen = false;
        } else {
            formCard.style.transform = 'scale(1)';
            overLay.style.opacity = 1;
            addProject.style.transform = 'scale(1)';
            formOpen = true;
        }
    });

    closeButton.addEventListener('click', () => {
        if (formOpen) {
            formCard.style.transform = 'scale(0)';
            taskForm.reset();
            overLay.style.opacity = 0;
            formOpen =false;
        } else {
            formCard.style.transform = 'scale(1)';
            overLay.style.opacity = 1;
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

    //form validation
    const taskTitle = document.getElementById('title');
    const titleError = document.querySelector('.title-error'); 
    taskTitle.addEventListener('input', () => {
        taskTitle.value === '' ? titleError.textContent = '* Please enter a title' : titleError.textContent = '';
    });

    const taskNotes = document.getElementById('notes');
    const notesError = document.querySelector('.notes-error');
    taskNotes.addEventListener('input', () => {
        taskNotes.value === '' ? notesError.textContent = '* Please enter a notes' : notesError.textContent = '';
    });
}



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

 export const displayTasks = () => {

 }

 