import {combineReducers} from 'redux-immutable';
import {fromJS} from 'immutable';
import {addTopic,vote} from './core';
import {LOCATION_CHANGE} from 'react-router-redux';

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

const initialState = fromJS({
  locationBeforeTransitions: null
});


 function routeReducer(state=initialState, action){
  if (action.type === LOCATION_CHANGE){
    return state.set('locationBeforeTransitions', action.payload)
  }
  return state;
}

export default combineReducers({topics, routing: routeReducer});
