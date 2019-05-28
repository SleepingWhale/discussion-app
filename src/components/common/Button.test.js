import React from 'react';
import { shallow } from 'enzyme';
import { Button } from './Button';

const onClickHandler = jest.fn();
const text = 'text';

describe('Button', () => {
  it('should render correctly', () => {
    const component = shallow(<Button onClick={onClickHandler}>{text}</Button>);
    expect(component).toMatchSnapshot();
  });

  it('should call onClickHandler', () => {
    const component = shallow(<Button onClick={onClickHandler}>{text}</Button>);

    component.find('button').simulate('click');

    expect(onClickHandler).toHaveBeenCalledTimes(1);
  });

  it('should render primary mode', () => {
    const component = shallow(
      <Button onClick={onClickHandler} mode="primary">
        {text}
      </Button>
    );

    expect(component.find('button').hasClass('primary')).toBe(true);
  });

  it('should render outline mode', () => {
    const component = shallow(
      <Button onClick={onClickHandler} mode="outline">
        {text}
      </Button>
    );

    expect(component.find('button').hasClass('outline')).toBe(true);
  });

  it('should render custom className', () => {
    const customClassName = 'customClassName';
    const component = shallow(
      <Button onClick={onClickHandler} className={customClassName}>
        {text}
      </Button>
    );

    expect(component.find('button').hasClass(customClassName)).toBe(true);
  });
});
