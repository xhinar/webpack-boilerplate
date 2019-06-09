import { registerApplication } from 'single-spa';
// import { matchingPathname, runScript } from './utils';
// import eventBus from '../utils/eventBus';

// const loadReactApp = async () => {
//   await runScript('http://localhost:5002/static/js/main.js');
//   return window.reactApp;
// };

// export const registerReactApp = () => {
//   singleSpa.registerApplication(
//     'react-app',
//     loadReactApp,
//     matchingPathname(['/react', '/']),
//     { eventBus }
//   );
// };

const loadNavBarApp = async () => {
  await import('../../navBar/navBar.app.js').then(module => module.navBar)
}

export const registerNavBarApp = () => {
  registerApplication(
    'navBar',
    // () => import('./navBar/navBar.app.js').then(module => module.navBar),
    loadNavBarApp,
    () => true
  )
}