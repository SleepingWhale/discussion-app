import React from 'react';
import { shallow } from 'enzyme';
import { Posts } from './Posts';

describe('Posts', () => {
  it('should render correctly', () => {
    const component = shallow(<Posts posts={[]} />);
    expect(component).toMatchSnapshot();
  });
});
