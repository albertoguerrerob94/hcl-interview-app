import React, { PureComponent, Fragment } from 'react';
import CommentForm from './Form';

export default class EventDetailComments extends PureComponent {
  render() {
    const value = this.props.comments.reduce((acc, comment) => {
      return acc += `${comment.author}: ${comment.message}\n\n----------\n\n`;
    }, '').slice(0, -14);

    return (
      <Fragment>
        <h2>Comment wall</h2>
        <textarea value={value} rows="10" cols="30" readOnly></textarea>
        <CommentForm eventId={this.props.eventId} />
      </Fragment>
    );
  }
}
