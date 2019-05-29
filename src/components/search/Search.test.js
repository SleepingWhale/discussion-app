import React from 'react';
import { shallow, mount } from 'enzyme';
import { Search } from './Search';

describe('Search', () => {
  it('should render correctly', () => {
    const onChangeHandler = jest.fn();
    const component = shallow(
      <Search onChange={onChangeHandler} value="text" />
    );
    expect(component).toMatchSnapshot();
  });

  it('should clear input', () => {
    const onChangeHandler = jest.fn();
    const content = 'hello world';
    const component = mount(<Search onChange={onChangeHandler} value="text" />);
    const input = component.find('input').at(0);

    input.instance().value = content;
    input.simulate('change');

    expect(onChangeHandler).toHaveBeenNthCalledWith(1, content);

    const clearBtn = component.find('button');
    clearBtn.simulate('click');

    expect(onChangeHandler).toHaveBeenNthCalledWith(2, '');
  });
});
