import React from "react";

const GraphCard = ({ graph, heading }) => {
  return (
    <div
      style={{
        backgroundColor: "#fff",
        margin: "5px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div
        style={{ fontSize: "14px", padding: "10px 0px", textAlign: "center" }}
      >
        <b>{heading}</b>
      </div>
      <img
        src={graph}
        alt=""
        style={{
          width: "-webkit-fill-available",
          maxWidth: "500px",
        }}
      />
    </div>
  );
};

export default GraphCard;
