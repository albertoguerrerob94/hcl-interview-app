import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

const LandPageHeader = () => (
  <header className="landpage__header">
    <h1>Welcome, {window.sessionStorage.getItem('username')}</h1>
    <Link to="/">Logout</Link>
  </header>
);

export default LandPageHeader;
