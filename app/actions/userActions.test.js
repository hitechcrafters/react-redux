import * as actions from './userActions';
import * as types from './userTypes';

describe('actions', () => {
  it('should create an action add user', () => {
    const testName = 'Darek';
    const testId = 0;
    const expectedAction = {
      type: types.ADD_USER,
      id: testId,
      name: testName,
    };

    expect(actions.addUser(testName, testId)).toEqual(expectedAction);
  });

  it('should reate an action delete user', () => {
    const testId = 0;
    const expectedAction = {
      type: types.DELETE_USER,
      id: testId,
    };

    expect(actions.deleteUser(testId)).toEqual(expectedAction);
  });
});
