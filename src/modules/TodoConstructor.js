class Project {
  constructor(title, description) {
    this.title = title;
    this.description = description;
    this.tasks = [];
  };
}

class Task{
  constructor(name, dueDate) {
    this.name = name;
    this.dueDate = dueDate;
  }
}

export {
  Project,
  Task
}