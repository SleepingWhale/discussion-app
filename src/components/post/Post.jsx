import React from 'react';
import styles from './Post.module.css';
import { UserInfo } from '../userInfo';
import { Button } from '../common';

export function Post() {
  return (
    <div className={styles.container}>
      <UserInfo />
      <hr className={styles.delimiter} />
      <div className={styles.text}>
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout. The point of
        using Lorem Ipsum is that it has a more-or-less normal distribution of
        letters, as opposed to using Content here, content here, making it look
        like readable English. Many desktop publishing packages and web page
        editors now use Lorem Ipsum as their default model text, and a search
        for lorem ipsum will uncover many web sites still in their infancy.
        Various versions have evolved over the years, sometimes by accident,
        sometimes on purpose (injected humour and the like).
      </div>
      <div className={styles.buttons}>
        <Button onClick={() => {}} mode="primary">
          99
        </Button>
        <Button onClick={() => {}} mode="primary">
          Comment
        </Button>
      </div>
    </div>
  );
}
