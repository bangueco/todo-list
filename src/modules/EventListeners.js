import { newProjectDOM, newTaskDom, selectProjectDOM } from "./DOM"
import {deleteProject, editProject, getProjectInfo} from './Logic'

const attachEventListeners = () => {
  newProjectDOM.addProjectBtn.addEventListener('click', newProjectDOM.insertNewProject);
  selectProjectDOM.projectsContainer.addEventListener('click', selectProjectDOM.selectProject);
  newTaskDom.addTaskBtn.addEventListener('click', newTaskDom.insertNewTask);
  document.querySelector('.projects__container').addEventListener('click', (e) => {
    if (e.target.classList[0] === 'editButton') return getProjectInfo(e);
    if (e.target.classList[0] === 'deleteButton') return deleteProject(e);
    return; 
  })
  document.querySelector('#editModal').addEventListener('click', e => {
    if (e.target.id === "editButtonProject") return editProject(e);
  })
}

export {
  attachEventListeners
}