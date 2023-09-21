import UI from "./UI";

const projects = (() => {
    let projectsList = [];

    //storage
    if (localStorage.getItem('projects') === null) {
        projectsList = [
            {
                title:'Demo Project',
                icon: 'fa-house',
                color:'project-blue',
                tasks:[],
            },
        ]
    } else {
        const projectsFromStorage = JSON.parse(localStorage.getItem('projects'));
        projectsList = projectsFromStorage;
    }

    class Project {
        constructor(title, icon, color) {
            this.title = title;
            this.icon = icon;
            this.color = color
            this.tasks = [];
        }
    };

    function createProject(title, icon, color) {
        const newProject = new Project(title, icon, color);
        projectsList.push(newProject);
        UI.renderProjects();
        UI.changeLink(projectsList.length - 1);
        localStorage.setItem('projects', JSON.stringify(projectsList));
      }

    function editProject(index, title, icon, color, link) {
        projectsList[index].title = title;
        projectsList[index].icon = icon;
        projectsList[index].color = color;
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