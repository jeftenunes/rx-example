import './App.css';
import React from 'react';
import logo from './logo.svg';
import DblClickButton from './components/dbl-click-button';

function App() {
  return (
    <div className="App">
      <DblClickButton labelText='Click me!'/>
      {/* <StreamSubscribe /> */}
    </div>
  );
}

export default App;
