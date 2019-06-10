import React from 'react'
import ReactDOM from 'react-dom'
import { start } from 'single-spa'
// import '../serviceworker'
import './index.css'
import App from './App'


// import { registerReactApp } from "./apps/react-app";
// import { registerAngularApp } from "./apps/angular-app";
import { registerAntDApp } from "./apps/antd-app"
import { registerAngularApp } from "./apps/angular-app";

ReactDOM.render(<App/>, document.getElementById('root'))

// registerReactApp();
// registerAngularApp();
registerAntDApp()
registerAngularApp()

start()
