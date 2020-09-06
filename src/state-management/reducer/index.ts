import { combineReducers } from 'redux';
import { History }  from 'history';
import { connectRouter } from 'connected-react-router';

import { counterReducer } from '../slice/counter-slice';

export const createRootReducer = (history: History) => combineReducers({
    router: connectRouter(history),
    counter: counterReducer
});