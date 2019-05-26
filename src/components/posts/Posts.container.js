import { connect } from 'react-redux';
import { Posts } from './Posts';
import { getPosts } from './Posts.redux';

function mapStateToProps(state) {
  return {
    posts: getPosts(state)
  };
}

export const PostsContainer = connect(mapStateToProps)(Posts);
