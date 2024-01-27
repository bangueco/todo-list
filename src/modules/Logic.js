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

const createNewTask = (projectIndex, name, dueDate, status) => {
  projects[projectIndex].tasks.push(new Task(name, dueDate, status));
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
  window.location.reload();
}

const checkBoxToggle = (e) => {
  const projectIndex = document.querySelector('#taskButton').dataset.projectIndex;
  const taskIndex = e.target.parentElement.parentElement.dataset.taskIndex;
  if (e.target.checked === true) projects[projectIndex].tasks[taskIndex].status = "finished";
  if (e.target.checked === false) projects[projectIndex].tasks[taskIndex].status = "ongoing";
  saveToLocalStorage();
}

export {
  projects,
  createNewProject,
  saveToLocalStorage,
  fetchItemsFromLocalStorage,
  createNewTask,
  getProjectInfo,
  editProject,
  deleteProject,
  checkBoxToggle
}