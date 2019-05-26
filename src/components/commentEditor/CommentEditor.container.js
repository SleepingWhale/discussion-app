import { connect } from 'react-redux';
import { createComment } from '../comments/Comments.redux';
import { CommentEditor } from './CommentEditor';

function mapStateToProps(state) {
  return {
    user: state.user
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onSubmit(content, user, postId) {
      dispatch(
        createComment(
          {
            content,
            author: user
          },
          postId
        )
      );
    }
  };
}

function mergeProps(stateProps, dispatchProps, ownProps) {
  return {
    ...ownProps,
    onSubmit: content =>
      dispatchProps.onSubmit(content, stateProps.user, ownProps.postId)
  };
}

export const CommentEditorContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(CommentEditor);
