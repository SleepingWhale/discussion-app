import React from 'react';
import PropTypes from 'prop-types';
import styles from './UserPick.module.css';

export function UserPick({ url, title }) {
  return url ? (
    <img src={url} className={styles.img} alt="u" title={title} />
  ) : (
    <div className={styles.placeHolder} title={title}>
      <i className="material-icons md-24 md-light">sentiment_very_satisfied</i>
    </div>
  );
}

UserPick.propTypes = {
  url: PropTypes.string,
  title: PropTypes.string
};

UserPick.defaultProps = {
  url: null,
  title: ''
};
