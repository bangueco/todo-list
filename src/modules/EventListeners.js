import { newProjectDOM, newTaskDom, selectProjectDOM } from "./DOM"

newProjectDOM.addProjectBtn.addEventListener('click', newProjectDOM.insertNewProject);
selectProjectDOM.projectsContainer.addEventListener('click', selectProjectDOM.selectProject);
newTaskDom.addTaskBtn.addEventListener('click', newTaskDom.insertNewTask);