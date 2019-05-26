import { connect } from 'react-redux';
import { PostEditor } from './PostEditor';
import { createPost } from '../posts/Posts.redux';

function mapStateToProps(state) {
  return {
    user: state.user
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onSubmit(content, user) {
      dispatch(
        createPost({
          content,
          author: user
        })
      );
    }
  };
}

function mergeProps(stateProps, dispatchProps, ownProps) {
  return {
    ...ownProps,
    onSubmit: content => dispatchProps.onSubmit(content, stateProps.user),
    userPickUrl: stateProps.user.pick
  };
}

export const PostEditorContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(PostEditor);
