import './style.css';
import './modules/EventListeners.js';
import { startUpDOM } from './modules/DOM.js';
import { attachEventListeners } from './modules/EventListeners.js';

window.onload = () => {
  startUpDOM.initiateProjects();
  attachEventListeners();
}