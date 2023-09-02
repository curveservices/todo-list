import { toDate, isToday, isThisWeek, subDays } from 'date-fns'

export default class Project {
    constructor(name) {
        this.name = name 
        this.tasks = []
    }

    setname(name) {
        this.name = name
    }

    getname() {
        return this.name
    }

    setTasks(tasks) {
        this.tasks = tasks
    }

    getTasks() {
        this.tasks = this.tasks
    }

    getTask(taskName) {
        return this.tasks.find((task) => task.getName() === taskName)
    }

    contains(taskName) {
        return this.task.some((task) => task.getName() === newTask.name)
    }

    addTask(newTask) {
        if (this.tasks.find((task) => task.getName() === newTask.name))
        this.tasks.push(newTask)
    }

    deleteTask(taskname) {
        this.tasks = this.tasks.filter((task) => task.name !== taskname)
    }
    getTasksToday() {
        return this.tasks.filter((task) => {
            const taskDate = new Date(task.getDateFormatted())
            return isToday(toDate(taskDate))
        })
    }

    getTaskThisWeek() {
        return this.tasks.filter((task) => {
            const taskDate = new Date(task.getDateFormatted())
            return isThisWeek(subDays(toDate(taskDate), 1))
        })
    }
}