import axios from 'axios';
const EDIT_ITEM = 'EDIT_ITEM';


//ACTION CREATORS
export const _editItem = (item) => ({
    type: EDIT_ITEM,
    item
  });

  

//THUNK CREATOR

export const editItem = (item, history) => {
  console.log("Thunk editItem item.id====>>", item.id)
    return async (dispatch) => {
      try {
      const { data: updated } = await axios.put(`/api/clothing/item/${item.id}`, item);
      dispatch(_editItem(updated));
      history.push("/shop/all");
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
        // case DELETE_ITEM:
        //   console.log("reducer deleteItem")
        //   return state.filter((item) => item.id !== action.item.id);  
      default:
        return state;
  }
}
