import React from 'react';
import styles from './Comment.module.css';
import { UserPick } from '../common';

export function Comment() {
  return (
    <div className={styles.container}>
      <UserPick />
      <div className={styles.comment}>
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout. The point of
        using Lorem Ipsum is that it has a more-or-less normal distribution of
        letters,
      </div>
    </div>
  );
}
