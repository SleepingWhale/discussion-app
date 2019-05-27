import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import styles from './Button.module.css';

export function Button({ onClick, mode, children, ...rest }) {
  const className = cn(styles.base, styles[mode]);

  return (
    <button {...rest} type="button" onClick={onClick} className={className}>
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
