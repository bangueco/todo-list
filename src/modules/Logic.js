import { newProjectDOM } from "./DOM";
import { Project, Task } from "./TodoConstructor";

let projects = [];

const createNewProject = (title, description) => {
  projects.push(new Project(title, description));
}

const saveToLocalStorage = () => {
  localStorage.setItem('todo', JSON.stringify(projects));
}

const fetchItemsFromLocalStorage = () => {
  if (localStorage.getItem('todo') == null) return;

  return projects = JSON.parse(localStorage.getItem('todo'));
}

const createNewTask = (projectIndex, name, dueDate) => {
  projects[projectIndex].tasks.push(new Task(name, dueDate));
}

const deleteProject = (e) => {
  if (e.target.tagName != 'BUTTON') return;
  projects.splice(projects.indexOf(e.target.parentElement.dataset.projectIndex), 1)
  saveToLocalStorage();
  newProjectDOM.showProjectsToContainer();
}

export {
  projects,
  createNewProject,
  saveToLocalStorage,
  fetchItemsFromLocalStorage,
  createNewTask,
  deleteProject
}