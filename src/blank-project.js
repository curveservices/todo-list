export const blankProject = () => {
    console.log("Called blankProject... creating blank project array");

    let projectsArray = [];
    console.log('Pushing the title name of project to the projectArray...');
    let projectTitle = "Default Project";
    projectsArray.push({ projectTitle });
    console.log(projectsArray);
    return { projectsArray, projectTitle };
}