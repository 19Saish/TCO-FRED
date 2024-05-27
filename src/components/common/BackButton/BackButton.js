import React from "react";
import { useLocation } from "react-router-dom";
import { Box } from "@mui/material";
import ArrowCircleLeftOutlinedIcon from "@mui/icons-material/ArrowCircleLeftOutlined";
import { useNavigate } from "react-router-dom";

function BackButton({ path }) {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <>
      <div style={{ flex: 1, marginLeft: "1rem", cursor: "pointer" }}>
        {location.pathname === `${path}` && (
          <Box
            style={{
              color: "white",
              display: "flex",
              alignItems: "center",
              fontSize: "22px",
              gap: "10px",
            }}
            onClick={() => navigate(-1)}
          >
            <ArrowCircleLeftOutlinedIcon
              style={{
                color: "white",
              }}
              fontSize="large"
            />
            Back
          </Box>
        )}
      </div>
    </>
  );
}

export default BackButton;
