import projects from "./Projects";
import UI from "./UI";
import tasks from "./Tasks";

const validation = (() => {
    function addProject(event) {
        const projectTitle = document.forms['project-form']['project-title'].value
        
        event.preventDefault();

        if (projectTitle !== '') {
           projects.createProject(projectTitle)
           UI.hideElement(UI.formProjectTitleError)
           UI.hideElement(UI.modals)
        } else if (projectTitle === '') {
            UI.showElement(UI.formProjectTitleError)
        }
    }

    function editProject(event, index, link) {
        const projectTitle = document.forms['project-form']['project-title'].value;

        event.preventDefault();

        if (projectTitle !== '') {
            projects.editProject(
                index,
                projectTitle,
                link, 
            )
            UI.hideElement(UI.formProjectTitleError)
            UI.hideElement(UI.modals)
        } else if (projectTitle === '') {
            UI.showElement(UI.formProjectTitleError);
        }
    }

    function addTask(event, projectIndex) {
        const taskTitle = document.forms['task-form']['task-title'].value
        const taskPriority = document.forms['task-form']['task-priority'].value
        const taskSchedule = document.forms['task-form']['task-schedule'].value
        const link = document.querySelector('.add-task-modal').getAttribute('data-project-index')
        
        let taskProject;
        if (Number.isNaN(projectIndex)) {
            taskProject = parseInt(
                document.forms['task-form']['task-project'].value,10
            );
        } else {
            taskProject = projectIndex;
        }

        event.preventDefault();

        if (taskTitle !== '' && !Number.isNaN(taskProject)) {
            tasks.createTask(
                taskProject,
                taskTitle,
                taskPriority,
                taskSchedule,
                link
            );
            UI.hideElement(UI.formTaskTitleError)
            UI.hideElement(UI.formTaskProjectError)
            UI.hideElement(UI.modals)
        } else if (taskTitle === '') {
            UI.showElement(UI.formTaskTitleError)
        } else {
            UI.hideElement(UI.formTaskTitleError)
        }
        if (Number.isNaN(taskProject)) {
            UI.showElement(UI.formTaskProjectError)
        } else {
            UI.hideElement(UI.formTaskProjectError)
        }
    }

    function editTask(event, projectIndex, taskIndex, link) {
        const taskTitle = document.forms['task-form']['task-title'].value
        const taskPriority = document.forms['task-form']['task-priority'].value
        const taskSchedule = document.forms['task-form']['task-schedule'].value

        event.preventDefault()

        if (taskTitle !== '') {
            tasks.editTask(
                projectIndex,
                taskIndex,
                taskTitle,
                taskPriority,
                taskSchedule,
                link
            )
            UI.hideElement(UI.formTaskTitleError)
            UI.hideElement(UI.modals)
        } else if (taskTitle === '') {
            UI.showElement(UI.formTaskTitleError)
        }
    }

    return {
        addProject,
        editProject,
        addTask,
        editTask
    };
})();

export default validation;