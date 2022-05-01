import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
//Styles
import 'normalize.css';
import './index.scss';
import './grid.scss';
//Components
import Header from './components/Header';
//Pages
import About from './components/pages/About';
import Projects from './components/pages/Projects';

const TitleContainer = () => {
  return (
    <div className="title-container">
      <h1 className="title">Dev Portfolio</h1>
    </div>
  );
};

const App = () => {
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
        console.log('default');
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <main>
        <Header currentPage={currentPage} handlePageChange={handlePageChange} />
        <div className="content container--fluid">{renderPage()}</div>
      </main>
      <div className="area">
        <ul className="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<App />);
