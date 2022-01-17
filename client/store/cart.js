import axios from "axios";

// action type
const SET_CART = "SET_CART";
const TOKEN = "token"
// action creator
export const setCart = (cart) => {
  return {
    type: SET_CART,
    cart,
  };
};

// thunk
// me function is setting auth on state to the user object
            // pass that auth/user object to the cart component
            // inside cart thunk, get token from local storage
            // when we call the fetchCart thunk inside our component, fetchCart takes in as a parameter auth.id
            // const cart = await axios.get(`api/users/${auth.id}/cart, header authorization token`)
export const fetchCart = (id) => async dispatch => {
  const token = window.localStorage.getItem(TOKEN)
  // if (token) {
    const res = await axios.get(`/api/users/${id}/cart`, {
      headers: {
        authorization: token
      }
    })
    return dispatch(setCart(res.data))
  }
// }

// reducer
export default function cartReducer(state = [], action) {
  switch (action.type) {
    case SET_CART:
      return action.cart;
    default:
      return state;
  }
}
