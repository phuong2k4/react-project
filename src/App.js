import logo from './logo.svg';
import './App.css';
import React, { useEffect } from 'react';
// import AlbumsMusic from './features/Album/index.jsx';
// import TodoFeatures from './features/Todo/index.jsx';
import RenderTimeAsString from './features/Clock_String/index.jsx';
import productApi from './api/productApi.js';


function App() {
  useEffect(()=>{
    const fetchProducts = async () => {
      const params = {
        _limit:10
      }
      const productList = await productApi.getAll(params)
      console.log(productList);
    }
    fetchProducts()
  },[])
  return (
    <div className="App">
      <RenderTimeAsString />
    </div>
  );
}

export default App;
