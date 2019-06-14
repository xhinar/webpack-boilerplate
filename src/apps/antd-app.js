import { registerApplication } from 'single-spa'
import { pathPrefix } from './utils'

export const registerAntDApp = () => {
  registerApplication(
    'antd',
    () => import('./components/antd/antd.app.js'),
    pathPrefix('/antd'))
}

