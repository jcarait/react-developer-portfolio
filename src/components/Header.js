import React, { useState } from 'react';
import './Header.scss';

function Header({ currentPage, handlePageChange }) {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  return (
    <header>
      <nav className="flex-nav">
        <div id="icon" className="column-6 column-8"></div>
        <div className="column-6 column-4">
          <button
            className="hamburger"
            onClick={() => {
              setIsNavExpanded(!isNavExpanded);
            }}
          >
            <i className="toggle fa fa-bars"></i>
          </button>
          <ul className={isNavExpanded ? 'nav active' : ''}>
            <li className="nav-item">
              <a
                href="#home"
                onClick={() => {
                  handlePageChange('Home');
                  setIsNavExpanded(false);
                }}
                className={
                  currentPage === 'Home' ? 'nav-link active' : 'nav-link'
                }
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#about"
                onClick={() => {
                  handlePageChange('About');
                  setIsNavExpanded(false);
                }}
                className={
                  currentPage === 'About' ? 'nav-link active' : 'nav-link'
                }
              >
                About
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#projects"
                onClick={() => {
                  handlePageChange('Projects');
                  setIsNavExpanded(false);
                }}
                className={
                  currentPage === 'Projects' ? 'nav-link active' : 'nav-link'
                }
              >
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#contact"
                onClick={() => {
                  handlePageChange('Contact');
                  setIsNavExpanded(false);
                }}
                className={
                  currentPage === 'Contact' ? 'nav-link active' : 'nav-link'
                }
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
