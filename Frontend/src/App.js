import React from 'react'
import Test from './components/testComponents/Test';
import D1 from './components/D1';
import D2 from './components/D2';
import D3 from './components/D3';
import './global.css';
import ApiConnect from "./components/testComponents/ApiConnect";
import ProductCard from './components/testComponents/ProductCard';



const App = () => {


  
  return (
    <div>
      <br />
      <br />
      <ProductCard  />
      <br />
      <br />
      <div className="bg-blue-300">
        App
        <D1/>
        <D2/>
        <D3/>
      </div>
      <ApiConnect />
    </div>
  );
};

export default App;
