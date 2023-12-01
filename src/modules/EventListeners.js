import { newProjectDOM, selectProjectDOM } from "./DOM"

newProjectDOM.addProjectBtn.addEventListener('click', newProjectDOM.insertNewProject);
selectProjectDOM.projectsContainer.addEventListener('click', selectProjectDOM.selectProject)