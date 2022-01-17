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
    console.log(window.localStorage.getItem("token"));
    dispatch(setCart(dummyCart));
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
