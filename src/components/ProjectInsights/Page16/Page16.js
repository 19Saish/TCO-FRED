import React from "react";
import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";
import "./Page16.css";
import portfolio from "../../../assets/img/page16/portfolio.png";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

function Page16() {
  const location = useLocation();
  const { ProjectNumber } = location.state;


  return (
    <div className="page16-wrapper">
      <div className="leftSidebar">
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
        <Link to="/milestone" state={{projectNumber: ProjectNumber}}>
          <button className="sidebar-btn">
            <ArrowBackIosNewRoundedIcon
              style={{ color: "transparent", fontSize: "14px" }}
            />
            Milestone Tracking
          </button>
        </Link>
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
      <div>
        <div className="head-wrapper">
          <p className="head">Portfolio Dashboard - HP/LP Project Schedule</p>
        </div>
        <div className="content-wrapper">
          <img className="portfolio" src={portfolio} alt="Portfolio" />
        </div>
      </div>
    </div>
  );
}

export default Page16;
