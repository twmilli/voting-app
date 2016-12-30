import {createStore,compose, applyMiddleware} from 'redux';
import rootReducer from './reducers/index';
import {fromJS} from 'immutable';
import {browserHistory} from 'react-router';
import {syncHistoryWithStore} from 'react-router-redux';
import remoteActionMiddleware from './remote_action_middleware';
import io from 'socket.io-client';
import server from './config/config';
import {setState} from './actions/actionCreators';
import axios from 'axios';

const state = fromJS({
  topics:[
    {
      title: "Favorite Color?",
      choices:['Red', 'Blue', 'Yellow', 'Green', 'Purple'],
      tally:{
        Red: 6,
        Blue: 3,
        Green: 2,
        Yellow: 4,
        Purple: 6
      }
    }
  ],
  user:"twmilli"
});

const socket = io(server);

const createStoreWithMiddleware = applyMiddleware(
  remoteActionMiddleware(socket))(createStore);
const store = createStoreWithMiddleware(rootReducer, state);

socket.on('connection', ()=>{
  console.log('CONNECTED');
});

socket.on('state', state=>{
  store.dispatch(setState(state));
});

export const history = syncHistoryWithStore(browserHistory,store, {
  selectLocationState (state){
    return state.get('routing').toJS();
  }
});
export default store;
