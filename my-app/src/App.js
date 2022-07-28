import React from 'react';
import { Shop } from './app/Shop';
import './App.css';
import { Shop2 } from './app/Shop2';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Shop />
        <hr />
        <Shop2 />
      </header>
    </div>
  );
}

export default App;
