import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router';
import App from './containers/App.js';
import Login from './containers/Login.js';
import Home from './containers/Home.jsx';
import About from './containers/About.jsx';
import Contact from './containers/Contact.jsx';
import { combineReducers } from 'redux';
import { Provider } from 'react-redux';

import { createStore as initialCreateStore, compose } from 'redux';
import * as reducers from './reducers';

const reducer = combineReducers(reducers);
const store = initialCreateStore(reducer);
var requireAuth = function(nextState, transition) {
    if (!localStorage.getItem("auth")) {
        browserHistory.push('/login');
    }
}
var noAuth = function(nextState, transition) {
    if (localStorage.getItem("auth")) {
        browserHistory.push('/');
    }
}

ReactDOM.render((
    <Provider store={store}>
        {() =>
            <Router history={browserHistory}>
                <Route path="/" component={App} onEnter={requireAuth}>
                    <IndexRoute component={Home}/>
                    <Route path="home" component={Home}/>
                    <Route path="about" component={About}/>
                    <Route path="contact" component={Contact}/>
                </Route>
                <Route path="/login" component={Login} onEnter={noAuth}/>
            </Router>
        }
    </Provider>

), document.getElementById('root'))