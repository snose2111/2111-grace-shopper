import axios from "axios";

//dummy data
const dummyCart = [
  {
    type: "accessories",
    name: "Chubby Huggy Hoop",
    price: 38.0,
    description: "Silver (Single) Earring",
    color: "silver",
    quantity: 24,
    ImageURL:
      "https://www.catbirdnyc.com/media/catalog/product/cache/76a94e0cda397936c0138d2cf05d7fe1/h/u/huggiehoop-ss-p1.jpg",
  },
  {
    type: "tops",
    name: "something top",
    price: 150.0,
    description: "Sparkly Shirt",
    color: "green",
    quantity: 89,
    ImageURL:
      "https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_1086,w_724/c_scale,h_480/f_auto,q_auto/221232F107011_1/rick-owens-silver-seb-blouse.jpg",
  },
  {
    type: "bottoms",
    name: "Something Pants",
    price: 140.0,
    description: "Pencil Skirt",
    color: "orange",
    quantity: 999,
    ImageURL:
      "https://img.ssensemedia.com/images/f_auto,q_auto:best/202387F090217_1/kenzo-orange-straight-miniskirt.jpg",
  },
];

// action type
const SET_CART = "SET_CART";
const ADD_CART_ITEM = "ADD_CART_ITEM";
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

// thunk

// me function is setting auth on state to the user object
// pass that auth/user object to the cart component
// inside cart thunk, get token from local storage
// when we call the fetchCart thunk inside our component, fetchCart takes in as a parameter auth.id
// const cart = await axios.get(`api/users/${auth.id}/cart, header authorization token`)


// export const fetchCart = () => async dispatch => {
// if logged in --> {
//     const res = await axios.get(`/api/users/:userId/cart/`)
//     return dispatch(setCart(res.data))
// }
// else // user not logged in {
//  return dispatch (setCart([]))
//}
// }

export const fetchCart = () => {
  return async (dispatch) => {
    dispatch(setCart(dummyCart));
  };
};


export const addToCart = (itemId) => {
  return async (dispatch) => {
    // probably want to fetch item from database by its id
    // then if the user is logged in & everything's authenticated, add it to that user's cart
    // otherwise just add it to front-end cart --> get localstorage cart, iterate thru it, if it is already in cart, update quantity, dispatch as new item; else, dispatch new item
    const dummyItem = {
      type: "shirt",
      name: "T-shirt",
      price: 120.0,
      description: "Blue shirt",
      color: "blue",
      quantity: 1,
      ImageURL:
        "https://img.ssensemedia.com/images/f_auto,q_auto:best/202387F090217_1/kenzo-orange-straight-miniskirt.jpg",
    };
    dispatch(addCartItem(dummyItem));
  };
};

// reducer
export default function cartReducer(state = [], action) {
  switch (action.type) {
    case SET_CART:
      return action.cart;
    case ADD_CART_ITEM:
      return [...state, action.item];
    default:
      return state;
  }
}
