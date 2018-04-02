import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Display from './Display';

Enzyme.configure({ adapter: new Adapter() });

function setup() {
  const props = {
    value: '3',
  }

  const enzymeWrapper = mount(<Display {...props} />)

  return {
    props,
    enzymeWrapper,
  }
}

describe('Component', () => {
  describe('Display', () => {
    it('Should render self', () => {
      const { enzymeWrapper } = setup();

      expect(enzymeWrapper.find('h1').hasClass('margin-lft margin-rgt')).toBe(true);
      expect(enzymeWrapper.find('h1').text()).toBe('3');
    });
  })
})