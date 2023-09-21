import UI from './UI'
import projects from './Projects'
import validation from './validation'
import tasks from './Tasks'

const handlers = (() => {
    function listenClicks(){
        let projectIndex = 0
        let taskIndex = 0
        let link = 'inbox'
        UI.body.addEventListener('click', (e) => {
            //Toggle sidebar
            if (e.target.classList.contains('toggle-sidebar')) {
                UI.toggleSidebar()
                //Nav links inbox today week important completed
            } else if (e.target.classList.contains('link-inbox')) {
                link = 'inbox'
                UI.changeLink('inbox')
                //Nav links
            } else if (e.target.classList.contains('link-today')) {
                link = 'today'
                UI.changeLink('today')
                //Nav links
            } else if (e.target.classList.contains('link-week')) {
                link = 'week'
                UI.changeLink('week')
                //Nav links
            } else if (e.target.classList.contains('link-important')) {
                link = 'important'
                UI.changeLink('important')
                //Nav links
            } else if (e.target.classList.contains('link-completed')) {
                link = 'completed'
                UI.changeLink('completed')
                //Project links
            } else if (e.target.classList.contains('sidebar-project')) {
                projectIndex = parseInt(
                    e.target.getAttribute('data-index')
                    ? e.target.getAttribute('data-index')
                    : e.target.parentElement.getAttribute('data-index'),
                    10
                );
                link = undefined;
                UI.changeLink(projectIndex)
                //Add project modal open 
            } else if (e.target.classList.contains('add-project-modal')) {
                link = undefined;
                UI.displayProjectModal('addProject')
                //Edit project modal open
            } else if (e.target.classList.contains('edit-project-modal')) {
                projectIndex = parseInt(
                    e.target.parentElement.getAttribute('data-index'),
                    10
                )
                UI.displayProjectModal('editProject', projectIndex)
                //Remove project modal
            } else if (e.target.classList.contains('remove-project-modal')) {
                projectIndex = parseInt(
                    e.target.parentElement.getAttribute('data-index'),
                    10
                )
                UI.displayConfirmModal('removeProject', projectIndex)
                //Add task modal open
            } else if (e.target.classList.contains('add-task-modal')) {
                projectIndex = parseInt(
                    e.target.parentElement.getAttribute('data-project-index')
                    ? e.target.parentElement.getAttribute('data-project-index')
                    : e.target.getAttribute('data-project-index'),
                    10
                )
                UI.displayTaskModal('addTask', projectIndex);
                //Edit task modal open
            } else if (e.target.classList.contains('edit-task-modal')) {
                projectIndex = parseInt(
                    e.target.parentElement.getAttribute('data-project-index'),
                    10
                )
                taskIndex = parseInt(
                    e.target.parentElement.getAttribute('data-task-index'),
                    10
                )
                UI.displayTaskModal('editTask', projectIndex, taskIndex)
                //Remove task modal open
            } else if (e.target.classList.contains('remove-task-modal')) {
                projectIndex = parseInt(
                    e.target.parentElement.getAttribute('data-project-index'),
                    10
                )
                taskIndex = parseInt(
                    e.target.parentElement.getAttribute('data-task-index'),
                    10
                )
                UI.displayConfirmModal('removeTask', projectIndex, taskIndex) 
                //Close all modals
            } else if (
                e.target.classList.contains('close') ||
                e.target.classList.contains('modal')
            ) {
                UI.hideElement(UI.modals)
                //Add project
            } else if (e.target.classList.contains('add-project')) {
                validation.addProject(e);
                //Edit project
            } else if (e.target.classList.contains('edit-project')) {
                validation.editProject(e, projectIndex,link)
                //Romove project
            } else if (e.target.classList.contains('remove-project')) {
                projects.removeProject(projectIndex)
                //Add task
            } else if (e.target.classList.contains('add-task')) {
                validation.addTask(e, projectIndex)
                //Edit task
            } else if (e.target.classList.contains('edit-task')) {
                validation.editTask(e, projectIndex, taskIndex, link)
                //Remove task
            } else if (e.target.classList.contains('remove-task')) {
                tasks.removeTask(projectIndex, taskIndex, link)
                //Toggle task
            } else if (e.target.classList.contains('toggle-task')) {
                projectIndex = parseInt(
                    e.target.getAttribute('data-project-index')
                    ? e.target.getAttribute('data-projecct-index')
                    : e.target.parentElement.getAttribute('data-project-index'),
                    10
                )
                taskIndex = parseInt(
                    e.target.getAttribute('data-task-index')
                    ? e.target.getAttribute('data-task-index')
                    :e.target.parentElement.getAttribute('data-task-index'),
                    10
                )
                tasks.toggleTask(projectIndex, taskIndex, link)
            }
        });
    };

    function keyboardHandler() {
        document.addEventListener('keyup', (event) => {
            if (event.key === 'Escape') {
                UI.hideElement(UI.modals)
            }
        })
    };

    function resizeHandler() {
        window.addEventListener('resize', UI.responsiveSidebar)
    };

    function darkHandler() {
        const toggle = document.getElementById('toggle-dark');
        const body = document.querySelector('body');
        const header = document.querySelector('header');

        toggle.addEventListener('click', () => {
        toggle.classList.toggle('fa-moon')   
            if (toggle.classList.toggle('fa-sun')) {
                body.style.background = 'var(--light-background)';
                body.style.color = 'black';
                body.style.transition = '0.2s';
                header.style.background = 'var(--light-header)';
                
                // modals.style.background = 'var(--light-background)';
            } else {
                body.style.background = 'var(--dark-background)';
                body.style.color = 'white';
                body.style.transition = '0.2s';
                // modals.style.background = 'var(--dark-background)';
                header.style.background = 'var(--dark-header)';
               
            }
        })
    }

    return {
        keyboardHandler,
        resizeHandler,
        listenClicks,
        darkHandler,
    }
})();

export default handlers;