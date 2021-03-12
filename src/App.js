import { useState , useEffect } from 'react'
import './App.css';
import Auth from './Auth/Auth'

function App() {


  return (
    <div className="App">
      <div className="app__auth">
        <Auth />
      </div>
    </div>
  );
}

export default App;
