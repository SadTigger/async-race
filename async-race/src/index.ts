import './styles.css';

import { App } from './app';

window.onload = () => {
  const appElement = document.getElementById('app');

  if (!appElement) {
    throw new Error('App root element not found');
  } else {
    const app = new App(appElement);
    // app.run();
  }
};
