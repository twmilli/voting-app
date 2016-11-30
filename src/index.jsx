import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Router, IndexRoute, hashHistory} from 'react-router';
import Dashboard from './components/Dashboard';
import Main from './components/Main';
import css from './styles/main.scss';

const routes = (
  <Router history = {hashHistory}>
    <Route path='/' component = {Main}>
      <IndexRoute  component={Dashboard}/>
    </Route>
  </Router>
)

ReactDOM.render(
  routes,
  document.getElementById('root')
);
