import axios from "axios";

// action type
const SET_CART = "SET_CART";

// action creator
export const setCart = (cart) => {
  return {
    type: SET_CART,
    cart,
  };
};

// thunk
export const fetchCart = () => {
  return async (dispatch) => {
    const { data: cart } = await axios.get(`/cart`);
    dispatch(setCart(cart));
  };
};

// reducer
export default function cartReducer(state = [], action) {
  switch (action.type) {
    case SET_CART:
      return action.cart;
    default:
      return state;
  }
}
