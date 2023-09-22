import UI from "./UI";

const projects = (() => {
    let projectsList = [];

    //storage
    if (localStorage.getItem('projects') === null) {
        projectsList = [
            {
                title:'Demo Project',
                tasks:[],
            },
        ]
    } else {
        const projectsFromStorage = JSON.parse(localStorage.getItem('projects'));
        projectsList = projectsFromStorage;
    }

    class Project {
        constructor(title) {
            this.title = title;
            this.tasks = [];
        }
    };

    function createProject(title) {
        const newProject = new Project(title);
        projectsList.push(newProject);
        UI.renderProjects();
        UI.changeLink(projectsList.length - 1);
        localStorage.setItem('projects', JSON.stringify(projectsList));
      }

    function editProject(index, title, link) {
        projectsList[index].title = title
        UI.renderProjects();
        if (link === undefined) {
            UI.changeLink(index);
        } else {
            UI.changeLink(link);
        }
        localStorage.setItem('projects', JSON.stringify(projectsList));
    }

    function removeProject(index) {
        projectsList.splice(index, 1);
        UI.hideElement(UI.modals);
        UI.renderProjects();
        UI.changeLink('inbox');
        localStorage.setItem('projects', JSON.stringify(projectsList));
    }

    return {
        projectsList,
        createProject,
        editProject,
        removeProject,
    }
})();

export default projects;