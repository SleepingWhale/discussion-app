import React, { PureComponent, Fragment } from 'react';
import cn from 'classnames';
import TimeAgo from 'timeago-react';
import styles from './Post.module.css';
import { Button, UserPick } from '../common';
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
    const {
      content,
      author,
      date,
      likes,
      onLikeClick,
      id,
      commentsCount,
      isLiked
    } = this.props;
    const { pick, name, nickname } = author;
    const { isCommentsOpened } = this.state;
    const hasComments = commentsCount > 0;
    const commentsCountView = hasComments
      ? `Comment - ${commentsCount}`
      : 'Comment';

    return (
      <Fragment>
        <div className={styles.container}>
          <div className={styles.postHeader}>
            <UserPick url={pick} title={name} />
            <div>
              <div>
                <strong className={styles.userName}>{name}</strong>
                <a href="/" className={styles.userLink}>
                  {nickname}
                </a>
              </div>
              <TimeAgo datetime={date} className={styles.time} live={false} />
            </div>
            <Button
              type="button"
              onClick={() => {}}
              mode="outline"
              className={styles.followButton}
            >
              Follow
            </Button>
          </div>
          <hr className={styles.delimiter} />
          <div className={styles.text}>{content}</div>
          <div className={styles.buttons}>
            <Button
              onClick={onLikeClick}
              mode="primary"
              className={styles.mr04}
            >
              <i
                className={cn(
                  {
                    'material-icons-outlined': !isLiked,
                    'material-icons': isLiked
                  },
                  'md-18'
                )}
              >
                thumb_up
              </i>
              {likes > 0 && <span className={styles.ml04}>{likes}</span>}
            </Button>
            <Button onClick={this.toggleComments} mode="primary">
              <i
                className={cn(
                  {
                    'material-icons-outlined': !hasComments,
                    'material-icons': hasComments
                  },
                  'md-18'
                )}
              >
                mode_comment
              </i>
              <span className={styles.ml04}>{commentsCountView}</span>
            </Button>
          </div>
        </div>
        {isCommentsOpened && <CommentsContainer postId={id} />}
      </Fragment>
    );
  }
}
