import axios from "axios";

// action type
const SET_CLOTHING = "SET_CLOTHING";

// action creator
export const setClothing = (clothing) => {
  return {
    type: SET_CLOTHING,
    clothing,
  };
};

// thunk
export const fetchClothing = () => {
  return async (dispatch) => {
    const { data: clothing } = await axios.get("/api/clothing");
    dispatch(setClothing(clothing));
  };
};

// reducer
export default function clothingReducer(state = [], action) {
  switch (action.type) {
    case SET_CLOTHING:
      return action.clothing;
    default:
      return state;
  }
}
