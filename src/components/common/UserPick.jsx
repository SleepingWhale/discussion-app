import React from 'react';
import PropTypes from 'prop-types';
import styles from './UserPick.module.css';

export function UserPick({ url }) {
  return <img src={url} className={styles.img} alt="user_pick" />;
}

UserPick.propTypes = {
  url: PropTypes.string
};

UserPick.defaultProps = {
  url: 'http://placekitten.com/32/32'
};
