// Actions
const CREATE = 'discussion-posts/post/CREATE';

// Reducer
export default function reducer(state = [], action = {}) {
  switch (action.type) {
    case CREATE: {
      return [action.post, ...state];
    }
    default:
      return state;
  }
}

// Action Creators
export function createPost(post) {
  return { type: CREATE, post };
}

// Selectors
export function getPosts(state) {
  return state.posts;
}
