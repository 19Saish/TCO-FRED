import React from "react";
import "./nav.css";
import profile from "../assets/img/bg-image.png";
import { Box, IconButton, Typography } from "@mui/material";
import ArrowCircleLeftOutlinedIcon from "@mui/icons-material/ArrowCircleLeftOutlined";
import { useLocation, useNavigate } from "react-router-dom";

const Nav = () => {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <div className="nav-contaainer">
      <div
        style={{
          //   background: "red",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div style={{ flex: 1, marginLeft: "1rem", cursor: "pointer" }}>
          {location.pathname === "/firstpage" && (
            <Box
              style={{
                color: "white",
                display: "flex",
                alignItems: "center",
                fontSize: "22px",
                gap: "10px",
              }}
              onClick={() => navigate("/home")}
            >
              <ArrowCircleLeftOutlinedIcon
                style={{
                  color: "white",
                }}
                fontSize="large"
              />
              Main Page
            </Box>
          )}
        </div>
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
          />
        </div>
      </div>
    </div>
  );
};

export default Nav;
