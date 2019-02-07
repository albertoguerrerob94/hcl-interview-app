import React, { PureComponent } from 'react';
import { post } from 'axios';
import './styles.css'

export default class Register extends PureComponent {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      location: '',
      state: '',
      password: '',
      password2: ''
    };
  }

  handleSubmit(ev) {
    ev.preventDefault();
    if(this.state.password === this.state.password2) {
      post('http://localhost:8081/users', {
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        email: this.state.email,
        location: this.state.location,
        state: this.state.state,
        password: this.state.password
      }).then(() => {
        alert("Register succesful");
        window.location.reload();
      });
    } else {
      alert("Passwords do not match");
    }
  }

  handleChange(ev) {
    const { name, value } = ev.target;
    this.setState({ [name]: value });
  }

  render() {
    return (
      <div className="homepage-register">
        <h2>Register</h2>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group row">
            <label
              className="col-sm-3 col-form-label"
              htmlFor="firstName">First name</label>
            <div className="col-sm-9">
              <input type="text"
                className="form-control"
                id="firstName"
                name="firstName"
                value={this.state.firstName}
                onChange={this.handleChange} />
            </div>
          </div>
          <div className="form-group row">
            <label
              className="col-sm-3 col-form-label"
              htmlFor="lastName">Last name</label>
            <div className="col-sm-9">
              <input type="text"
                className="form-control"
                id="lastName"
                name="lastName"
                value={this.state.lastName}
                onChange={this.handleChange} />
            </div>
          </div>
          <div className="form-group row">
            <label
              className="col-sm-3 col-form-label"
              htmlFor="email">Email</label>
            <div className="col-sm-9">
              <input type="email"
                className="form-control"
                id="register_email"
                name="email"
                value={this.state.email}
                onChange={this.handleChange} />
            </div>
          </div>
          <div className="form-group row">
            <label
              className="col-sm-3 col-form-label"
              htmlFor="location">Location</label>
            <div className="col-sm-6">
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
            <label
              className="col-sm-3 col-form-label"
              htmlFor="password">Password</label>
            <div className="col-sm-9">
              <input type="password"
                className="form-control"
                id="register_password"
                name="password"
                value={this.state.password}
                onChange={this.handleChange} />
            </div>
          </div>
          <div className="form-group row">
            <label
              className="col-sm-3 col-form-label"
              htmlFor="password2">Pwd Conf</label>
            <div className="col-sm-9">
              <input type="password"
                className="form-control"
                id="password2"
                name="password2"
                value={this.state.password2}
                onChange={this.handleChange} />
            </div>
          </div>
          <div className="form-group row">
            <button type="submit" className="btn btn-primary mb-2">Register</button>
          </div>
        </form>
      </div>
    );
  }
}
