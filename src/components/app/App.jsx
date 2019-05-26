import React from 'react';
import './reset.css';
import './global.css';
import styles from './App.module.css';
import { Search } from '../common';
import { Post } from '../post';
import { PostEditor } from '../postEditor';
import { Comments } from '../comments';

export function App() {
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
