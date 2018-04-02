import Enzyme, { shallow } from 'enzyme';
import React from 'react';
import UserListContainer from './UserListContainer';
import configureStore from 'redux-mock-store';
import Adapter from 'enzyme-adapter-react-16';
import { addUser, deleteUser } from '../actions/userActions';
import { ADD_USER, DELETE_USER } from '../actions/userTypes';

const mockStore = configureStore();
Enzyme.configure({ adapter: new Adapter() });

describe('User List Container', () => {
  let wrapper, store;

  beforeEach(() => {
    store = mockStore({
      user: {
        users: [
          {
            name: 'Darek',
            id: 0,
          },
        ],
      },
    });

    wrapper = shallow(<UserListContainer store={store} />);

    store.dispatch = jest.fn();
  });

  it('Map state and dispatch to props', () => {
    expect(wrapper.props()).toEqual(expect.objectContaining({
      addUser: expect.any(Function),
      deleteUser: expect.any(Function),
    }));
    expect(store.getState().user.users).toEqual([{
      id: 0,
      name: "Darek",
    }]);
  });

  it('maps onIncrement to dispatch increment action', () => {
    store.dispatch(addUser('Paulina', 1));
    expect(store.dispatch).toHaveBeenCalledWith({
      type: ADD_USER,
      id: 1,
      name: 'Paulina',
    });
  });

  it('maps onDecrement to dispatch decrement action', () => {
    store.dispatch(deleteUser(1));
    expect(store.dispatch).toHaveBeenCalledWith({
      type: DELETE_USER,
      id: 1,
    });
  });
});
