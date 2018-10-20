import React, { Component } from 'react';
import classNames from 'classnames';

export default class LoadingIndicator extends Component {
  render() {
    return (
      <div className={classNames('loading__backdrop', {
        'loading__backdrop--hidden': this.props.hidden,
      })}>
        <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60" fill="none">
          <circle cx="29.5" cy="7.5" r="7.5" fill="white"/>
          <circle cx="29.5" cy="52.5" r="7.5" fill="white"/>
          <animateTransform attributeType="xml"
            attributeName="transform"
            type="rotate"
            from="0"
            to="360"
            dur="0.8s"
            repeatCount="indefinite"
          />
        </svg>
      </div>
    );
  }
}
