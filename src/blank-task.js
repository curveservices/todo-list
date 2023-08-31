export const taskCreated = () => {
    console.log("Called blankProject... creating blank project array");

    let taskArray = [];
    console.log('Pushing the title name of task to the taskArray...');
    let taskTitle = "Laundry day";
    // taskTitle.classList.add ('task-title');
    taskArray.push({ taskTitle });
    console.log(taskArray);
    return { taskArray, taskTitle };
}