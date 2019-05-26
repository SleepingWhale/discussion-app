import React from 'react';

import styles from './Posts.module.css';
import { Search } from '../common';
import { Post } from '../post';
import { PostEditor } from '../postEditor';

export function Posts({ posts }) {
  return (
    <div className={styles.container}>
      <div className={styles.search}>
        <Search onChange={() => {}} />
      </div>
      <PostEditor />
      {posts.map(p => (
        <Post {...p} />
      ))}
    </div>
  );
}
