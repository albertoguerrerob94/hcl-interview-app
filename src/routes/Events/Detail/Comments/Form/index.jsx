import React, { PureComponent } from 'react';
import { post } from 'axios';
import './styles.css';

export default class CommentForm extends PureComponent {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = { comment: '' };
  }

  handleSubmit(ev) {
    ev.preventDefault();
    const url = `http://localhost:8081/events/${this.props.eventId}/comment`;
    post(url, {
      author: window.sessionStorage.getItem('username'),
      message: this.state.comment
    }).then(() => {
      window.location.reload();
    });
  }

  handleChange(ev) {
    const { name, value } = ev.target;
    this.setState({ [name]: value });
  }

  render() {
    return (
      <div className="comment__form">
        <span>Add comment</span>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group row">
            <textarea
              name="comment"
              cols="30"
              value={this.state.comment}
              onChange={this.handleChange} />
          </div>
          <div className="form-group row">
            <button type="submit" className="btn btn-primary mb-2">Submit</button>
          </div>
        </form>
      </div>
    );
  }
}
