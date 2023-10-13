import vinyl from '../../vinyl.jpg';
import React, { useState } from "react";
import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import SearchResult from '../SearchResults/SearchResults';

function App() {

  const [src, setSrc] = useState('');

  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Welcome to Ja<span className="mmm">mmm</span>ing
        </h1>
        <img style={{opacity:0.8}} src={vinyl} className="App-logo" alt="logo" />
        {/*put here a serchbar*/}
        <SearchBar />
        <SearchResult/>
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
