import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//Styles
import 'normalize.css';
import './App.scss';
//Components
import Header from './components/Header';
import Footer from './components/Footer';
//Pages
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import ErrorBoundary from './components/ErrorErrorBoundary';

const App = () => {
  return (
    <ErrorBoundary>
      <Router>
        <div className="grid-layout">
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Home />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ErrorBoundary>
  );
};

export default App;
