import axios from "axios";

// action type
const SET_ITEM = "SET_ITEM";

// action creator
export const setItem = (item) => {
  return {
    type: SET_ITEM,
    item,
  };
};

// thunk
export const fetchItem = (itemId) => {
  return async (dispatch) => {
    const { data: item } = await axios.get(`/api/clothing/item/${itemId}`);
    dispatch(setItem(item));
  };
};

// reducer
export default function itemReducer(state = {}, action) {
  switch (action.type) {
    case SET_ITEM:
      return action.item;
    default:
      return state;
  }
}
