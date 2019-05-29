import reducer, { CREATE, createComment } from './Comments.redux';
import * as dependency from '../../utils';

const DATE_TO_USE = new Date();
global.Date = jest.fn(() => DATE_TO_USE);

describe('Posts actions', () => {
  it('should create an action to create post', () => {
    const content = 'Some text';
    const author = {};
    const postId = 123;
    const commentId = 321;
    dependency.guid = jest.fn(() => commentId);
    const expectedAction = {
      type: CREATE,
      comment: {
        id: commentId,
        date: DATE_TO_USE,
        content,
        author
      },
      postId
    };

    expect(createComment({ content, author }, postId)).toEqual(expectedAction);
  });
});

describe('Comments reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({});
  });

  it('should handle CREATE first comment', () => {
    expect(
      reducer(
        {},
        {
          type: CREATE,
          comment: { c: 1 },
          postId: 'postId'
        }
      )
    ).toEqual({ postId: [{ c: 1 }] });
  });

  it('should handle CREATE subsequent comment', () => {
    expect(
      reducer(
        { postId: [{ c: 1 }] },
        {
          type: CREATE,
          comment: { c: 2 },
          postId: 'postId'
        }
      )
    ).toEqual({ postId: [{ c: 2 }, { c: 1 }] });
  });
});
