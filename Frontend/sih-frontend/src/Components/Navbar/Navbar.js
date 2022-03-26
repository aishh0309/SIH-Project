import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';



function Navbar() {
  return (
    <div className="header">
    <div className="header_left">
     <Link to="/landed" className='header_left'><small>Home</small></Link> 
      <small>About us</small>
      <small>Know more </small>
      </div>
      <div className="header_right">
        <small>Logout</small>
        </div>
    </div>
  );
}

     export default Navbar;