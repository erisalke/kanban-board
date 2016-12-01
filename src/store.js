import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import root from './reducers/rootReducer';
import thunk from 'redux-thunk';


let store = createStore(
	root,
	composeWithDevTools(
    applyMiddleware(thunk)
	)
);

export default store;
