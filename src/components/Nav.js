import React, { useState } from 'react';
import './Nav.scss';
import { NavLink, useLocation } from 'react-router-dom';

export default function Nav() {
  //assigning location variable
  const location = useLocation();

  //destructuring pathname from location
  const { pathname } = location;

  //Javascript split method to get the name of the path in array
  const splitLocation = pathname.split('/');

  console.log(splitLocation);

  return (
    <nav className="nav">
      <button className="nav-btn">
        <NavLink
          to="/"
          className={splitLocation[1] === '' ? 'nav-link active' : 'nav-link'}
        >
          Home
        </NavLink>
      </button>
      <button className="nav-btn">
        <NavLink
          to="/about"
          className={
            splitLocation[1] === 'about' ? 'nav-link active' : 'nav-link'
          }
        >
          About
        </NavLink>
      </button>
      <button className="nav-btn">
        <NavLink
          to="/projects"
          className={
            splitLocation[1] === 'projects' ? 'nav-link active' : 'nav-link'
          }
        >
          Projects
        </NavLink>
      </button>
      <button className="nav-btn">
        <NavLink
          to="/contact"
          className={
            splitLocation[1] === 'contact' ? 'nav-link active' : 'nav-link'
          }
        >
          Contact
        </NavLink>
      </button>
    </nav>
  );
}
