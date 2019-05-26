import React from 'react';

import styles from './Posts.module.css';
import { Search } from '../common';
import { Post } from '../post';
import { PostEditor } from '../postEditor';
import { Comments } from '../comments';

export function Posts() {
  return (
    <div className={styles.container}>
      <div className={styles.search}>
        <Search onChange={() => {}} />
      </div>
      <PostEditor />
      <Post />
      <Comments />
      <Post />
    </div>
  );
}
