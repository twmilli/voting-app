import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Router, IndexRoute} from 'react-router';
import Dashboard from './components/Dashboard';
import {MainContainer} from './components/Main';
import css from './styles/main.scss';
import store, {history} from './store.js';
import {Provider} from 'react-redux';
import Voting from './components/Voting';
import Create from './components/Create';
import {setState} from './actions/actionCreators';
import rootReducer from './reducers/index';


const routes = (
  <Provider store = {store}>
    <Router history = {history}>
      <Route path='/' component = {MainContainer}>
        <IndexRoute component={Dashboard}/>
        <Route path='/vote/:index' component = {Voting}></Route>
        <Route path='/new' component = {Create}></Route>
      </Route>
    </Router>
  </Provider>
)

ReactDOM.render(
  routes,
  document.getElementById('root')
);
