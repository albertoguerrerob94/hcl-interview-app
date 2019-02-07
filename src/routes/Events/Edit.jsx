import React, { PureComponent } from 'react';
import { get } from 'axios';
import EventsForm from './Form';

export default class EventEdit extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      date: '',
      location: '',
      state: '',
      id: props.match.params.id
    };
    this.redirectToDashboard = this.redirectToDashboard.bind(this);
  }

  componentDidMount() {
    const url = `http://localhost:8081/events/${this.state.id}`;
    get(url).then(({ data }) => {
      this.setState({
        name: data.name,
        date: data.date,
        location: data.location,
        state: data.state
      });
    });
  }

  redirectToDashboard() {
    this.props.history.push('/events');
  }

  render() {
    return (
      <EventsForm
        id={this.state.id}
        title={this.state.name}
        name={this.state.name}
        date={this.state.date}
        location={this.state.location}
        state={this.state.state}
        redirect={this.redirectToDashboard}
        buttonTitle="Edit" />
    );
  }
}
