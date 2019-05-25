import React from 'react';
import styles from './PostEditor.module.css';
import { Button, UserPick } from '../common';

export function PostEditor() {
  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        <UserPick />
        <span className={styles.question}>What&apos;s happening?</span>
      </div>
      <textarea
        className={styles.text}
        maxLength={1000}
        rows={4}
        placeholder="Write something..."
      />
      <div className={styles.buttons}>
        <Button onClick={() => {}} mode="primary">
          Post
        </Button>
      </div>
    </div>
  );
}
