import axios from 'axios';
const CREATE_ITEM = 'CREATE_ITEM';

//ACTION CREATORS
export const _createNewItem = (item) => ({
   
  type: CREATE_ITEM,
  item
});

//THUNK CREATOR
export const createNewItem = (newItem) => {
  return async (dispatch) => {
    try {
        console.log(`*** createNewItem THUNK CREATOR - item ->${newItem}` )
        const { data: created } = await axios.post('/api/clothing', newItem);
        dispatch(_createNewItem(created));
    } catch (e) {
      console.log('_createNewItem thunk error', e)
    }
  };
};

//REDUCER
export default function createNewItemReducer(state = {}, action) {
  switch (action.type) {
    case CREATE_ITEM:
      return [...state, action.item];
      default:
        return state;
  }
}
