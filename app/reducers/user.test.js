import reducer from './user';
import * as types from '../actions/userTypes';

describe('user reducer', () => {
  it('should return state', () => {
    const testAction = {};
    const expectedState = {
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
      credentials: {
        login: 'darq',
        pass: 'darq',
      },
    };

    expect(reducer(undefined, testAction)).toEqual(expectedState);
  });

  it('should handle ADD_USER', () => {
    const testAction = {
      type: types.ADD_USER,
      name: 'Wiktor',
      id: 2,
    };
    const expectedState = {
      users: [
        {
          name: 'Darq',
          id: 0,
        },
        {
          name: 'Paulina',
          id: 1,
        },
        {
          name: 'Wiktor',
          id: 2,
        },
      ],
      credentials: {
        login: 'darq',
        pass: 'darq',
      },
    };

    expect(reducer(undefined, testAction)).toEqual(expectedState);
  });

  it('should handle DELETE_USER', () => {
    const testAction = {
      type: types.DELETE_USER,
      id: 1,
    };
    const expectedState = {
      users: [
        {
          name: 'Darq',
          id: 0,
        },
      ],
      credentials: {
        login: 'darq',
        pass: 'darq',
      },
    };

    expect(reducer(undefined, testAction)).toEqual(expectedState);
  });
});
