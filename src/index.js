import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
// import App from './App';
import Contact from './components/Contact'
import Router from './components/Router'
import Dashboard from './components/Dashboard'
import Root from './components/Root'
import './tachyons.min.css'
import * as serviceWorker from './serviceWorker'

ReactDOM.render(<Root />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
