import React from 'react';
import ReactDOM from 'react-dom';
//Styles
import 'normalize.css';
import './index.scss';
//Components
import About from './components/pages/About';
import Footer from './components/Footer';
import Projects from './components/Projects';
//Pages

export const App = () => {
  return (
    <div>
      <div className="title-container">
        <h1 className="title">Dev Portfolio</h1>
      </div>
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

ReactDOM.render(
  [<App></App>, <Footer></Footer>],
  document.getElementById('root')
);
