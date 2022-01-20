import axios from "axios";

// action type
const SET_CLOTHING = "SET_CLOTHING";
const DELETE_ITEM = 'DELETE_ITEM';

// action creator

export const setClothing = (clothing) => {
  return {
    type: SET_CLOTHING,
    clothing,
  };
};
export const _deleteItem = (item) => ({
  type: DELETE_ITEM,
  item
});

// thunk
export const fetchClothing = (category) => {
  return async (dispatch) => {
    if (category === "all") {
      const { data: clothing } = await axios.get("/api/clothing");
      dispatch(setClothing(clothing));
    } else {
      const { data: clothingCategory } = await axios.get(
        `/api/clothing/${category}`
      );
      dispatch(setClothing(clothingCategory));
    }
  };
};
export const deleteItem = (id) => {
  return async (dispatch) => {
    try {
    const {data: item} = await axios.delete(`/api/clothing/item/${id}`);
    dispatch(_deleteItem(item));
    } catch (e) {
      console.log('deleteItem thunk error', e)
    }
  };
};

// reducer
export default function clothingReducer(state = [], action) {
  switch (action.type) {
    case SET_CLOTHING:
      return action.clothing;
    case DELETE_ITEM:
      console.log("reducer deleteItem")
      return state.filter((item) => item.id !== action.item.id);
    default:
      return state;
  }
}
