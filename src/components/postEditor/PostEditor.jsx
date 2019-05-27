import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styles from './PostEditor.module.css';
import { Button, UserPick } from '../common';

export class PostEditor extends PureComponent {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired
  };

  state = {
    text: ''
  };

  onChange = e => {
    this.setState({
      text: e.target.value
    });
  };

  onSubmit = () => {
    const { text } = this.state;
    const { onSubmit } = this.props;

    onSubmit(text);

    this.setState({
      text: ''
    });
  };

  render() {
    const { text } = this.state;
    const { userPickUrl } = this.props;
    const isSubmitDisabled = text.length === 0;

    return (
      <div className={styles.container}>
        <div className={styles.heading}>
          <UserPick url={userPickUrl} />
          <span className={styles.question}>What&apos;s happening?</span>
        </div>
        <textarea
          className={styles.text}
          maxLength={1000}
          rows={4}
          placeholder="Write something..."
          onChange={this.onChange}
          value={text}
        />
        <div className={styles.buttons}>
          <Button
            onClick={this.onSubmit}
            mode="primary"
            disabled={isSubmitDisabled}
          >
            <span>Post</span>
          </Button>
        </div>
      </div>
    );
  }
}
