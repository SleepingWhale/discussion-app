import React from 'react';
import { shallow } from 'enzyme';
import { UserPick } from './UserPick';

const url = '/some/path';
const title = 'hello world';

describe('UserPick', () => {
  it('should render img correctly', () => {
    const component = shallow(<UserPick url={url} title={title} />);
    expect(component).toMatchSnapshot();
  });

  it('should render placeholder correctly', () => {
    const component = shallow(<UserPick />);
    expect(component).toMatchSnapshot();
  });
});
