import { guid } from '../../utils';

// Actions
export const CREATE = 'discussion-app/posts/CREATE';
export const LIKE = 'discussion-app/posts/LIKE';

// Reducer
export default function reducer(state = [], action = {}) {
  switch (action.type) {
    case CREATE: {
      return [action.post, ...state];
    }
    case LIKE: {
      const index = state.findIndex(p => p.id === action.id);
      const post = state[index];

      return [
        ...state.slice(0, index),
        {
          ...post,
          isLiked: !post.isLiked,
          likes: post.isLiked ? post.likes - 1 : post.likes + 1
        },
        ...state.slice(index + 1)
      ];
    }
    default:
      return state;
  }
}

// Action Creators
export function createPost({ content, author }) {
  return {
    type: CREATE,
    post: {
      id: guid(),
      date: new Date(),
      content,
      author,
      likes: 0,
      isLiked: false
    }
  };
}

export function likePost(id) {
  return {
    type: LIKE,
    id
  };
}

// Selectors
export function getPosts(state) {
  return state.posts;
}
