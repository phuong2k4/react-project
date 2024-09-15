import logo from './logo.svg';
import './App.css';
import React from 'react';
// import AlbumsMusic from './features/Album/index.jsx';
// import TodoFeatures from './features/Todo/index.jsx';
// import UseImmerIntroduce from './features/UseImmer/component/hookImmer.jsx';
import FilterableList from './features/Sharing_State/component/Controlled_UnControlled.jsx';

function App() {
  return (
    <div className="App">
      <FilterableList/>
    </div>
  );
}

export default App;
