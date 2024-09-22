import logo from './logo.svg';
import './App.css';
import React from 'react';
// import AlbumsMusic from './features/Album/index.jsx';
// import TodoFeatures from './features/Todo/index.jsx';
import RenderTimeAsString from './features/Clock_String/index.jsx';


function App() {
  return (
    <div className="App">
      <RenderTimeAsString />
    </div>
  );
}

export default App;
