import React from 'react';
import './App.css';
import MainNav from './Components/Navbar/MainNav';
import Pdescr from './Components/PDescription/Pdescr';
import PImage from './Components/PImage/PImage';

function App() {
  return (
    <div className='App'>
      <MainNav />
      <main>
      <PImage/>
      <Pdescr/>
      </main>
      
    </div>
  );
}

export default App;
