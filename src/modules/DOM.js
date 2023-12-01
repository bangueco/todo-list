import { createNewProject, createNewTask, fetchItemsFromLocalStorage, projects, saveToLocalStorage } from "./Logic";

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

const selectProjectDOM = (() => {
  const projectsContainer = document.querySelector('.projects__container');
  const _projectNameDetail = document.querySelector('.project__name');
  const _projectDescDetail = document.querySelector('.project__description');
  const _addNewTaskBtn = document.querySelector('[data-bs-target="#tasksModal"]');

  const selectProject = (e) => {
    if (e.target.className != 'project') return;
    _projectNameDetail.textContent = projects[e.target.dataset.projectIndex].title;
    _projectDescDetail.textContent = projects[e.target.dataset.projectIndex].description;
    _addNewTaskBtn.style.display = '';
    _addNewTaskBtn.dataset.projectIndex = e.target.dataset.projectIndex;
    newTaskDom.showTasksToContainer();
  }

  return {
    projectsContainer,
    selectProject
  }
})();

const newTaskDom = (() => {
  const addTaskBtn = document.querySelector('#addTaskBtn');
  const _project = document.querySelector('.project');
  const _addNewTaskBtn = document.querySelector('[data-bs-target="#tasksModal"]');
  const _taskName = document.querySelector('#taskName');
  const _TaskDueDate = document.querySelector('#taskDueDate');
  const _tasksContainer = document.querySelector('.tasks__container');

  const showTasksToContainer = () => {
    _tasksContainer.innerHTML = "";
    projects[_addNewTaskBtn.dataset.projectIndex].tasks.forEach(proj => {
      const div = document.createElement('div');
      div.classList.add('task');
      const checkbox = document.createElement('input')
      checkbox.type = 'checkbox';
      const taskname = document.createElement('div');
      taskname.classList.add('taskName');
      taskname.textContent = proj.name;
      const dueDate = document.createElement('div');
      dueDate.classList.add('dueDate');
      dueDate.textContent = proj.dueDate;

      div.appendChild(checkbox);
      div.appendChild(taskname);
      div.appendChild(dueDate);
      _tasksContainer.appendChild(div);
    })
  }

  const insertNewTask = () => {
    createNewTask(_addNewTaskBtn.dataset.projectIndex, _taskName.value, _TaskDueDate.value);
    saveToLocalStorage();
    fetchItemsFromLocalStorage();
    showTasksToContainer();
  }

  return {
    addTaskBtn,
    showTasksToContainer,
    insertNewTask
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
  selectProjectDOM,
  startUpDOM,
  newTaskDom
}