import React from "react";
import { useState, useEffect } from "react";

const ApiConnect = () => {
  const url = "https://foodish-api.herokuapp.com/api/";

  const [first, setFirst] = useState(null);

  const fetchPhoto = async () => {
    try {
      console.log("Started Fetching");

      const response = await fetch(url);
      const photo = await response.json();
      setFirst(photo);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPhoto();
  }, []);

  return (
    <div>
      <h1> ApiConnect</h1>
      {first !== null ? <img onClick={()=>{setFirst(null);fetchPhoto()}} className="h-96 cursor-pointer" src={first.image}></img> : <h3>Loading</h3>}
      <h1>hello</h1>
    </div>
  );
};

export default ApiConnect;
