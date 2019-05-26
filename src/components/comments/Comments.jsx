import React from 'react';
import styles from './Comments.module.css';
import { CommentEditorContainer } from '../commentEditor';
import { Comment } from '../comment';

export function Comments({ comments, postId }) {
  return (
    <div className={styles.container}>
      <CommentEditorContainer postId={postId} />
      {comments.map(c => (
        <Comment {...c} key={c.id} />
      ))}
    </div>
  );
}
