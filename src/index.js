import React from 'react';
import ReactDOM from 'react-dom';
//Styles
import 'normalize.css'
import './index.scss'
//Components
import About from './components/About'
import Contact from './components/Contact'
import Projects from './components/Projects'

export const App = () => {
    return (
    <div>
        <div className='title-container'>
        <h1 className='title'>Dev Portfolio</h1>
        </div>
        <div className="area" >
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
</div >   
<About />
            <Contact />
            <Projects />
</div>           
    )
}

ReactDOM.render(<App></App>, document.getElementById('root'))