import { registerApplication } from 'single-spa'
import { pathPrefix } from './utils'

export const registerAngularApp = () => {
  registerApplication(
    'angularJS',
    () => import ('./components/angularJS/angularJS.app.js'),
    pathPrefix('/angularJS')
  )
}
