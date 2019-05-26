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
