import axios from 'axios';
const EDIT_ITEM = 'EDIT_ITEM';
const DELETE_ITEM = 'DELETE_ITEM';

//ACTION CREATORS
export const _editItem = (item) => ({
    type: EDIT_ITEM,
    item
  });

  export const _deleteItem = (item) => ({
    type: DELETE_ITEM,
    item
  });

//THUNK CREATOR

export const editItem = (item) => {
  console.log("Thunk editItem item.id====>>", item.id)
    return async (dispatch) => {
      try {
      const { data: updated } = await axios.put(`/api/clothing/item/${item.id}`, item);
      dispatch(_editItem(updated));
      } catch (e) {
        console.log('editItem thunk error', e)
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

//REDUCER
export default function editItemReducer(state = [], action) {
  switch (action.type) {
    case EDIT_ITEM:
      console.log("reducer editItem")
      return state.map((item) =>
        (item.id === action.item.id ? action.item : item));
        case DELETE_ITEM:
          console.log("reducer deleteItem")
          return state.filter((item) => item.id !== action.item.id);  
      default:
        return state;
  }
}
