import React from 'react';
import './App.css';
import MainNav from './Components/Navbar/MainNav';
import PImage from './Components/PImage/PImage';

function App() {
  return (
    <div className='App'>
      <MainNav />
      <main>
      <PImage/>
      Product Description<br />
      </main>
      
    </div>
  );
}

export default App;
