import App from './app'
import style from "./main.css"

console.log('I\'m a silly entry point')

// write some ES6 for test transpiling
const arr = [1, 2, 3]
const iAmJavascriptES6 = () => console.log(...arr)
window.iAmJavascriptES6 = iAmJavascriptES6

