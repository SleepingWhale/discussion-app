// Actions
const UPDATE = 'discussion-posts/search/UPDATE';

// Reducer
export default function reducer(state = '', action = {}) {
  switch (action.type) {
    case UPDATE: {
      return action.search;
    }
    default:
      return state;
  }
}

// Action Creators
export function updateSearch(search) {
  return { type: UPDATE, search };
}

// Selectors
export function getSearch(state) {
  return state.search;
}
