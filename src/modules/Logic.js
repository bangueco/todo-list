import { Project } from "./Project";

let projects = [];

const createNewProject = (title, description) => {
  projects.push(new Project(title, description));
  console.log(projects);
  console.log(JSON.stringify(projects));
}

const saveToLocalStorage = () => {
  localStorage.setItem('todo', JSON.stringify(projects));
}

const fetchItemsFromLocalStorage = () => {
  if (localStorage.getItem('todo') == null) return;

  return projects = JSON.parse(localStorage.getItem('todo'));
}

export {
  projects,
  createNewProject,
  saveToLocalStorage,
  fetchItemsFromLocalStorage
}