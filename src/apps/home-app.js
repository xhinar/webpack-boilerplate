import { registerApplication } from 'single-spa'
import { pathPrefix } from './utils'

export const registerHomeApp = () => {
  registerApplication(
    'home',
    () => import('./components/home/home.app.js'),
    pathPrefix('/home')
  )
}
