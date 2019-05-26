import { guid } from '../../utils';

// Actions
const CREATE = 'discussion-app/comments/CREATE';

// Reducer
export default function reducer(state = {}, action = {}) {
  switch (action.type) {
    case CREATE: {
      const { postId, comment } = action;
      const postHasComments = Object.prototype.hasOwnProperty.call(
        state,
        postId
      );
      const comments = postHasComments
        ? [comment, ...state[postId]]
        : [comment];

      return {
        ...state,
        [postId]: comments
      };
    }
    default:
      return state;
  }
}

// Action Creators
export function createComment(comment, postId) {
  return {
    type: CREATE,
    comment: {
      id: guid(),
      date: new Date(),
      ...comment
    },
    postId
  };
}

// Selectors
export function getComments(state, id) {
  return state.comments[id] || [];
}
