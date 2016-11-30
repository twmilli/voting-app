import {createStore,compose} from 'redux';
import rootReducer from './reducers/index';
import {syncHistoryWithStore} from 'react-router-redux';
import {browserHistory} from 'react-router';
const defaultState = {
  topics:[
    {
      title: "Favorite Color",
      choices:['red','blue','yellow','green'],
      tally:{
        red: 1
      }
    }
  ]
};

const store = createStore(rootReducer, defaultState);
export default store;
export const history = syncHistoryWithStore(browserHistory,store);
