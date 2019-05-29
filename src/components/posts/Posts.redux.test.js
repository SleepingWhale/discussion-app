import reducer, { CREATE, LIKE, likePost, createPost } from './Posts.redux';
import * as dependency from '../../utils';

const DATE_TO_USE = new Date();
global.Date = jest.fn(() => DATE_TO_USE);

describe('Posts actions', () => {
  it('should create an action to create post', () => {
    const content = 'Some text';
    const author = {};
    const id = 123;
    dependency.guid = jest.fn(() => id);
    const expectedAction = {
      type: CREATE,
      post: {
        date: DATE_TO_USE,
        id,
        content,
        author,
        likes: 0,
        isLiked: false
      }
    };

    expect(createPost({ content, author })).toEqual(expectedAction);
  });

  it('should create an action to like post', () => {
    const id = 123;
    const expectedAction = {
      type: LIKE,
      id
    };

    expect(likePost(id)).toEqual(expectedAction);
  });
});

describe('Posts reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual([]);
  });

  it('should handle CREATE', () => {
    expect(
      reducer([], {
        type: CREATE,
        post: { content: 1 }
      })
    ).toEqual([{ content: 1 }]);
  });

  it('should handle LIKE', () => {
    expect(
      reducer(
        [
          { content: 'text 1', id: 111, isLiked: false, likes: 0 },
          { content: 'text 1', id: 222, isLiked: false, likes: 0 }
        ],
        {
          type: LIKE,
          id: 222
        }
      )
    ).toEqual([
      { content: 'text 1', id: 111, isLiked: false, likes: 0 },
      { content: 'text 1', id: 222, isLiked: true, likes: 1 }
    ]);
  });

  it('should handle unLIKE', () => {
    expect(
      reducer(
        [
          { content: 'text 1', id: 111, isLiked: false, likes: 0 },
          { content: 'text 1', id: 222, isLiked: true, likes: 1 }
        ],
        {
          type: LIKE,
          id: 222
        }
      )
    ).toEqual([
      { content: 'text 1', id: 111, isLiked: false, likes: 0 },
      { content: 'text 1', id: 222, isLiked: false, likes: 0 }
    ]);
  });
});
