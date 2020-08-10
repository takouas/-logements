
import { createStore, applyMiddleware } from "redux";
import combineReducers from "./reducers/index";
import thunk from 'redux-thunk';
import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(
    combineReducers,
    composeWithDevTools(applyMiddleware(thunk))
);

export default store;