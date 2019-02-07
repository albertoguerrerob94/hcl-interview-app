import React, { Fragment, PureComponent } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class Actions extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { url: `http://localhost:8081/events/${props.id}` };
    this.deleteEvent = this.deleteEvent.bind(this);
    this.joinEvent = this.joinEvent.bind(this);
    this.cancelEvent = this.cancelEvent.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps);
  }

  deleteEvent() {
    axios.delete(this.state.url).then(() => {
      window.location.reload();
    });
  }

  joinEvent() {
    axios.get(`${this.state.url}/join?userid=${window.sessionStorage.getItem('userid')}`).then(() => {
      window.location.reload();
    });
  }

  cancelEvent() {
    axios.get(`${this.state.url}/cancel?userid=${window.sessionStorage.getItem('userid')}`).then(() => {
      window.location.reload();
    });
  }

  render() {
    if(this.props.currentUser) {
      return (
        <Fragment>
          <Link className="link" to={`/events/${this.props.id}/edit`}>Edit</Link>
          <div onClick={this.deleteEvent}><span className="link">Delete</span></div>
        </Fragment>
      );
    } else if(this.props.joining) {
      return (
        <Fragment>
          <span>Joining</span>
          <div onClick={this.cancelEvent}><span className="link">Cancel</span></div>
        </Fragment>
      );
    } else {
      return <div onClick={this.joinEvent}><span className="link">Join</span></div>
    }
  }
}
