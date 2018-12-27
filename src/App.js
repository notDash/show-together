import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './ityped.css';
import 'animate.css';
// import HelloTyped from './ityped/Hello';
import { init } from 'ityped'

class App extends Component {
  componentDidMount() {
    const myElement = document.querySelector('.App-link')
    init(myElement, 
      { 
        strings: ['Learn React'],
        typeSpeed:  100,
        backSpeed:  50,
        loop:true,
        showCursor: true,
        disableBackTyping: true,
        showCursor: true,
        cursorChar: "|",
        onFinished: function(){
          console.log('typed finished...')
        },
      }
    )
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p className="APP-header__desc">
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link animated infinite bounce delay-2s"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
          </a>
        </header>
      </div>
    );
  }
}

export default App;
