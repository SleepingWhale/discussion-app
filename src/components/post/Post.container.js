import { connect } from 'react-redux';
import { Post } from './Post';
import { likePost } from '../posts/Posts.redux';
import { getCommentsCount } from '../comments/Comments.redux';

function mapStateToProps(state, ownProps) {
  return {
    commentsCount: getCommentsCount(state, ownProps.id)
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    onLikeClick() {
      dispatch(likePost(ownProps.id));
    }
  };
}

export const PostContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Post);
