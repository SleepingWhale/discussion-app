import React from 'react';
import styles from './CommentEditor.module.css';
import { Button } from '../common';

export function CommentEditor() {
  return (
    <div className={styles.container}>
      <textarea
        className={styles.text}
        maxLength={1000}
        rows={3}
        placeholder="Type anything"
      />
      <div className={styles.buttons}>
        <Button onClick={() => {}} mode="primary">
          <i className="material-icons md-18">send</i>
          <span className={styles.ml04}>send</span>
        </Button>
      </div>
    </div>
  );
}
