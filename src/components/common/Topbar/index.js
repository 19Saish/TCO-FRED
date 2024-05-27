import React from "react";
import "./nav.css";
import profile from "../../../assets/img/bg-image.png";
import { Typography } from "@mui/material";
import BackButton from "../BackButton/BackButton";
import { useLocation } from "react-router-dom";

const Topbar = () => {
  const location = useLocation();
  return (
    <div className="nav-contaainer">
      <div
        style={{
          //   background: "red",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {
          location.pathname === '/home' ? <BackButton /> :<BackButton path={`${location.pathname}`}/>
        }
        <h2
          style={{
            color: "white",
            marginLeft: 25,
            flex: 2.4,
            textAlign: "center",
          }}
        >
          TCO FRED Framework
        </h2>

        <div
          style={{
            display: "flex",
            gap: 10,
            flex: 1,
            alignItems: "center",
          }}
        >
          <Typography color="white">WELCOME , ALISHER SAILAUAY</Typography>
          <img
            style={{
              borderRadius: "50%",
              //   marginRight: 10,
              width: 40,
              height: 40,
            }}
            src={profile}
            alt={profile}
          />
        </div>
      </div>
    </div>
  );
};

export default Topbar;
