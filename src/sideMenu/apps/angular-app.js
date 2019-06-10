import { registerApplication } from 'single-spa'
import { pathPrefix } from './utils'

export const registerAngularApp = () => {
  registerApplication(
    'angularJS',
    () => import ('../../angularJS/angularJS.app.js'),
    pathPrefix('/angularJS')
  )
}
