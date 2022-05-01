import React, { useState } from 'react';
import './Header.scss';

function Header({ currentPage, handlePageChange }) {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  return (
    <header>
      <nav className="flex-nav">
        <div id="icon" className="column-6 column-8"></div>
        <div className="column-6 column-4">
          <i className="toggle fa fa-bars"></i>

          <ul className="nav">
            <li className="nav-item">
              <a
                href="#home"
                onClick={() => handlePageChange('Home')}
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
                onClick={() => handlePageChange('About')}
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
                onClick={() => handlePageChange('Projects')}
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
                onClick={() => handlePageChange('Contact')}
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
