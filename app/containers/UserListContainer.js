import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addUser, deleteUser } from '../actions/userActions';
import UserList from '../components/userlist';


const mapStateToProps = (state) => ({
    users: state.user.users,
  }
);

const mapDispatchToProps = (dispatch) => {
  return {
    addUser: (userName, userId) => dispatch(addUser(userName, userId)),
    deleteUser: (userId) => dispatch(deleteUser(userId)),
  };
};

const UserListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(UserList);

export default UserListContainer;