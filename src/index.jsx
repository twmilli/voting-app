import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Router, IndexRoute} from 'react-router';
import Dashboard from './components/Dashboard';
import {MainContainer} from './components/Main';
import css from './styles/main.scss';
import store, {history} from './store.js';
import {Provider} from 'react-redux';
import Voting from './components/Voting';

const routes = (
  <Provider store = {store}>
    <Router history = {history}>
      <Route path='/' component = {MainContainer}>
        <IndexRoute  component={Dashboard}/>
        <Route path='/vote/:index' component = {Voting}></Route>
      </Route>
    </Router>
  </Provider>
)

ReactDOM.render(
  routes,
  document.getElementById('root')
);
