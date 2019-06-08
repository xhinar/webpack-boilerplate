import {registerApplication, start} from 'single-spa'

function pathPrefix(prefix) {
  return function(location) {
    return location.pathname.startsWith(prefix);
  }
}

registerApplication(
  // Name of our single-spa application
  'home',
  // Our loading function
  () => import('./src/home/home.app.js'),
  // Our activity function
  () => location.pathname === "" ||
    location.pathname === "/" ||
    location.pathname.startsWith('/home')
)

registerApplication(
  'navBar',
  () => import('./src/navBar/navBar.app.js').then(module => module.navBar),
  () => true
)

registerApplication(
  'angularJS',
  () => import ('./src/angularJS/angularJS.app.js'),
  pathPrefix('/angularJS')
)

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/dist/service-worker.js').then(registration => {
      console.log('SW registered: ', registration);
    }).catch(registrationError => {
      console.log('SW registration failed: ', registrationError);
    });
  });
}

start()