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
import editItemReducer from "./editItem";

const reducer = combineReducers({
  auth: auth,
  cart: cartReducer,
  clothing: clothingReducer,
  item: itemReducer,
  users: usersReducer,
  newItem: createNewItemReducer,
  editItem: editItemReducer,
});

const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({ collapsed: true }))
);

const store = createStore(reducer, middleware);

export default store;
export * from "./auth";
