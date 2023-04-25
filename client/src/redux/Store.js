import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import todosReducers from "./reducers/todoReducers";
const reducer = combineReducers({
  todos: todosReducers
});

const middleware = [thunk];

const Store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default Store;
