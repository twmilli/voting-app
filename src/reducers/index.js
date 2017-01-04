import {combineReducers} from 'redux-immutable';
import {fromJS} from 'immutable';
import {addTopic, vote, delete_topic, addChoice} from './core';
import {LOCATION_CHANGE} from 'react-router-redux';

export function topics(state=[], action){
  switch(action.type){
    case 'SET_STATE':
      return (fromJS(action.state));
    case 'ADD_TOPIC':
      return addTopic(state, action.title, action.choices, action.creator);
    case 'DELETE':
      return delete_topic(state, action.i);
    case 'ADD_CHOICE':
      return addChoice(state, action.i, action.choice);
    case 'VOTE':
      return vote(state,action.index,action.choice)
  }
  return fromJS(state);
}
const user_state = fromJS({
  name: "",
  logged_in: false
});
export function user(state=user_state, action){
  switch(action.type){
    case 'SET_NAME':
      return (state.set('name', action.name));
    case 'LOGIN':
      return (state.set('logged_in', true));
  }
  return fromJS(state);
}

export function graphView(state="PIE", action){
  switch(action.type){
    case 'CHANGE_GRAPH':
      return action.view.toUpperCase();
  }
  return state;
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

export default combineReducers({topics, graphView, user, routing: routeReducer});
