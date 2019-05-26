import React from 'react';
import styles from './Comments.module.css';
import { CommentEditor } from '../commentEditor';
import { Comment } from '../comment';

export function Comments() {
  return (
    <div className={styles.container}>
      <CommentEditor />
      <Comment />
      <Comment />
    </div>
  );
}
