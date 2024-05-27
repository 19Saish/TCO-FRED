import React from "react";
import "./NinthPage.css";
import map from "../../../assets/img/map.png";
import manhours from "../../../assets/img/manhours.png";
import MilestoneTimeLine from "../../../assets/img/Milestonetimeline.jpeg";
import SidebarBtn from "../../common/SideBar-Button/SidebarBtn";
import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import { useLocation } from "react-router-dom";

function NinthPage() {
  let powerbiLink, projectNumber;

  const location = useLocation();
  if (location?.state) {
    powerbiLink = location.state.powerbiLink;
    projectNumber = location.state.projectNumber;
  }

  return (
    <div className="wrapper">
      <div className="leftSidebar">
        <SidebarBtn powerbi={powerbiLink} projectNo={projectNumber} />
      </div>
      <div className="content">
        <div>
          <h1 className="ninthHeading">HP/LP Project</h1>
        </div>
        <div className="top5container">
          <p className="top5Heading">TOP 5 - Save A Life Focus Areas</p>
          <div className="top5labels">
            <p className="arrowLeft label0">
              <ArrowBackIosNewRoundedIcon />
            </p>
            <p style={{ background: "#FFEE58" }} className="labels label1">
              Electrical Safety
            </p>
            <p style={{ background: "#8BC34A" }} className="labels label2">
              Lifting and Rigging (L & R)
            </p>
            <p style={{ background: "#26C6DA" }} className="labels label3">
              Human Machine Interface (HMI)
            </p>
            <p style={{ background: "#FF7043" }} className="labels label4">
              Working at Heights (WaH)
            </p>
            <p style={{ background: "#FFCA28" }} className="labels label5">
              WRP Field Engagement
            </p>
            <p className="arrowRight label6">
              <ArrowForwardIosRoundedIcon />
            </p>
          </div>
          <div className="gridContainer">
            <div className="box box1">
              <p
                style={{
                  fontSize: "14px",
                  fontWeight: 700,
                  textAlign: "center",
                }}
              >
                Field Map
              </p>
              <img src={map} alt="fieldMap" className="fieldMap" />
            </div>
            <div className="box box2">
              <p className="label">Fatalities</p>
              <p className="value">$0</p>
              <p className="target">One TCO 2022 Target</p>
              <p className="dash">-</p>
              <p className="ninthyear">2022 YTD</p>
            </div>
            <div className="box box3">
              <p className="label">Serious Injuries</p>
              <p className="value">$0</p>
              <p className="target">One TCO 2022 Target</p>
              <p className="dash">-</p>
              <p className="ninthyear">2022 YTD</p>
            </div>
            <div className="box box4">
              <p className="label">Probable DIF</p>
              <p className="value">Track</p>
              <p className="target">One TCO 2022 Target</p>
              <p className="dash">-</p>
              <p className="ninthyear">2022 YTD</p>
            </div>
            <div className="box box5 boxContainer">
              <div className="container1">
                <p className="label">Project Manhours</p>
                <p className="value" style={{ color: "#0078D4" }}>
                  258,9
                </p>
              </div>
              <div className="container2">
                <p className="label">Site Engagements</p>
                <p className="value" style={{ color: "#0078D4" }}>
                  470
                </p>
              </div>
            </div>
            <div className="box box6 manhours">
              <div className="col1">
                <p className="label">Man Hours</p>
                <img src={manhours} alt="manhours" className="manhoursImg" />
              </div>
              <div className="col2">
                <div className="progresswrapper">
                  <p className="label">Actual Progress</p>
                  <p className="value">74%</p>
                </div>
              </div>
            </div>
            <div className="box box7">
              <img src={MilestoneTimeLine} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NinthPage;
