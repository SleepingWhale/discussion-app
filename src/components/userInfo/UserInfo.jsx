import React from 'react';
import styles from './UserInfo.module.css';
import { UserPick, Button } from '../common';

export function UserInfo() {
  return (
    <div className={styles.container}>
      <UserPick />
      <div className={styles.mr}>
        <strong className={styles.userName}>User Name</strong>
        <span className={styles.time}>10 mins ago</span>
      </div>
      <a href="/" className={styles.userLink}>
        @user_link
      </a>
      <div className={styles.followButton}>
        <Button type="button" onClick={() => {}} mode="outline">
          Follow
        </Button>
      </div>
    </div>
  );
}
