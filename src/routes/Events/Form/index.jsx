import React, { PureComponent } from 'react';
import { post, put } from 'axios';
import './styles.css';

export default class EventsForm extends PureComponent {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      name: props.name || '',
      date: props.date || '',
      location: props.location || '',
      state: props.state || ''
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      name: nextProps.name || '',
      date: nextProps.date || '',
      location: nextProps.location || '',
      state: nextProps.state || '',
      editing: !!nextProps.name
    });
  }

  handleSubmit(ev) {
    ev.preventDefault();

    if(this.state.editing) {
      const url = `https://aqueous-plains-25700.herokuapp.com/events/${this.props.id}`;
      put(url, {
        name: this.state.name,
        date: this.state.date,
        location: this.state.location,
        state: this.state.state
      }).then(() => {
        this.props.redirect();
      });
    } else {
      post('https://aqueous-plains-25700.herokuapp.com/events', {
        host: window.sessionStorage.getItem("username"),
        name: this.state.name,
        date: this.state.date,
        location: this.state.location,
        state: this.state.state
      }).then(() => {
        window.location.reload();
      });
    }
  }

  handleChange(ev) {
    const { name, value } = ev.target;
    this.setState({ [name]: value });
  }

  render() {
    return (
      <div className="landpage_event__form">
        <h2>{this.props.title}</h2>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group row">
            <label
              className="col-sm-2 col-form-label"
              htmlFor="email">Name</label>
            <div className="col-sm-10">
              <input type="text"
                className="form-control"
                id="name"
                name="name"
                value={this.state.name}
                onChange={this.handleChange} />
            </div>
          </div>
          <div className="form-group row">
            <label
              className="col-sm-2 col-form-label"
              htmlFor="email">Date</label>
            <div className="col-sm-10">
              <input type="date"
                className="form-control"
                id="date"
                name="date"
                value={this.state.date}
                onChange={this.handleChange} />
            </div>
          </div>
          <div className="form-group row">
            <label
              className="col-sm-2 col-form-label"
              htmlFor="location">Location</label>
            <div className="col-sm-7">
              <input type="text"
                className="form-control"
                id="location"
                name="location"
                value={this.state.location}
                onChange={this.handleChange} />
            </div>
            <div className="col-sm-3">
              <select
                className="form-control"
                onChange={this.handleChange}
                value={this.state.state}
                name="state">
                <option value="">--</option>
                <option value="CA">CA</option>
                <option value="NY">NY</option>
                <option value="IL">IL</option>
                <option value="TX">TX</option>
                <option value="MI">MI</option>
              </select>
            </div>
          </div>
          <div className="form-group row">
            <button type="submit" className="btn btn-primary mb-2">{this.props.buttonTitle}</button>
          </div>
        </form>
      </div>
    );
  }
}
