import { registerApplication } from 'single-spa'
import { pathPrefix } from './utils'

export const registerAntDApp = () => {
  registerApplication(
    'antd',
    () => import('../../antd/antd.app.js'),
    pathPrefix('/antd'))
}

