export const FETCH_USERS = 'FETCH_USERS';
export const ADD_USER = 'ADD_USER';
export const DELETE_USER = 'DELETE_USER';

export const fetchUsers = {
  type: FETCH_USERS,
};

export const addUser = (userName, userId) => ({
  type: ADD_USER,
  name: userName,
  id: userId,
});

export const deleteUser = userId => ({
  type: DELETE_USER,
  id: userId,
});
