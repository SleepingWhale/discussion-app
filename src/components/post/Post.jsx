import React, { PureComponent, Fragment } from 'react';
import styles from './Post.module.css';
import { PostInfo } from '../userInfo';
import { Button } from '../common';
import { CommentsContainer } from '../comments';

export class Post extends PureComponent {
  state = {
    isCommentsOpened: false
  };

  toggleComments = () => {
    const { isCommentsOpened } = this.state;

    this.setState({
      isCommentsOpened: !isCommentsOpened
    });
  };

  render() {
    const { content, author, date, likes, onLikeClick, id } = this.props;
    const { isCommentsOpened } = this.state;

    return (
      <Fragment>
        <div className={styles.container}>
          <PostInfo {...author} date={date} />
          <hr className={styles.delimiter} />
          <div className={styles.text}>{content}</div>
          <div className={styles.buttons}>
            <Button onClick={onLikeClick} mode="primary">
              <i className="material-icons md-18">thumb_up</i>
              <span className={styles.ml04}>{likes}</span>
            </Button>
            <Button onClick={this.toggleComments} mode="primary">
              <i className="material-icons md-18">mode_comment</i>
              <span className={styles.ml04}>Comment - 0</span>
            </Button>
          </div>
        </div>
        {isCommentsOpened && <CommentsContainer postId={id} />}
      </Fragment>
    );
  }
}
