import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import UserList from './Userlist';

Enzyme.configure({ adapter: new Adapter() });

function setup() {
  const props = {
    users: [
      {
        name: 'Darq',
        id: 0,
      },
    ],
    addUser: jest.fn(),
    deleteUser: jest.fn(),
  };

  const enzymeWrapper = mount(<UserList {...props} />)

  return {
    props,
    enzymeWrapper,
  }
}

describe('Component', () => {
  describe('Userlist', () => {
    it('Should render self', () => {
      const { enzymeWrapper } = setup();

      expect(enzymeWrapper.find('input').hasClass('input margin-bottom20')).toBe(true);
      expect(enzymeWrapper.find('ul').hasClass('width300')).toBe(true);
      expect(enzymeWrapper.find('li').hasClass('margin-bottom20 flex')).toBe(true);
    });
  });
});
