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

const getProjectInfo = (e) => {
  return newProjectDOM.setEditProjectModalInfo(e);
}

const editProject = (e) => {
  const projectName = document.querySelector('#editProjectName');
  const projectDescription = document.querySelector('#editProjectDescription');
  projects[e.target.dataset.index].title = projectName.value;
  projects[e.target.dataset.index].description = projectDescription.value
  saveToLocalStorage();
  window.location.reload();
}

const deleteProject = (e) => {
  projects.splice(projects.indexOf(e.target.parentElement.dataset.projectIndex, -1), 1)
  saveToLocalStorage();
  newProjectDOM.showProjectsToContainer();
}

export {
  projects,
  createNewProject,
  saveToLocalStorage,
  fetchItemsFromLocalStorage,
  createNewTask,
  getProjectInfo,
  editProject,
  deleteProject
}