import {createStore,compose} from 'redux';
import rootReducer from './reducers/index';
import {syncHistoryWithStore} from 'react-router-redux';
import {browserHistory} from 'react-router';

const store = createStore(rootReducer);
export default store;
export const history = syncHistoryWithStore(browserHistory,store);
