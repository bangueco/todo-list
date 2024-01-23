import './style.css';
import './modules/EventListeners.js';
import { startUpDOM } from './modules/DOM.js';

window.onload = () => {
  startUpDOM.initiateProjects();
}