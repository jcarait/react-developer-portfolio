import React from 'react';
import ReactDOM from 'react-dom';
//Components
import About from './components/About'

export const App = () => {
    return (
        <div>
            <h1>Dev Portfolio</h1>
            <About />
            </div>
      
    )
}

ReactDOM.render(<App></App>, document.getElementById('root'))