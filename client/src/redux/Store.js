import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import todosReducers from "./reducers/todoReducers";

// create all the reducers you want in a json format
const reducer = combineReducers({
  todos: todosReducers,
});

// middleware
const middleware = [thunk];

// create store using redux
const Store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default Store;
