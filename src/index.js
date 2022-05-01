import React, { useState } from 'react';
import ReactDOM from 'react-dom';
//Styles
import 'normalize.css';
import './index.scss';
//Components
import Footer from './components/Footer';
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
        <TitleContainer />;
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <main>
      <div className="area">
        <Header currentPage={currentPage} handlePageChange={handlePageChange} />
        {renderPage()}
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
    </main>
  );
};

ReactDOM.render(<App key="1" />, document.getElementById('root'));
