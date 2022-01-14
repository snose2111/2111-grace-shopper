import axios from 'axios';

//ACTION
const GET_USERS = 'GET_USERS';

//ACTION CREATORS
export const _getUsers = (users) => ({
    type: GET_USERS,
    users
  });

  //THUNK CREATORS
export const fetchUsers = () => {
    return async (dispatch) => {
      try {
      const { data: users } = await axios.get('/api/users');
      dispatch(_getUsers(users));
      } catch (e) {
        console.log('fetchUsers thunk error', e)
      }
    };
  };

  //REDUCER

export default function usersReducer(state = [], action) {
    switch (action.type) {
      case GET_USERS:
        return action.users;
      default:
        return state;
    }
  }