import { format, parseISO, differenceInDays } from 'date-fns';
import  projects  from './Projects';

const UI = (() => {
    const body = document.querySelector('body');
    const sidebar = document.querySelector('.sidebar');
    const main = document.querySelector('main');
    const projectsList = document.querySelector('.sidebar-projects-list');
    const taskList = document.querySelector('.todo-item-list');
    const projectModal = document.querySelector('#project-modal');
    const taskModal = document.querySelector('#task-modal');
    const confirmModal = document.querySelector('#confirm-modal');
    const modals = document.querySelectorAll('.modal');
    const projectForm = document.querySelector('#project-form');
    const taskForm = document.querySelector('#task-form');
    const formProjectTitleError = document.querySelector('.project-title-error');
    const formTaskTitleError = document.querySelector('.task-title-error');
    const formTaskProjectError = document.querySelector('.task-project-error');

    function responsiveSidebar() {
        if (window.innerWidth <= 900) {
            sidebar.classList.remove('sidebar-show');
            sidebar.classList.add('sidebar-hide');
            main.classList.add('main-mobile');
        } else {
            sidebar.classList.remove('sidebar-hide')
            sidebar.classList.add('sidebar-show');
            main.classList.remove('main-mobile', 'main-blur');
        }
    };

    function toggleSidebar() {
        if (!sidebar.classList.contains('sidebar-show')) {
          sidebar.classList.remove('sidebar-hide');
          sidebar.classList.add('sidebar-show');
          main.classList.add('main-blur');
        } else if (sidebar.classList.contains('sidebar-show')) {
          sidebar.classList.remove('sidebar-show');
          sidebar.classList.add('sidebar-hide');
          main.classList.remove('main-blur');
        }
    };

    function displayProjectModal(modal, index = false) {
        const modalHeading = document.querySelector('.project-modal-title');
        const modalSubmit = document.querySelector('#project-button');

        projectForm.reset();
        UI.hideElement(UI.formProjectTitleError);

        projectModal.classList.remove('hide');
        projectModal.classList.add('display');

        if (modal === 'addProject') {
            modalHeading.textContent = 'New Project';
            modalSubmit.textContent = 'Add'
            modalSubmit.classList.remove('edit-project');
            modalSubmit.classList.add('add-project');
        } else if (modal === 'editProject') {
            const currentProjectTitle = projects.projectsList[index].title;
            const projectTitle = document.querySelector('#form-project-title')
            projectTitle.value = currentProjectTitle;
            modalHeading.textContent = 'Edit Project';
            modalSubmit.textContent = 'Edit';
            modalSubmit.classList.remove('add-project');
            modalSubmit.classList.add('edit-project');
        }
    };

    function displayTaskModal(modal, projectIndex, taskIndex = false) {
        const modalHeading = document.querySelector('.task-modal-title');
        const selectProject = document.querySelector('#select-project');
        const modalSubmit = document.querySelector('#task-button');

        taskForm.reset();
        UI.hideElement(UI.formTaskTitleError);
        UI.hideElement(UI.formProjectTitleError);

        taskModal.classList.remove('hide');
        taskModal.classList.add('display');

        if (modal === 'addTask') {
            modalHeading.textContent = 'New Task';

            selectProject.innerText = '';
            if (Number.isNaN(projectIndex)) {
                const label = document.createElement('label');
                label.id = 'form-label';
                label.innerText = 'Project: ';
                label.setAttribute('for', 'form-task-project');
                selectProject.appendChild(label);

                const select = document.createElement('select');
                select.id = 'form-task-project';
                select.setAttribute('name', 'task-project');
                selectProject.appendChild(select);

                const option = document.createElement('option');
                option.setAttribute('value', '');
                option.selected = true;
                option.disabled = true;
                option.innerText = 'Select project';

                select.appendChild(option);
                for (let i = 0; i < projects.projectsList.length; i += 1) {
                    const newOption = document.createElement('option');
                    newOption.setAttribute('value', i);
                    newOption.innerText = projects.projectsList[i].title;
                    select.appendChild(newOption);
                }
            }

            modalSubmit.textContent = 'Add';
            modalSubmit.classList.remove('edit-task');
            modalSubmit.classList.add('add-task');
        } else if (modal === 'editTask') {
            const currentTaskTitle = 
                projects.projectsList[projectIndex].tasks[taskIndex].title;
            const currentTaskPriority = 
                projects.projectsList[projectIndex].tasks[taskIndex].priority;
            const cuurrentTaskSchedule = 
                projects.projectsList[projectIndex].tasks[taskIndex].schedule;

            const taskTitle = document.querySelector('#form-task-title');
            const taskPriority = document.querySelector('#form-task-priority');
            const taskSchedule = document.querySelector('#form-task-schedule');

            modalHeading.textContent = 'Edit task';

            taskTitle.value = currentTaskTitle;
            taskPriority.value = currentTaskPriority;
            taskSchedule.value = cuurrentTaskSchedule;

            selectProject.innerText = '';
            const label = document.createElement('label');
            label.id = 'form-label';
            label.innerText = 'Project'
            label.setAttribute('for', 'form-task-project');
            selectProject.appendChild(label);

            const select = document.createElement('select');
            select.id = 'form-task-project';
            select.disabled = true;
            selectProject.appendChild(select);

            const option = document.createElement('option');
            option.setAttribute('value', '');
            option.selected = true;
            option.innerText = projects.projectsList[projectIndex].title;

            select.appendChild(option);

            modalSubmit.textContent = 'Edit';
            modalSubmit.classList.remove('add-task');
            modalSubmit.classList.add('edit-task');
        };
    };

    function displayConfirmModal(modal, projectIndex, taskIndex) {
        const modalHeading = document.querySelector('.confirm-modal-title');
        const modalContent = document.querySelector('.confirm-modal-content');
        const modalSubmit = document.querySelector('#confirm-button');
        const modalContentPrefix = document.createTextNode(
            'You going to remove '
        );
        const modalContentPostfix = document.createTextNode(
            '. This action cannot be undone.'
        );
        const title = document.createElement('span');

        confirmModal.classList.remove('hide');
        confirmModal.classList.add('display');

        title.classList.add('confirm-modal-title');

        modalContent.textContent = '';

        if (modal === 'removeProject') {
            modalHeading.textContent = 'Remove project';
            title.textContent = projects.projectsList[projectIndex].title;
            modalContent.appendChild(modalContentPrefix);
            modalContent.appendChild(title);
            modalContent.appendChild(modalContentPostfix);
            modalSubmit.classList.remove('remove-task');
            modalSubmit.classList.add('remove-project');
        } else if (modal === 'removeTask') {
            modalHeading.textContent = 'Remove task';
            title.textContent =
                projects.projectsList[projectIndex].tasks[taskIndex].title;
            modalContent.appendChild(modalContentPrefix);
            modalContent.appendChild(title);
            modalContent.appendChild(modalContentPostfix);
            modalSubmit.classList.remove('remove-project');
            modalSubmit.classList.add('remove-task');
        }
    };

    function showElement(element) {
        element.classList.remove('hide');
        element.classList.add('display');
    };

    function hideElement(modal) {
        if (Object.prototype.isPrototypeOf.call(NodeList.prototype, modal)) {
            modal.forEach((element) => {
                element.classList.remove('display');
                element.classList.add('hide');
            })
        } else {
            modal.classList.remove('display');
            modal.classList.add('hide');
        }
    }

    function renderProjects() {
        //create link
        projectsList.textContent = '';
        for (let i = 0; i < projects.projectsList.length; i += 1) {
            const projectLink = document.createElement('a');
            projectLink.classList.add('sidebar-project');
            projectLink.setAttribute('href', '#');
            projectLink.setAttribute('data-index', i);
            projectsList.appendChild(projectLink)
            //title
            const projectTitle = document.createElement('p');
            projectTitle.classList.add('sidebar-project');
            projectTitle.innerText = projects.projectsList[i].title;
            projectLink.appendChild(projectTitle)
            //trash icon
            const projectRemoveIcon = document.createElement('i');
            projectRemoveIcon.classList.add('fa-solid', 'fa-trash', 'remove-project-modal');
            projectLink.appendChild(projectRemoveIcon)
            // edit icon
            const projectEditIcon = document.createElement('i');
            projectEditIcon.classList.add('fa-solid', 'fa-pen-to-square', 'edit-project-modal');
            projectLink.appendChild(projectEditIcon)
        }
    };

    function selectLink(projectIndex) {
        const allLinks = document.querySelectorAll(
          'a.sidebar-project, a.sidebar-link'
        );
        const inboxLink = document.querySelector('.link-inbox');
        const todayLink = document.querySelector('.link-today');
        const weekLink = document.querySelector('.link-week');
        const importantLink = document.querySelector('.link-important');
        const completedLink = document.querySelector('.link-completed');
        const projectLinks = document.querySelectorAll('a.sidebar-project');
        allLinks.forEach((elem) => {
          elem.classList.remove('active');
        });
        if (typeof projectIndex === 'number') {
          projectLinks[projectIndex].classList.add('active');
        } else if (projectIndex === 'inbox') {
          inboxLink.classList.add('active');
        } else if (projectIndex === 'today') {
          todayLink.classList.add('active');
        } else if (projectIndex === 'week') {
          weekLink.classList.add('active');
        } else if (projectIndex === 'important') {
          importantLink.classList.add('active');
        } else if (projectIndex === 'completed') {
          completedLink.classList.add('active');
        }
      }

    function renderHeader(projectIndex) {
        const headerTitle = document.querySelector('.todo-header-title');

        if (typeof projectIndex === 'number') {
            headerTitle.textContent = projects.projectsList[projectIndex].title;
            document.title = `${projects.projectsList[projectIndex].title} - ToDo`;
        } else {
            headerTitle.textContent = 
                projectIndex[0].toUpperCase() + projectIndex.substring(1);
            document.title = `
                ${projectIndex[0].toUpperCase() + projectIndex.substring(1)} - ToDo`;
        }
    }
    
    function renderTasks(projectIndex) {
        let indexStart;
        let indexEnd;
        const currDate = format(new Date(), 'yyyy-MM-dd');

        taskList.textContent = '';
        if (projects.projectsList.length >= 1) {
            if (typeof projectIndex === 'number') {
                indexStart = projectIndex;
                indexEnd = projectIndex + 1;
            } else {
                indexStart = 0;
                indexEnd = projects.projectsList.length;
            }
            for (let j = indexStart; j < indexEnd; j += 1) {
                for (let i = 0; i < projects.projectsList[j].tasks.length; i +=1) {
                    if (
                        projectIndex === 'today' &&
                        projects.projectsList[j].tasks[i].schedule !== currDate
                    ) {
                        continue;
                    } else if (
                        projectIndex === 'week' &&
                        !(
                          differenceInDays(
                            parseISO(projects.projectsList[j].tasks[i].schedule),
                            parseISO(currDate)
                          ) >= 0 &&
                          differenceInDays(
                            parseISO(projects.projectsList[j].tasks[i].schedule),
                            parseISO(currDate)
                          ) <= 7
                        )
                      ) {
                        continue;    
                    } else if (
                        projectIndex === 'important' &&
                        projects.projectsList[j].tasks[i].priority !== 'high'
                    ) {
                        continue;
                    } else if (
                        projectIndex === 'completed' &&
                        projects.projectsList[j].tasks[i].done !== true
                    ) {
                        continue;
                    }
                    const todoItem = document.createElement('div');
                    todoItem.classList.add('todo-item', 'toggle-task');
                    todoItem.setAttribute('data-project-index', j);
                    todoItem.setAttribute('data-task-index', i);
                    taskList.appendChild(todoItem);
                    //icon
                    const taskIcon = document.createElement('i');
                    taskIcon.classList.add('fa-solid', 'toggle-task');
                    if (projects.projectsList[j].tasks[i].priority === 'low') {
                        taskIcon.classList.add('project-green');
                    } else if (projects.projectsList[j].tasks[i].priority === 'medium') {
                        taskIcon.classList.add('project-yellow');
                    } else if (projects.projectsList[j].tasks[i].priority === 'high') {
                        taskIcon.classList.add('project-red');
                    } else {
                        taskIcon.classList.add('project-blue')
                    }
                    todoItem.appendChild(taskIcon);
                    //title
                    const taskTitle = document.createElement('p');
                    taskTitle.classList.add('todo-item-title', 'toggle-task');
                    taskTitle.textContent = projects.projectsList[j].tasks[i].title;
                    if (projects.projectsList[j].tasks[i].done === true) {
                        taskIcon.classList.add('fa-solid', 'fa-circle-check');
                        taskTitle.classList.add('done');
                    } else {
                        taskIcon.classList.add('fa-regular', 'fa-circle')
                        taskTitle.classList.remove('done');
                    }
                    todoItem.appendChild(taskTitle);
                    //date
                    if (projects.projectsList[j].tasks[i].schedule !== '') {
                        const taskDate = document.createElement('div');
                        taskDate.classList.add(
                            'todo-item-date',
                            'todo-item-pill',
                            'toggle-task'
                        );
                        taskDate.textContent = projects.projectsList[j].tasks[i].schedule
                        todoItem.appendChild(taskDate)
                    }
                    //project name
                    const taskProject = document.createElement('p');
                    taskProject.classList.add(
                        'todo-item-pill',
                        `${projects.projectsList[j].color}-background`,
                        'toggle-task',
                        'todo-item-project-name'
                    );
                    taskProject.textContent = projects.projectsList[j].title;
                    todoItem.appendChild(taskProject);
                    //edit icon
                    const taskEditIcon = document.createElement('i');
                    taskEditIcon.classList.add(
                        'fa-solid',
                        'fa-pen-to-square',
                        'edit-task-modal'
                    );
                    todoItem.appendChild(taskEditIcon)
                    //trash icon
                    const taskTrashIcon = document.createElement('i');
                    taskTrashIcon.classList.add(
                        'fa-solid', 
                        'fa-trash',
                        'remove-task-modal'
                    );
                    todoItem.append(taskTrashIcon);
                }
            }
            //Add task line
            const taskAdd = document.createElement('div');
            taskAdd.setAttribute('data-project-index', projectIndex);
            taskAdd.classList.add('todo-item-add', 'add-task-modal');
            taskList.appendChild(taskAdd);
            const taskAddIcon = document.createElement('i');
            taskAddIcon.classList.add('fa-solid', 'fa-circle-plus', 'add-task-modal');
            taskAdd.appendChild(taskAddIcon);
            const taskAddTitle = document.createElement('p');
            taskAddTitle.classList.add('todo-item-title', 'add-task-modal');
            taskAddTitle.textContent = 'Add new task';
            taskAdd.appendChild(taskAddTitle)
        } else {
            //no project warning
            const taskAdd = document.createElement('div');
            taskAdd.classList.add('todo-item-add', 'add-project-modal');
            taskList.appendChild(taskAdd);
            const taskAddIcon = document.createElement('i');
            taskAddIcon.classList.add(
                'fa-solid',
                'fa-circle-exclamation',
                'project-red',
                'add-project-modal'
            );
            taskAdd.appendChild(taskAddIcon);
            const taskAddTitle = document.createElement('p');
            taskAddTitle.classList.add('todo-item-title', 'add-project-modal');
            taskAddTitle.textContent = "You have no projects, create one."
            taskAdd.appendChild(taskAddTitle);
        }
    };

    function changeLink(projectIndex) {
        selectLink(projectIndex);
        renderHeader(projectIndex);
        renderTasks(projectIndex);
    };

    return {
        body,
        projectModal,
        confirmModal,
        modals,
        formProjectTitleError,
        formTaskTitleError,
        formTaskProjectError,
        responsiveSidebar,
        toggleSidebar,
        displayProjectModal,
        displayTaskModal,
        displayConfirmModal,
        showElement,
        hideElement,
        renderProjects,
        renderTasks,
        changeLink,
    }
})();

export default UI;
 