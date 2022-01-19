import axios from 'axios';
const CREATE_ITEM = 'CREATE_ITEM';

//ACTION CREATORS
export const _createNewItem = (item) => {
    return {
      type: CREATE_ITEM,
      item,
    };
  };

//THUNK CREATOR
export const createNewItem = (newItem, history) => {
  console.log("history from thunk====>", history)
  return async (dispatch) => {
    try {
        const { data: created } = await axios.post('/api/clothing', newItem);
        dispatch(_createNewItem(created));
        history.push("/shop/all");
    } catch (e) {
      console.log('_createNewItem thunk error', e)
    }
  };
};

//REDUCER
export default function createNewItemReducer(state = {}, action) {
  switch (action.type) {
    case CREATE_ITEM:
      return action.item;
      default:
        return state;
  }
}
