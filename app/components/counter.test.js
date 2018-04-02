import React from 'react';
import Counter from './Counter';
import renderer from 'react-test-renderer';

it('Renders correctly', () => {
  const component = renderer
    .create(<Counter />);

    expect(component).toMatchSnapshot();
});
