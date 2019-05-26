import { connect } from 'react-redux';
import { Comments } from './Comments';
import { getComments } from './Comments.redux';

function mapStateToProps(state, ownProps) {
  return {
    comments: getComments(state, ownProps.postId)
  };
}

export const CommentsContainer = connect(mapStateToProps)(Comments);
