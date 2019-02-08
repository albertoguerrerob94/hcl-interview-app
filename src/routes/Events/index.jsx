import React, { PureComponent, Fragment } from 'react';
import { get } from 'axios';
import Header from './Header';
import EventsTable from './Table';
import EventsForm from './Form';
import './styles.css';

export default class Events extends PureComponent {
  constructor() {
    super();
    this.state = { inStateEvents: [], outStateEvents: [] };
  }

  componentDidMount() {
    get('https://aqueous-plains-25700.herokuapp.com/events').then(({ data: events }) => {
      const state = window.sessionStorage.getItem('userstate');
      this.setState({
        inStateEvents: events.filter(event => event.state === state),
        outStateEvents: events.filter(event => event.state !== state),
      });
    });
  }

  render() {
    return (
      <div className="landpage">
        <Header />

        { this.state.inStateEvents.length > 0 ?
            <Fragment>
            <p>Here are some of the events in your state</p>
            <EventsTable events={this.state.inStateEvents} />
            </Fragment> :
            <p>No events in your state :(</p>
        }

        { this.state.outStateEvents.length > 0 ?
              <Fragment>
                <p>Here are some of the events out of your state</p>
                <EventsTable events={this.state.outStateEvents} />
              </Fragment> :
              <p>No events out of your state :(</p>
        }

        <EventsForm
          title="Create an event"
          buttonTitle="Create"
          addNewEvent={this.addNewEvent} />
      </div>
    );
  }
}
