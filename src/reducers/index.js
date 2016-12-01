import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import topics from './topics';
import {fromJS} from 'immutable';

export function mainReducer(state={}, action){
  switch(action.type){
    case 'SET_STATE':
      return (fromJS(action.state));
  }
  return fromJS(state);
}

export default combineReducers({topics,mainReducer,routing: routerReducer});
