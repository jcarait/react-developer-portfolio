import React, { useState } from 'react';
import './Header.scss';
import Navigation from './Navigation';
//Pages
import About from './pages/About';
import Projects from './pages/Projects';

const TitleContainer = () => {
  return (
    <div className="title-container">
      <h1 className="title">Dev Portfolio</h1>
    </div>
  );
};

function Header() {
  const [currentPage, setCurrentPage] = useState('Home');

  const renderPage = () => {
    switch (currentPage) {
      case 'Home':
        return <TitleContainer />;
      case 'About':
        return <About />;
      case 'Projects':
        return <Projects />;
      default:
        return;
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);
  return (
    <>
      <header>
        <Navigation
          currentPage={currentPage}
          handlePageChange={handlePageChange}
        />
      </header>
      <div className="content container--fluid">{renderPage()}</div>
    </>
  );
}

export default Header;
