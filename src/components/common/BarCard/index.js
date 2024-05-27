import { display } from '@mui/system';
import React from 'react'

const BarCard = (props) => {
    const {
        heading,
        currency,
        value,
      }=props;
      console.log(props)
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
          <div style={{fontSize:"24px", padding:"0px 0px", color:"#3B873E"}} >{currency}{value}</div>
        </div>
      );
}

export default BarCard
