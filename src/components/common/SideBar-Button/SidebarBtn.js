import React from "react";
import "./index.css";
import { Link } from "react-router-dom";
import ProjectOverview from "../../../assets/img/SVGicons/ProjectOverview.svg";
import HES from "../../../assets/img/SVGicons/HES.svg";
import Engineering from "../../../assets/img/SVGicons/Engineering.svg";
import Construction from "../../../assets/img/SVGicons/Construction.svg";
import SystemsCompletion from "../../../assets/img/SVGicons/SystemsCompletion.svg";
import Startup from "../../../assets/img/SVGicons/Startup.svg";
import Quality from "../../../assets/img/SVGicons/Qualitymanagement.svg";
import Cost from "../../../assets/img/SVGicons/Cost.svg";
import Schedule from "../../../assets/img/SVGicons/Schedule.svg";
import Information from "../../../assets/img/SVGicons/InformationManagement.svg";
import Resourcing from "../../../assets/img/SVGicons/Resourcing.svg";
import Contracts from "../../../assets/img/SVGicons/Contracts.svg";
import Materials from "../../../assets/img/SVGicons/Materials.svg";
import Automation from "../../../assets/img/SVGicons/Digital.svg";

function SidebarBtn({ powerbi, projectNo }) {
  return (
    <div>
      <button className="sidebar-btn active">
        <Link to="/ninthpage">
          <img src={ProjectOverview} alt="" />
        </Link>
        Project Overview
      </button>

      <button className="sidebar-btn">
        <img src={HES} alt="" />
        HES
      </button>
      <button className="sidebar-btn">
        <img src={Engineering} alt="" />
        Engineering
      </button>
      <button className="sidebar-btn">
        <img src={Construction} alt="" />
        Construction
      </button>
      <button className="sidebar-btn">
        <img src={SystemsCompletion} alt="" />
        Systems Completion
      </button>
      <button className="sidebar-btn">
        <img src={Startup} alt="" />
        Start-up & Operations
      </button>
      <button className="sidebar-btn">
        <img src={Quality} alt="" />
        Quality Management
      </button>
      <Link to="/page12">
        <button className="sidebar-btn">
          <img src={Cost} alt="" />
          Cost
        </button>
      </Link>
      <Link to="/page16" state={{ProjectNumber: projectNo}}>
        <button className="sidebar-btn">
          <img src={Schedule} alt="" />
          Schedule
        </button>
      </Link>
      <Link to='/powerbi' state={{ProjectNumber: projectNo}}>
        <button className="sidebar-btn">
          <img src={Information} alt="" />
          Information Management
        </button>
      </Link>

      <button className="sidebar-btn">
        <img src={Resourcing} alt="" />
        Resourcing
      </button>
      <button className="sidebar-btn">
        <img src={Contracts} alt="" />
        Contracts
      </button>
      <button className="sidebar-btn">
        <img src={Materials} alt="" />
        Materials
      </button>
      <button className="sidebar-btn">
        <img src={Automation} alt="" />
        Automation / Digital
      </button>
    </div>
  );
}

export default SidebarBtn;
