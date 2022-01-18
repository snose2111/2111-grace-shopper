import { createStore, combineReducers, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import auth from "./auth";
import clothingReducer from "./clothing";
import usersReducer from "./allUsers";
import createNewItemReducer from "./createNewItem";
import itemReducer from "./item";
import cartReducer from "./cart";

// This is a lot of reducers.
// I'm not sure you need this many.
// What's the difference between a user and auth?
// What's the difference between item, new item, and clothing?
const reducer = combineReducers({
  auth: auth,
  cart: cartReducer,
  clothing: clothingReducer,
  item: itemReducer,
  users: usersReducer,
  newItem: createNewItemReducer,
});

const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({ collapsed: true }))
);

const store = createStore(reducer, middleware);

export default store;
export * from "./auth";
