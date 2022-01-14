import { createStore, combineReducers, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import auth from "./auth";
import clothingReducer from "./clothing";
import usersReducer from "./allUsers";
import createNewItemReducer from "./createNewItem"

const reducer = combineReducers({ auth: auth, clothing: clothingReducer, users: usersReducer, newItem: createNewItemReducer  });

const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({ collapsed: true }))
);

const store = createStore(reducer, middleware);

export default store;
export * from "./auth";
