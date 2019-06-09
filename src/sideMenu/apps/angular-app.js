import * as singleSpa from 'single-spa';
import { matchingPathname, runScript } from './utils';
import eventBus from '../utils/eventBus';

const loadAngularApp = async () => {
  await runScript('http://localhost:5001/inline.bundle.js');
  await runScript('http://localhost:5001/polyfills.bundle.js');
  await runScript('http://localhost:5001/styles.bundle.js');
  await runScript('http://localhost:5001/vendor.bundle.js');
  await runScript('http://localhost:5001/main.bundle.js');
  return window.angularApp;
};

export const registerAngularApp = () => {
  singleSpa.registerApplication(
    'angular-app',
    loadAngularApp,
    matchingPathname(['/angular', '/']),
    { eventBus }
  );
};
