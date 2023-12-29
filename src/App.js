import './App.scss';
import React from 'react'
import Weather from './components/Weather';

function App() {
  return (
    <div className="App">
      <h1 className='main-title'>Блядська Погода</h1>
      <Weather/>
    </div>
  );
}

export default App;
