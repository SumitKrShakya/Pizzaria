import React from 'react'
import Test from './components/Test';
import D1 from './components/D1';
import D2 from './components/D2';
import D3 from './components/D3';
import './global.css';
import ApiConnect from "./components/ApiConnect";



const App = () => {


  
  return (
    <div>
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
