import axios from 'axios';
const EDIT_ITEM = 'EDIT_ITEM';

//ACTION CREATORS
export const _editItem = (item) => ({
    type: EDIT_ITEM,
    item
  });

//THUNK CREATOR
export const editItem = (item) => {
  console.log("thunk editItem")
    return async (dispatch) => {
      try {
      const { data: updated } = await axios.put(`/api/items/${item.id}`, item);
      dispatch(_editItem(updated));
      } catch (e) {
        console.log('editItem thunk error', e)
      }
    };
  };

//REDUCER
export default function editItemReducer(state = [], action) {
  switch (action.type) {
    case EDIT_ITEM:
      console.log("reducer editItem")
      return state.map((item) =>
        (item.id === action.item.id ? action.item : item));
      default:
        return state;
  }
}
