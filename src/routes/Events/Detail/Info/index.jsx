import React from 'react';
import './styles.css';

const EventDetailInfo = ({ host, date, location, people }) => (
  <div className="event_detail_info">
    <span>Host: {host}</span>
    <span>Date: {date}</span>
    <span>Location: {location}</span>
    <span>People who are attending this event: {people.length}</span>

    <table className="table">
      <thead className="thead-light">
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Location</th>
        </tr>
      </thead>
      <tbody>
        { people.map(person => (
          <tr key={person.id}>
            <td>{person.name}</td>
            <td>{person.location}</td>
          </tr>
        )) }
      </tbody>
    </table>
  </div>
);

export default EventDetailInfo;
