import React from "react";
import {Container} from "react-bootstrap"
import "./Pnb.css";


const Pnb = () => {

  const handleClick = () => {
    window.open("https://your-url.com", "_blank"); // 👈 apna URL yaha daalna
  };

  return (
    <div className="pnb" >
      <Container className= "pnb-content-div">
      <div className="pnb-left">
        <h3>Project Approved By:</h3>
        <p>Click here to explore -></p>
      </div>

      <div className="pnb-right" onClick={handleClick}>
        <img src={require("../assets/pnb-logo22.png")} alt="logo" />
      </div>
</Container>
    </div>
  );
};

export default Pnb;