import React from "react";
import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";
import { Link } from "react-router-dom";
import "./Milestone.css";
import MilestoneGraph from "../../common/MilestoneGraph/Graph/MilestoneGraph";
import { useLocation } from "react-router-dom";

function Milestone() {
  const location = useLocation();
  const {projectNumber} = location.state;

  return (
    <div className="milestone-wrapper">
      <div className="left-Sidebar">
        <button className="sidebar-btn">
          <Link to="/ninthpage">
            <ArrowBackIosNewRoundedIcon
              style={{ color: "#0066B2", fontSize: "14px" }}
            />
          </Link>
          Project Overview
        </button>
        <button className="sidebar-btn active">
          <ArrowBackIosNewRoundedIcon
            style={{ color: "transparent", fontSize: "14px" }}
          />
          Portfolio Dashboard
        </button>
        <button className="sidebar-btn">
          <ArrowBackIosNewRoundedIcon
            style={{ color: "transparent", fontSize: "14px" }}
          />
          Planning and Scheduling
        </button>
        <button className="sidebar-btn">
          <ArrowBackIosNewRoundedIcon
            style={{ color: "transparent", fontSize: "14px" }}
          />
          Milestone Tracking
        </button>
        <button className="sidebar-btn">
          <ArrowBackIosNewRoundedIcon
            style={{ color: "transparent", fontSize: "14px" }}
          />
          Critical Path Analysis
        </button>
        <button className="sidebar-btn">
          <ArrowBackIosNewRoundedIcon
            style={{ color: "transparent", fontSize: "14px" }}
          />
          Overdue Tasks
        </button>
        <button className="sidebar-btn">
          <ArrowBackIosNewRoundedIcon
            style={{ color: "transparent", fontSize: "14px" }}
          />
          Risk Management
        </button>
        <button className="sidebar-btn">
          <ArrowBackIosNewRoundedIcon
            style={{ color: "transparent", fontSize: "14px" }}
          />
          Project Control Dashboard
        </button>
        <button className="sidebar-btn">
          <ArrowBackIosNewRoundedIcon
            style={{ color: "transparent", fontSize: "14px" }}
          />
          SimOps
        </button>
      </div>
      <div className="main flex flex-col gap-[20px] flex-1">
        <div className="headingContainer a w-100">
          <p className="heading">Milestone Tracking - HP/LP Project Schedule</p>
        </div>
        <div className="graphContainer b w-100">
          <MilestoneGraph ProjectN={projectNumber}/>
        </div>
      </div>
    </div>
  );
}

export default Milestone;
