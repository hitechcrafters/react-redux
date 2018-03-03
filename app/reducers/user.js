import { FETCH_USERS, ADD_USER, DELETE_USER } from "../actions/userActions";

const initialState = {
  users: [
    {
      name: 'Darq',
      id: 0,
    },
    {
      name: 'Paulina',
      id: 1,
    },
  ],
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS:
      return state;
    case ADD_USER:
      return {
        ...state,
        users: [
          ...state.users,
          {
            name: action.name,
            id: action.id,
          },
        ],
      };
    case DELETE_USER:
      return {
        ...state,
        users: [
          ...state.users.filter(user => user.id !== action.id),
        ],
      }
    default:
      return state;
  }
}

export default user;