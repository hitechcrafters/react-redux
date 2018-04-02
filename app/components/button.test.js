import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Button from './Button';

Enzyme.configure({ adapter: new Adapter() });

function setup() {
  const props = {
    onClick: jest.fn(),
    text: '+',
  }

  const enzymeWrapper = mount(<Button {...props} />)

  return {
    props,
    enzymeWrapper,
  }
}

describe('Component', () => {
  describe('Button', () => {
    it('Should render self', () => {
      const { enzymeWrapper } = setup();

      expect(enzymeWrapper.find('button').hasClass('btn')).toBe(true);
      expect(enzymeWrapper.find('button').text()).toBe('+');
    });

    it('Simulates click event', () => {
      const { enzymeWrapper } = setup();

      enzymeWrapper.find('button').simulate('click');
      expect(enzymeWrapper.find('button').length).toBe(1);
    });
  })
})