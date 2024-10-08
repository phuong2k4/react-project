import logo from './logo.svg';
import './App.css';
import React, { useEffect } from 'react';
import RenderTimeAsString from './features/Clock_String/index.jsx';
import factsApi from './api/factsApi.js';
import HeaderPages from './components/HeaderPages/index.jsx';
import Loading from './components/LoadingPages/index.jsx';

function App() {
  useEffect(()=>{
    const fetchFacts = async () => {
      const param = {
        _limit: 3
      }
      const factsList = await factsApi.getAll(param)
      console.log(factsList);
    }
    fetchFacts();
  },[])
  return (
    <div className="App">
      <HeaderPages />
      <RenderTimeAsString />
      <Loading />
    </div>
  );
}

export default App;
