import React from 'react';
import './App.css';
import { Shop } from './app/Shop';
import {Customer} from './app/Customer';
import {Cart} from './app/Cart'



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Shop />
        <hr />
        <Customer />
        <hr />
        {/* GUI only- all methods from customer */}
        <Cart />
      </header>
    </div>
  );
}

export default App;
