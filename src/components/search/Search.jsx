import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Search.module.css';

export class Search extends Component {
  static propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func.isRequired
  };

  static defaultProps = {
    value: ''
  };

  onChange = e => {
    const { onChange } = this.props;
    onChange(e.target.value);
  };

  handleClear = () => {
    const { onChange } = this.props;
    onChange('');
  };

  render() {
    const { value } = this.props;
    const shouldShowClear = value.length > 0;

    return (
      <div className={styles.container}>
        <input
          type="search"
          className={styles.input}
          placeholder="Search"
          value={value}
          onChange={this.onChange}
          ref={this.inputRef}
        />
        {shouldShowClear && (
          <button
            type="button"
            className={styles.clearBtn}
            onClick={this.handleClear}
          >
            <i className="material-icons md-18">cancel</i>
          </button>
        )}
      </div>
    );
  }
}
