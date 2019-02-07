import React from 'react';
import Register from './Register';
import Login from './Login';
import './styles.css'

const Index = () => (
  <div className="homepage">
    <h1>Welcome</h1>
    <div className="container">
      <div className="row">
        <div className="col-sm">
          <Register />
        </div>
        <div className="col-sm">
          <Login />
        </div>
      </div>
    </div>
  </div>
);

export default Index;
