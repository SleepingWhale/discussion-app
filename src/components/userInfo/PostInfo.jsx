import React from 'react';
import styles from './UserInfo.module.css';
import { UserPick, Button } from '../common';

export function PostInfo({ name, nickname, pick, date }) {
  return (
    <div className={styles.container}>
      <UserPick url={pick} />
      <div className={styles.mr}>
        <strong className={styles.userName}>{name}</strong>
        <span className={styles.time}>{date}</span>
      </div>
      <a href="/" className={styles.userLink}>
        {nickname}
      </a>
      <div className={styles.followButton}>
        <Button type="button" onClick={() => {}} mode="outline">
          Follow
        </Button>
      </div>
    </div>
  );
}
