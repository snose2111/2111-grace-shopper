import axios from "axios";
import { DELETE } from "sequelize/dist/lib/query-types";

// action type
const SET_CART = "SET_CART";
const ADD_CART_ITEM = "ADD_CART_ITEM";
const ADD_LOCAL_CART_ITEM = "ADD_LOCAL_CART_ITEM";
const DELETE_CART_ITEM = "DELETE_CART_ITEM";

const TOKEN = "token";

// action creator
export const setCart = (cart) => {
  return {
    type: SET_CART,
    cart,
  };
};

export const addCartItem = (item) => {
  return {
    type: ADD_CART_ITEM,
    item,
  };
};

export const addLocalCartItem = (item) => {
  return {
    type: ADD_LOCAL_CART_ITEM,
    item,
  };
};

export const deleteCartItem = (item) => {
  return {
    type: DELETE_CART_ITEM,
    item,
  };
};

// thunk
export const fetchCart = (userId) => async (dispatch) => {
  let token = window.localStorage.getItem(TOKEN);
  const res = await axios.get(`/api/cart/${userId}`, {
    headers: { authorization: token },
  });
  return dispatch(setCart(res.data));
};

export const addToCart = (userId, item) => {
  return async (dispatch) => {
    if (userId) {
      const res = await axios.post(`/api/cart/${userId}/${item.id}`, item);
      dispatch(addCartItem(res.data));
    } else {
      dispatch(addLocalCartItem(addNewItem(item)));
    }
  };
};

const addNewItem = (item) => {
  console.log("ITEM", item);
  let localItems = JSON.parse(localStorage.getItem("cart")) || [];
  let localItem = localItems.find((localItem) => localItem.id === item.id);
  console.log("LOCAL ITEM", localItems);
  if (localItem) {
    localItem.count = Number(localItem.count) + 1;
  } else {
    localItems.push(item);
    console.log("LOCAL ITEMSS", localItems);
  }
  localStorage.setItem("cart", JSON.stringify(localItems));
  return localItems;
};

export const deleteFromCart = (cartId, itemId) => {
  return async (dispatch) => {
    const res = await axios.delete(`/api/cart/${cartId}/${itemId}`);
    dispatch(deleteCartItem(res.data));
  };
};

// reducer
export default function cartReducer(state = [], action) {
  switch (action.type) {
    case SET_CART:
      return action.cart;
    case ADD_CART_ITEM:
      const doesExist = state.filter(
        (item) => item.clothingId === action.item.clothingId
      );
      if (doesExist.length) {
        return state.map((item) =>
          item.clothingId === action.item.clothingId ? action.item : item
        );
      } else {
        return [...state, action.item];
      }
    case ADD_LOCAL_CART_ITEM:
      return action.item;
    case DELETE_CART_ITEM:
      return state.filter((item) => item.clothingId !== action.item.clothingId);
    default:
      return state;
  }
}
