import projects from './Projects'
import UI from './UI'

const tasks = (() => {
    class Task {
        constructor(title, priority, schedule) {
            this.title = title;
            this.priority = priority;
            this.schedule = schedule;
        }
    };

    function createTask(projectIndex, title, priority = '', schedule = '', link = projectIndex) {
        const newtask = new Task(title, priority, schedule);
        projects.projectsList[projectIndex].tasks.push(newtask);
        if (Number.isNaN(parseInt(link, 10))) {
            UI.changeLink(link);;
        } else {
            UI.renderTasks(projectIndex);
        }
        localStorage.setItem('projects', JSON.stringify(projects.projectsList));
    }

    function toggleTask(projectIndex, taskIndex, link = projectIndex) {
        if (projects.projectsList[projectIndex].tasks[taskIndex].done) {
            projects.projectsList[projectIndex].tasks[taskIndex].done = false;
        } else {
            projects.projectsList[projectIndex].ttasks[taskIndex].done = true;
        }
        UI.renderTasks(link);
        localStorage.setItem('projects', JSON.stringify(projects.projectsList));
    }

    function editTask(projectIndex, taskIndex, title, priority,schedule, link = projectIndex) {
        projects.projectsList[projectIndex].tasks[taskIndex].title = title;
        projects.projectsList[projectIndex].tasks[taskIndex].priority = priority;
        projects.projectsList[projectIndex].tasks[taskIndex].schedule = schedule;
        UI.renderTasks(link);
        localStorage.setItem('projects', JSON.stringify(projects.projectsList));
    }

    function removeTask(projectIndex, taskIndex, link = projectIndex) {
        projects.projectsList[projectIndex].tasks.splice(taskIndex, 1);
        UI.hideElement(UI.modals);
        UI.renderTasks(link);
        localStorage.setItem('projects', JSON.stringify(projects.projectsList));
    }

    return {
        createTask,
        toggleTask,
        editTask,
        removeTask,
    }
})();

export default tasks;