import React from 'react';
import './reset.css';
import './global.css';
import styles from './App.module.css';
import { Search } from '../common';
import { Post } from '../post';
import { PostEditor } from '../postEditor';

export function App() {
  return (
    <div className={styles.container}>
      <div className={styles.search}>
        <Search onChange={() => {}} />
      </div>
      <PostEditor />
      <Post />
    </div>
  );
}
