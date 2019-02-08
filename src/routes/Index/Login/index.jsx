import React, { PureComponent } from 'react';
import { post } from 'axios';
import './styles.css'

export default class Login extends PureComponent {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = { email: '', password: '' };
  }

  componentDidMount() {
    window.sessionStorage.removeItem("username");
    window.sessionStorage.removeItem("userstate");
    window.sessionStorage.removeItem("userid");
  }

  handleChange(ev) {
    const { name, value } = ev.target;
    this.setState({ [name]: value });
  }

  handleSubmit(ev) {
    ev.preventDefault();
    const { email, password } = this.state;
    post('https://aqueous-plains-25700.herokuapp.com/login', { email, password })
      .then(({ data: { name, state, userid } }) => {
        window.sessionStorage.setItem("username", name);
        window.sessionStorage.setItem("userstate", state);
        window.sessionStorage.setItem("userid", userid);
        window.location = '/events';
      })
      .catch(() => {
        alert('Credentials invalid');
      })
  }

  render() {
    return (
      <div className="homepage-login">
        <h2>Login</h2>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group row">
            <label
              className="col-sm-3 col-form-label"
              htmlFor="email">Email</label>
            <div className="col-sm-9">
              <input type="email"
                className="form-control"
                id="email"
                name="email"
                value={this.state.email}
                onChange={this.handleChange} />
            </div>
          </div>
          <div className="form-group row">
            <label
              className="col-sm-3 col-form-label"
              htmlFor="password">Password</label>
            <div className="col-sm-9">
              <input type="password"
                className="form-control"
                id="password"
                name="password"
                value={this.state.password}
                onChange={this.handleChange} />
            </div>
          </div>
          <div className="form-group row">
            <button type="submit" className="btn btn-primary mb-2">Login</button>
          </div>
        </form>
      </div>
    );
  }
}
