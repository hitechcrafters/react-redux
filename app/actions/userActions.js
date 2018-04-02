import { ADD_USER, DELETE_USER } from './userTypes';

export const addUser = (userName, userId) => ({
  type: ADD_USER,
  name: userName,
  id: userId,
});

export const deleteUser = userId => ({
  type: DELETE_USER,
  id: userId,
});
