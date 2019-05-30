import 'react-app-polyfill/ie11';
import 'core-js/features/array/includes';
import 'core-js/features/array/filter';
import 'core-js/features/array/find-index';
import 'core-js/features/string/includes';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './styles/reset.css';
import './styles/global.css';
import { store } from './store';
import { PostsContainer } from './components/posts';

const App = () => (
  <Provider store={store}>
    <PostsContainer />
  </Provider>
);

ReactDOM.render(<App />, document.getElementById('root'));
