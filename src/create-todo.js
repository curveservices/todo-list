//creating an array for ToDo, if needed down the line
let toDoArray = [];

//factory function to create todo list
export const createToDo = (Title, Description, DueDate, Priority, checkList) => {
    console.log('Called createToDO module, creating todo now');
    console.log({ Title, Description, DueDate,Priority,checkList});
    console.log('pushing this object to the todoArray');

    //TODO remove bottom 2 lines of code if array is not needed
    toDoArray.push({ Title,Description,DueDate,checkList });
    console.log(toDoArray);
    return{ Title,Description,DueDate,checkList };
}