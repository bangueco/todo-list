import { createNewProject, createNewTask, fetchItemsFromLocalStorage, projects, saveToLocalStorage} from "./Logic";

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
      const projectTitle = document.createElement('div');
      const buttons = document.createElement('div');
      const editButton = document.createElement('button');
      const deleteButton = document.createElement('button');
      projectTitle.classList.add('title');
      editButton.classList.add('editButton');
      editButton.classList.add('btn');
      editButton.classList.add('btn-info');
      editButton.classList.add('btn-sm');
      editButton.dataset.bsToggle = 'modal';
      editButton.dataset.bsTarget = '#editModal'
      deleteButton.classList.add('deleteButton');
      deleteButton.classList.add('btn');
      deleteButton.classList.add('btn-danger');
      deleteButton.classList.add('btn-sm');
      buttons.classList.add('buttons');
      projectTitle.textContent = proj.title;
      editButton.textContent = "EDIT";
      deleteButton.textContent = "DEL";
      div.dataset.projectIndex = index;

      buttons.appendChild(editButton);
      buttons.appendChild(deleteButton);

      div.appendChild(projectTitle);
      div.appendChild(buttons);
      _projectsContainer.appendChild(div);
    });
    appendEditButtonModal();
  }

  const insertNewProject = () => {
    createNewProject(_projectName.value, _projectDesc.value);
    saveToLocalStorage();
    fetchItemsFromLocalStorage();
    showProjectsToContainer();
  }

  const appendEditButtonModal = () => {
    // Creating elements
    const modal = document.createElement('div');
    const modalDialog = document.createElement('div');
    const modalContent = document.createElement('div');
    const modalHeader = document.createElement('div');
    const modalBody = document.createElement('div');
    const modalFooter = document.createElement('div');

    // Assigning classes and id
    modal.classList.add('modal');
    modal.classList.add('fade');
    modal.id = 'editModal';
    modalDialog.classList.add('modal-dialog');
    modalContent.classList.add('modal-content');
    modalHeader.classList.add('modal-header');
    modalBody.classList.add('modal-body');
    modalFooter.classList.add('modal-footer');
    
    // Append modal header
    const h1 = document.createElement('h1');
    h1.classList.add('modal-title');
    h1.classList.add('fs-5');
    h1.id = 'editModalLabel';
    h1.textContent = "Edit project information";
    modalHeader.appendChild(h1);

    // Append modal button
    const x = document.createElement('button');
    x.setAttribute('type', 'button');
    x.classList.add('btn-close');
    x.dataset.bsDismiss = 'modal';
    modalHeader.appendChild(x);

    // Append modal body
    const projectNameContainer = document.createElement('div');
    const projectDescriptionContainer = document.createElement('div');

    const projectNameLabel = document.createElement('label');
    const projectDescriptionLabel = document.createElement('label');
    projectNameLabel.textContent = 'Project Name';
    projectNameLabel.classList.add('form-label');
    projectDescriptionLabel.textContent = 'Project Description'
    projectDescriptionLabel.classList.add('form-label');
    projectNameContainer.appendChild(projectNameLabel);
    projectDescriptionContainer.appendChild(projectDescriptionLabel);
    const projectNameInput = document.createElement('input');
    projectNameInput.classList.add('form-control')
    projectNameInput.id = 'editProjectName';
    projectNameInput.type = "text";
    const projectDescriptionInput = document.createElement('input');
    projectDescriptionInput.classList.add('form-control')
    projectDescriptionInput.id = 'editProjectDescription';
    projectDescriptionInput.type = "text";

    projectNameContainer.appendChild(projectNameInput);
    projectDescriptionContainer.appendChild(projectDescriptionInput);
    modalBody.appendChild(projectNameContainer);
    modalBody.appendChild(projectDescriptionContainer);

    // Append modal footer
    const close = document.createElement('button')
    close.setAttribute('type', 'button');
    close.classList.add('btn');
    close.classList.add('btn-secondary');
    close.dataset.bsDismiss = "modal";
    close.textContent = "Close";

    const editSubmitBtn = document.createElement('button');
    editSubmitBtn.setAttribute('type', 'button');
    editSubmitBtn.id = "editButtonProject";
    editSubmitBtn.classList.add('btn');
    editSubmitBtn.classList.add('btn-success');
    editSubmitBtn.dataset.bsDismiss = "modal";
    editSubmitBtn.textContent = "Submit";

    modalFooter.appendChild(close);
    modalFooter.appendChild(editSubmitBtn);

    // Append elements
    modalDialog.appendChild(modalContent);
    modalContent.appendChild(modalHeader);
    modalContent.appendChild(modalBody);
    modalContent.appendChild(modalFooter);
    modal.appendChild(modalDialog);


    _projectsContainer.appendChild(modal);
  }

  const setEditProjectModalInfo = (e) => {
    document.querySelector('#editProjectName').value = projects[e.target.parentElement.parentElement.dataset.projectIndex].title;
    document.querySelector('#editProjectDescription').value = projects[e.target.parentElement.parentElement.dataset.projectIndex].description
    document.querySelector('#editButtonProject').dataset.index = e.target.parentElement.parentElement.dataset.projectIndex;
    return;
  }

  return {
    addProjectBtn,
    showProjectsToContainer,
    insertNewProject,
    appendEditButtonModal,
    setEditProjectModalInfo
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
  const _addNewTaskBtn = document.querySelector('[data-bs-target="#tasksModal"]');
  const _taskName = document.querySelector('#taskName');
  const _TaskDueDate = document.querySelector('#taskDueDate');
  const _tasksContainer = document.querySelector('.tasks__container');

  const showTasksToContainer = () => {
    _tasksContainer.innerHTML = "";
    projects[_addNewTaskBtn.dataset.projectIndex].tasks.forEach((proj, index) => {
      const div = document.createElement('div');
      div.classList.add('task');
      div.dataset.taskIndex = index;
      const checkbox = document.createElement('input')
      checkbox.type = 'checkbox';
      if (proj.status === 'finished') checkbox.checked = true;
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
    createNewTask(_addNewTaskBtn.dataset.projectIndex, _taskName.value, _TaskDueDate.value, 'ongoing');
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