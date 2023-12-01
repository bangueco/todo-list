import { createNewProject, fetchItemsFromLocalStorage, projects, saveToLocalStorage } from "./Logic";

const newProjectDOM = (() => {
  const addProjectBtn = document.querySelector('#addProjectBtn');
  const _projectName = document.querySelector('#projectName');
  const _projectDesc = document.querySelector('#projectDesc');
  const _projectsContainer = document.querySelector('.projects__container');

  const showProjectsToContainer = () => {
    _projectsContainer.innerHTML = "";
    projects.forEach((proj, index) => {
      const div = document.createElement('div');
      div.classList.add('project');
      div.textContent = proj.title;
      div.dataset.projectIndex = index;
      _projectsContainer.appendChild(div);
    });
  }

  const insertNewProject = () => {
    createNewProject(_projectName.value, _projectDesc.value);
    saveToLocalStorage();
    fetchItemsFromLocalStorage();
    showProjectsToContainer();
  }

  return {
    addProjectBtn,
    showProjectsToContainer,
    insertNewProject,
  }
})();

const startUpDOM = (() => {
  const initiateProjects = () => {
    fetchItemsFromLocalStorage();
    newProjectDOM.showProjectsToContainer();
  }

  return {
    initiateProjects
  }
})();

export {
  newProjectDOM,
  startUpDOM
}