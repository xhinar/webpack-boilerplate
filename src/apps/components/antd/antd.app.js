import React from 'react';
import ReactDOM from 'react-dom';
import singleSpaReact from 'single-spa-react';
import AntD from './root.component.js';

const reactLifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: AntD,
  domElementGetter,
  suppressComponentDidCatchWarning: true
  //https://reactjs.org/docs/hooks-faq.html
  // - componentDidCatch and getDerivedStateFromError:
  //   There are no Hook equivalents for these methods yet, but they will be added soon.
})

export const bootstrap = [
  reactLifecycles.bootstrap,
];

export const mount = [
  reactLifecycles.mount,
];

export const unmount = [
  reactLifecycles.unmount,
];

function domElementGetter() {
	// Make sure there is a div for us to render into
	// let el = document.getElementById('main-content');
	let el = document.getElementById('antd-app');
	if (!el) {
		el = document.createElement('div');
		// el.id = 'main-content';
		el.id = 'antd-app';
		document.body.appendChild(el);
	}

	return el;
}
