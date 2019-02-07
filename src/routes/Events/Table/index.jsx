import React from 'react';
import { Link } from 'react-router-dom';
import Actions from './Actions';
import './styles.css'

const EventsTable = ({ events }) => (
  <table className="events table">
    <thead className="thead-light">
      <tr>
        <th scope="col">Name</th>
        <th scope="col">Date</th>
        <th scope="col">Location</th>
        <th scope="col">Host</th>
        <th scope="col">Action / Status</th>
      </tr>
    </thead>
    <tbody>
      { events.map(event => (
        <tr key={event.id}>
          <td><Link to={`events/${event._id}`}>{event.name}</Link></td>
          <td>{event.date}</td>
          <td>{event.location}</td>
          <td>{event.host}</td>
          <td>
            <Actions
              id={event._id}
              joining={event.people.findIndex(person => person.id === window.sessionStorage.getItem("userid")) !== -1}
              currentUser={event.host === window.sessionStorage.getItem("username")} />
          </td>
        </tr>
      )) }
    </tbody>
  </table>
);

export default EventsTable;
