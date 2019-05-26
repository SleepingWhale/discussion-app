import { connect } from 'react-redux';
import { Posts } from './Posts';
import { getPosts } from './Posts.redux';
import { getSearch } from '../search/Search.redux';

function mapStateToProps(state) {
  const search = getSearch(state).toLowerCase();
  const posts = getPosts(state);

  return {
    posts: posts.filter(p => p.content.toLowerCase().includes(search))
  };
}

export const PostsContainer = connect(mapStateToProps)(Posts);
