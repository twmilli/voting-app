import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import {fromJS} from 'immutable';
import {addTopic,vote} from './core';

export function topics(state=[], action){
  switch(action.type){
    case 'SET_STATE':
      return (fromJS(action.state));
    case 'ADD_TOPIC':
      return addTopic(state,action.title,action.choices);
    case 'VOTE':
      return vote(state,action.index,action.choice)
  }
  return fromJS(state);
}

export default combineReducers({topics, routing: routerReducer});
