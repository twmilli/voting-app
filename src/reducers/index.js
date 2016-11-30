import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import topics from './topics';

export default combineReducers({topics,routing: routerReducer});
