import React from 'react';
import PropTypes from 'prop-types';
import styles from './Comment.module.css';
import { UserPick } from '../common';

export function Comment({ content, author }) {
  return (
    <div className={styles.container}>
      <UserPick url={author.pick} title={author.name} />
      <div className={styles.comment}>{content}</div>
    </div>
  );
}

Comment.propTypes = {
  content: PropTypes.string,
  author: PropTypes.shape({
    name: PropTypes.string,
    nickname: PropTypes.string,
    pick: PropTypes.string
  }).isRequired
};

Comment.defaultProps = {
  content: ''
};
