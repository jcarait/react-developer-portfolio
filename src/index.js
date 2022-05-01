import React from 'react';
import ReactDOM from 'react-dom';
//Styles
import 'normalize.css'
//Components
import About from './components/About'
import Contact from './components/Contact'
import Projects from './components/Projects'

export const App = () => {
    return (
        <div>
            <h1>Dev Portfolio</h1>
            <About />
            <Contact />
            <Projects />
            </div>
      
    )
}

ReactDOM.render(<App></App>, document.getElementById('root'))