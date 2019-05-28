import React from 'react';
import { shallow } from 'enzyme';
import { Search } from './Search';

const onChangeHandler = jest.fn();
const text = 'text';

describe('Search', () => {
  it('should render correctly', () => {
    const component = shallow(
      <Search onChange={onChangeHandler} value={text} />
    );
    expect(component).toMatchSnapshot();
  });
});
