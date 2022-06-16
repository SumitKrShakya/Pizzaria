import React from "react";
import Test from "./components/Test";
import D1 from "./components/D1";
import "./global.css";
import ApiConnect from "./components/ApiConnect";



const App = () => {


  
  return (
    <div>
      <div className="bg-blue-300">
        App
        <D1 />
      </div>
      <ApiConnect />
    </div>
  );
};

export default App;
