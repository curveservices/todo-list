//popup modal
export const formOpenOrClosed = () => {
    const newTask = document.querySelector('.add-task-btn');
    const formCard = document.querySelector('.card');
    const taskForm = document.querySelector('#form');
    const overLay = document.querySelector('.over-lay');
    const closeButton = document.querySelector('.close');
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
};

//form validation
const taskTitle = document.getElementById('title');
const titleError = document.querySelector('.title-error'); 
taskTitle.addEventListener('input', () => {
    taskTitle.value === '' ? titleError.textContent = '* Please enter a title' : titleError.textContent = '';
});

const taskDescription = document.getElementById('description');
const descriptionError = document.querySelector('.description-error');
taskDescription.addEventListener('input', () => {
    taskDescription.value === '' ? descriptionError.textContent = '* Please enter a description' : descriptionError.textContent = '';
});

const priority = document.getElementById('priority');
const priorityError = document.querySelector('.priority-error');
priority.addEventListener('input', () => {
    priority.value === '' ? priorityError.textContent = '* Please select a priority' : priorityError.textContent= '';
})


