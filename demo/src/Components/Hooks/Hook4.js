import React from "react";
import { useParams } from "react-router-dom";

const HookFour=()=>{
  const {userid} = useParams();
  return(
    <div className="container mt-3">
      <div className="row">
        <div className="col-lg-12 text-center">
          <h2>React Hooks useParams()</h2>
          <h1>Your Id is: {userid} </h1>
        </div>
      </div>
    </div>
  );
};
export default HookFour;