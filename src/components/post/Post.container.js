import { connect } from 'react-redux';
import { Post } from './Post';
import { likePost } from '../posts/Posts.redux';

function mapDispatchToProps(dispatch, ownProps) {
  return {
    onLikeClick() {
      dispatch(likePost(ownProps.id));
    }
  };
}

export const PostContainer = connect(
  null,
  mapDispatchToProps
)(Post);
