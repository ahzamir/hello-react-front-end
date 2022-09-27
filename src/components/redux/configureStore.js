import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import greetingReducer from './greeting';
import logger from 'redux-logger';

const reducer = combineReducers({
    greeting: greetingReducer,
});

const store = createStore(reducer, {}, applyMiddleware(thunk, logger));
export default store;
