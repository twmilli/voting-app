import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Router, IndexRoute, browserHistory} from 'react-router';
import Dashboard from './components/Dashboard';
import {MainContainer} from './components/Main';
import css from './styles/main.scss';
import store, {history} from './store.js';
import {Provider} from 'react-redux';
import Voting from './components/Voting';
import Create from './components/Create';
import {setState} from './actions/actionCreators';
import rootReducer from './reducers/index';
import Login from './components/Login';
import Sent from './components/Sent';
import User from './components/User';
import MyPolls from './components/MyPolls';

const history2 = browserHistory;

const routes = (
  <Provider store = {store}>
    <Router history = {history2}>
      <Route path='/(user/:user)' component = {MainContainer}>
        <IndexRoute component={Dashboard}/>
        <Route path='/vote/:index' component = {Voting}></Route>
        <Route path='/login' component={Login}></Route>
        <Route path='/new' component = {Create}></Route>
        <Route path='/sent' component={Sent}></Route>
        <Route path='/mypolls' component={MyPolls}></Route>
      </Route>
    </Router>
  </Provider>
)

ReactDOM.render(
  routes,
  document.getElementById('root')
);
