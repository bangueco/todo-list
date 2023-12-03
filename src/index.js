import './style.css';
import './modules/EventListeners.js';
import { startUpDOM } from './modules/DOM.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';

window.onload = () => {
  startUpDOM.initiateProjects();
}