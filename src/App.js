import React from 'react';
import Routes from './routes';

import Header from './Components/Header';

import './styles.css'

function App() {
  return (
    <div className="App">
      <Header />
      <Routes />
    </div>
  );
}

export default App;