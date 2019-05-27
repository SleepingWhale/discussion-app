import React from 'react';
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
