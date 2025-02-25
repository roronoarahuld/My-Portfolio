import { useState } from 'react';
import './App.scss';
import Home from './components/home/home';
import Header from './header/header';

function App() {
  return (
    <div className="App">
      <Header/>
        <Home/>
    </div>
  );
}

export default App;
