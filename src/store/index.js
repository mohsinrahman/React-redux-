import {createStore, combineReducers, applyMiddleware} from "redux";
import logger from "redux-logger";
//import thunk from "redux-thunk";

import promiseMiddleware from "redux-promise-middleware";

import kmitReducer from "./kmitReducer.js";

const store = combineReducers({

      kmit : kmitReducer

});


const createStorewithMiddleware = applyMiddleware(promiseMiddleware(), logger)(createStore);
export default createStorewithMiddleware(store);
