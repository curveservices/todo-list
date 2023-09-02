export default class Task {
    constructor(title, notes, dueDate, priority) {
        this.title = title,
        this.notes = notes,
        this.dueDate = dueDate,
        this.priority = priority 
    console.log("Called Task... get and set title, notes due date & priority");
    console.log('Pushing the title name of task to the taskArray...');
    return
    };

    setTitle(title) {
        this.title = title
    }

    getTitle() {
        return this.getTitle
    }

    setNotes(notes) {
        this.notes = notes
    }

    getNotes() {
        return this.getNotes
    }

    setDate(dueDate) {
        this.dueDate = dueDate
    }

    getDate() {
        return this.dueDate
    }

    getDateFormatted() {
        const day = this.dueDate.split('/')[0]
        const month = this.dueDate.split('/')[1]
        const year = this.dueDate.split('/')[2]
        return `${day}/${month}/${year}`
    }

    setPriority(priority) {
        this.priority = priority
    }

    getPriority() {
        return this.priority
    }  
}