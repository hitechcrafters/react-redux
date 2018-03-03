import React, { Component } from 'react';
import Button from './button';

class UserList extends Component {
  render() {
    const { users, addUser, deleteUser } = this.props;
    let nextId = 0;

    return (
      <div className="column margin-top50">
        <input
          className="input margin-bottom20"
          ref={node => {
            this.input = node;
          }}
          type="text"
        />
        <Button
          text="Add"
          onClick={() => {
            addUser(this.input.value, nextId);
            this.input.value = '';
          }}
        />
        <div>
          <ul className="width300">
            {
              users.map(user => {
                if (user.id >= nextId) nextId = user.id + 1;

                return (
                  <li
                    key={user.id}
                    className="margin-bottom20 flex"
                  >
                    {user.name}
                    <Button
                      text="Delete"
                      onClick={() => deleteUser(user.id)}
                    />
                  </li>
                );
              })
            }
          </ul>
        </div>
      </div>
    );
  }
};

export default UserList;