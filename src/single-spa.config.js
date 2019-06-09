import { registerApplication, start } from 'single-spa'
import './serviceworker'

function pathPrefix(prefix) {
  return function(location) {
    return location.pathname.startsWith(prefix);
  }
}

registerApplication(
  'navBar',
  () => import('./navBar/navBar.app.js').then(module => module.navBar),
  () => true
)

registerApplication(
  // Name of our single-spa application
  'home',
  // Our loading function
  () => import('./home/home.app.js'),
  // Our activity function
  // (location) => location.pathname === "" ||
  //   location.pathname === "/" ||
  //   location.pathname.startsWith('/home')
  pathPrefix('/home')
)

registerApplication('antd',
  () => import('./antd/antd.app.js'),
  pathPrefix('/antd'));

registerApplication(
  'angularJS',
  () => import ('./angularJS/angularJS.app.js'),
  pathPrefix('/angularJS')
)

start()