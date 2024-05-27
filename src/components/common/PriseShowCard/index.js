
import React from "react";

function PriseShowCard(props) {
  const {
    heading,
    value,
    currency,
    subHeading,
  }=props;
  return (
    <div style={{
      backgroundColor:"#fff", 
      width:"100%",
      height:"86px",
      textAlign:"center",
      borderRadius:"8px",
      display:"flex",
      flexDirection:"column",
      justifyContent:"center"
      }}>
      <div style={{fontSize:"14px", padding:"2px 0px"}} ><b>{heading}</b></div>
      <div style={{fontSize:"24px", padding:"0px 0px", color:"#3B873E"}} >{currency&&currency}{value}</div>
      {subHeading&&<div style={{fontSize:"10px", padding:"2px 0px"}} ><b>{subHeading}</b></div>}
    </div>
  );
}

export default PriseShowCard;
