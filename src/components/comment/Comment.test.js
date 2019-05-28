import React from 'react';
import { shallow } from 'enzyme';
import { Comment } from './Comment';

const author = {
  name: 'Agent Smith',
  nickname: '@smithy',
  pick: 'http://placekitten.com/32/32?image=2'
};
const content = 'content';

describe('Comment', () => {
  it('should render correctly', () => {
    const component = shallow(<Comment author={author} content={content} />);
    expect(component).toMatchSnapshot();
  });
});
