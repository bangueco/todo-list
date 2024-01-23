import { newProjectDOM, newTaskDom, selectProjectDOM } from "./DOM"
import {deleteProject} from './Logic'

const attachEventListeners = () => {
  newProjectDOM.addProjectBtn.addEventListener('click', newProjectDOM.insertNewProject);
  selectProjectDOM.projectsContainer.addEventListener('click', selectProjectDOM.selectProject);
  newTaskDom.addTaskBtn.addEventListener('click', newTaskDom.insertNewTask);
  document.querySelector('.projects__container').addEventListener('click', deleteProject)
}

export {
  attachEventListeners
}