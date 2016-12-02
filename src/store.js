import {createStore,compose} from 'redux';
import rootReducer from './reducers/index';
import {syncHistoryWithStore} from 'react-router-redux';
import {browserHistory} from 'react-router';
import {fromJS} from 'immutable';
const state = fromJS({
  topics:[
    {
      title: "Favorite Color",
      choices:['red','blue','yellow','green'],
      tally:{
        red: 1
      }
    }
  ]
});

const store = createStore(rootReducer, state);
export default store;
export const history = syncHistoryWithStore(browserHistory,store, {
  selectLocationState (state){
    return state.get('routing').toJS();
  }
});
