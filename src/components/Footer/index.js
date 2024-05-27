import { Typography } from "@mui/material";
import React from "react";
import CopyrightRoundedIcon from "@mui/icons-material/CopyrightRounded";
import { useLocation, useNavigate } from "react-router-dom";

export default function Footer() {
  const location = useLocation();

  return (
    <div
      style={{
        backgroundColor: "#0065b1",
        height: "45px",
        // position: "sticky",
        // position: location.pathname === "/home" ? "" : "absolute",
        bottom: "0px",
        width: "100%",
        color: "#ffffff",
        display: "flex",
        alignItems: "center",
      }}
    >
      <CopyrightRoundedIcon
        style={{
          marginLeft: "12px",
          marginRight: "5px",
        }}
      />
      <Typography>2022 TCO | All rights reserved.</Typography>
    </div>
  );
}
