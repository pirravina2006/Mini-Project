import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  return (
    <nav className="navbar">
      <Link to="/" className="brand">💰 Expense Tracker</Link>
      <div className="navbar-links">
        <span>Hi, {user?.name}</span>
        <button className="secondary" onClick={logout}>Logout</button>
      </div>
    </nav>
  );
};

export default Navbar;
