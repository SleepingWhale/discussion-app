import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './CommentEditor.module.css';
import { Button } from '../common';

export class CommentEditor extends Component {
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

    return (
      <div className={styles.container}>
        <textarea
          className={styles.text}
          maxLength={1000}
          rows={3}
          placeholder="Type anything"
          onChange={this.onChange}
          value={text}
        />
        <div className={styles.buttons}>
          <Button onClick={this.onSubmit} mode="primary">
            <i className="material-icons md-18">send</i>
            <span className={styles.ml04}>send</span>
          </Button>
        </div>
      </div>
    );
  }
}
