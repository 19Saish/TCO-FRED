import React from "react";
import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";
import "./Page13.css";
import { Link } from "react-router-dom";
import doc from "../../../assets/img/page13/docu.jpg";
import data from "../../../assets/img/page13/data.jpg";
import transition from "../../../assets/img/page13/transition.jpg";
import closeout from "../../../assets/img/page13/closeout.jpg";

function Page13() {
  return (
    <div className="page13-wrapper">
      <div className="side-bar">
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
          Data Management
        </button>
        <button className="sidebar-btn">
          <ArrowBackIosNewRoundedIcon
            style={{ color: "transparent", fontSize: "14px" }}
          />
          Document Management
        </button>
        <button className="sidebar-btn">
          <ArrowBackIosNewRoundedIcon
            style={{ color: "transparent", fontSize: "14px" }}
          />
          Red Line Management
        </button>
        <button className="sidebar-btn">
          <ArrowBackIosNewRoundedIcon
            style={{ color: "transparent", fontSize: "14px" }}
          />
          Concurrent Engineering
        </button>
        <button className="sidebar-btn">
          <ArrowBackIosNewRoundedIcon
            style={{ color: "transparent", fontSize: "14px" }}
          />
          PO Status
        </button>
        <button className="sidebar-btn">
          <ArrowBackIosNewRoundedIcon
            style={{ color: "transparent", fontSize: "14px" }}
          />
          Handover Status
        </button>
        <button className="sidebar-btn">
          <ArrowBackIosNewRoundedIcon
            style={{ color: "transparent", fontSize: "14px" }}
          />
          Close Out Status
        </button>
      </div>
      <div>
        <div className="head-wrapper">
          <p className="head">HP/LP Project - Information Management</p>
          <p className="lorem">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit, aspernatur explicabo aperiam veniam molestias cum
            accusamus fugiat, illum amet ex doloribus nostrum sed, quidem velit
            repudiandae mollitia dignissimos. Adipisci, laborum!
          </p>
        </div>
        <div className="content-wrapper">
          <div className="b b1">
            <p className="title">Documents</p>
            <div className="documents">
              <img className="images" src={doc} alt="Documents" />
            </div>
          </div>
          <div className="b b2">
            <p className="title">Data</p>
            <div className="documents">
              <img className="images" src={data} alt="Data" />
            </div>
          </div>
          <div className="b b3">
            <p className="title">Transition</p>
            <div className="documents">
              <img className="images" src={transition} alt="Transition" />
            </div>
          </div>
          <div className="b b4">
            <p className="title">Close Out</p>
            <div className="documents">
              <img className="images" src={closeout} alt="Close Out" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page13;
