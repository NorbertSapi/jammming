import vinyl from '../../vinyl.jpg';
import React, { useState, useEffect } from "react";
import './App.css';

function App() {

  const [src, setSrc] = useState('');

  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Welcome to Ja<span className="mmm">mmm</span>ing
        </h1>
        <img src={vinyl} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
