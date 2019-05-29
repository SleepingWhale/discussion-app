import reducer, { UPDATE, updateSearch } from './Search.redux';

const DATE_TO_USE = new Date();
global.Date = jest.fn(() => DATE_TO_USE);

describe('Search actions', () => {
  it('should create an action to like post', () => {
    const search = 'query';
    const expectedAction = {
      type: UPDATE,
      search
    };

    expect(updateSearch(search)).toEqual(expectedAction);
  });
});

describe('Search reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual('');
  });

  it('should handle SEARCH', () => {
    const search = 'query';
    expect(
      reducer([], {
        type: UPDATE,
        search
      })
    ).toEqual(search);
  });
});
