import {createStore,compose} from 'redux';
import rootReducer from './reducers/index';
import {syncHistoryWithStore} from 'react-router-redux';
import {browserHistory} from 'react-router';
import {fromJS} from 'immutable';
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
  ]
});

const store = createStore(rootReducer, state);
export default store;
export const history = syncHistoryWithStore(browserHistory,store, {
  selectLocationState (state){
    return state.get('routing').toJS();
  }
});
