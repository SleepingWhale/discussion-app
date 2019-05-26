import React from 'react';

import styles from './Posts.module.css';
import { SearchContainer } from '../search';
import { Post } from '../post';
import { PostEditor } from '../postEditor';

export function Posts({ posts }) {
  return (
    <div className={styles.container}>
      <div className={styles.search}>
        <SearchContainer />
      </div>
      <PostEditor />
      {posts.map(p => (
        <Post {...p} key={p.id} />
      ))}
    </div>
  );
}
