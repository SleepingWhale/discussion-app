import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import styles from './Button.module.css';

export function Button({ onClick, mode, children, className, ...rest }) {
  const _className = cn(styles.base, styles[mode], className);

  return (
    <button {...rest} type="button" onClick={onClick} className={_className}>
      {children}
    </button>
  );
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  mode: PropTypes.oneOf(['primary', 'outline'])
};

Button.defaultProps = {
  mode: 'primary'
};
