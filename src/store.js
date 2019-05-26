import { combineReducers, createStore } from 'redux';
import posts from './components/posts/Posts.redux';
import search from './components/search/Search.redux';

export const store = createStore(
  combineReducers({
    posts,
    search,
    user: (state = {}) => state
  }),
  {
    posts: [
      {
        id: 1,
        date: Date.now(),
        content:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        author: {
          name: 'Neo',
          nickname: '@neo42',
          pick: 'http://placekitten.com/32/32?image=1'
        },
        likes: 5
      },
      {
        id: 2,
        date: Date.now(),
        content:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        author: {
          name: 'Agent Smith',
          nickname: '@smithy',
          pick: 'http://placekitten.com/32/32?image=2'
        },
        likes: 1
      }
    ],
    user: {
      name: 'Neo',
      nickname: '@neo42',
      pick: 'http://placekitten.com/32/32/0'
    }
  },
  window !== 'undefined' &&
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__()
);
