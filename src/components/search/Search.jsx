import React from 'react';
import PropTypes from 'prop-types';
import styles from './Search.module.css';

export function Search({ value, onChange }) {
  return (
    <input
      type="search"
      className={styles.input}
      placeholder="Search"
      value={value}
      onChange={onChange}
    />
  );
}

Search.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired
};

Search.defaultProps = {
  value: ''
};
