import React from 'react';
import TimeAgo from 'timeago-react';
import styles from './PostInfo.module.css';
import { UserPick, Button } from '../common';

export function PostInfo({ name, nickname, pick, date }) {
  return (
    <div className={styles.container}>
      <UserPick url={pick} />
      <div>
        <div>
          <strong className={styles.userName}>{name}</strong>
          <a href="/" className={styles.userLink}>
            {nickname}
          </a>
        </div>
        <TimeAgo datetime={date} className={styles.time} live={false} />
      </div>
      <Button
        type="button"
        onClick={() => {}}
        mode="outline"
        className={styles.followButton}
      >
        Follow
      </Button>
    </div>
  );
}
