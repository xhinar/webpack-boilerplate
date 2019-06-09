import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { start } from 'single-spa'
// import { registerReactApp } from "./apps/react-app";
// import { registerAngularApp } from "./apps/angular-app";
import { registerNavBarApp } from "./apps/navBar-app"

ReactDOM.render(<App/>, document.getElementById('app'))

// registerReactApp();
// registerAngularApp();
// registerNavBarApp

// start();
