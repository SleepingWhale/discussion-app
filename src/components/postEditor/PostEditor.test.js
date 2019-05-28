import React from 'react';
import { mount } from 'enzyme';
import { PostEditor } from './PostEditor';

describe('PostEditor', () => {
  it('should render correctly', () => {
    const onSubmitHandler = jest.fn();
    const component = mount(<PostEditor onSubmit={onSubmitHandler} />);

    expect(component).toMatchSnapshot();
  });

  it('should not submit without content', () => {
    const onSubmitHandler = jest.fn();
    const component = mount(<PostEditor onSubmit={onSubmitHandler} />);
    component.find('button').simulate('click');

    expect(onSubmitHandler).not.toHaveBeenCalled();
  });

  it('should submit with content', () => {
    const content = 'hello world';
    const onSubmitHandler = jest.fn();
    const component = mount(<PostEditor onSubmit={onSubmitHandler} />);
    const input = component.find('textarea').at(0);

    input.instance().value = content;
    input.simulate('change');
    expect(component.state().text).toEqual(content);

    component.find('button').simulate('click');
    expect(onSubmitHandler).toHaveBeenCalledWith(content);
  });
});
