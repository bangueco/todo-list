class Project {
  constructor(title, description) {
    this.title = title;
    this.description = description;
    this.tasks = [];
  };
}

class Task{
  constructor(name, dueDate, status) {
    this.name = name;
    this.dueDate = dueDate;
    this.status = status;
  }
}

export {
  Project,
  Task
}