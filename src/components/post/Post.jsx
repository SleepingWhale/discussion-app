import React from 'react';
import styles from './Post.module.css';
import { PostInfo } from '../userInfo';
import { Button } from '../common';

export function Post({ content, author, date, likes, onLikeClick }) {
  return (
    <div className={styles.container}>
      <PostInfo {...author} date={date} />
      <hr className={styles.delimiter} />
      <div className={styles.text}>{content}</div>
      <div className={styles.buttons}>
        <Button onClick={onLikeClick} mode="primary">
          <i className="material-icons md-18">thumb_up</i>
          <span className={styles.ml04}>{likes}</span>
        </Button>
        <Button onClick={() => {}} mode="primary">
          <i className="material-icons md-18">mode_comment</i>
          <span className={styles.ml04}>Comment - 0</span>
        </Button>
      </div>
    </div>
  );
}
