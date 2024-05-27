import React, { useState } from "react";
import "./PowerBi.css";
import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";
import { Link } from "react-router-dom";

import { useLocation } from "react-router-dom";

function PowerBi() {
  const location = useLocation();
  const { ProjectNumber } = location.state;
  const setUrlChange = (e, url) => {
    e.preventDefault();
    setUrl("");
    setTimeout(() => {
      setUrl(url);
    }, 100);
  };
  const [url, setUrl] = useState(
    `https://app.powerbi.com/reportEmbed?filter=Document/TcoProjectNumber eq '${ProjectNumber}'&reportId=55aa2cd4-aaa-bbb-ccc&autoAuth=true&ctid=cabcdefg`
  );

  return (
    <div className="powerbi-wrapper">
      <div className="leftSidebar">
        <button
          className="sidebar-btn"
          onClick={(e) =>
            setUrlChange(
              e,
              `https://app.powerbi.com/reportEmbed?reportId=5a9fe48f-2f35-41a1-89e3-059b5ac9b8f0&autoAuth=true&ctid=fd799da1-bfc1-4234-a91c-72b3a1cb9e26&navContentPaneEnabled=false&pageName=ReportSection4c3df3f3f91a09a6a5c2&$filter=Document/TcoProjectNumber eq '${ProjectNumber}'`
            )
          }
        >
          <Link to="/ninthpage">
            <ArrowBackIosNewRoundedIcon
              style={{ color: "#0066B2", fontSize: "14px" }}
            />
          </Link>
          General
        </button>

        <button
          className="sidebar-btn pointer"
          onClick={(e) => {
            setUrlChange(
              e,
              `https://app.powerbi.com/reportEmbed?reportId=5a9fe48f-2f35-41a1-89e3-059b5ac9b8f0&autoAuth=true&ctid=fd799da1-bfc1-4234-a91c-72b3a1cb9e26&navContentPaneEnabled=false&pageName=ReportSection2535897ba0d117d0bcf6&$filter=Document/TcoProjectNumber eq '${ProjectNumber}'`
            );
            e.preventDefault();
          }}
        >
          <ArrowBackIosNewRoundedIcon
            style={{ color: "transparent", fontSize: "14px" }}
          />
          Document Audit Report
        </button>

        <button
          className="sidebar-btn pointer"
          onClick={(e) => {
            setUrlChange(
              e,
              `https://app.powerbi.com/reportEmbed?reportId=5a9fe48f-2f35-41a1-89e3-059b5ac9b8f0&autoAuth=true&ctid=fd799da1-bfc1-4234-a91c-72b3a1cb9e26&navContentPaneEnabled=false&pageName=ReportSection2ea86ac924c6cd6e0bb4&$filter=Document/TcoProjectNumber eq '${ProjectNumber}'`
            );
            e.preventDefault();
          }}
        >
          <ArrowBackIosNewRoundedIcon
            style={{ color: "transparent", fontSize: "14px" }}
          />
          Tag Audit Report
        </button>

        <button
          className="sidebar-btn pointer"
          onClick={(e) => {
            setUrlChange(
              e,
              `https://app.powerbi.com/reportEmbed?reportId=5a9fe48f-2f35-41a1-89e3-059b5ac9b8f0&autoAuth=true&ctid=fd799da1-bfc1-4234-a91c-72b3a1cb9e26&navContentPaneEnabled=false&pageName=ReportSection2ec709f364ed7605bda2&$filter=Document/TcoProjectNumber eq '${ProjectNumber}'`
            );
            e.preventDefault();
          }}
        >
          <ArrowBackIosNewRoundedIcon
            style={{ color: "transparent", fontSize: "14px" }}
          />
          Engineering Documents
        </button>
      </div>

      <div className="iframe w-full h-full">
        <iframe
          title="Your Report Title"
          src={url}
          frameborder="0"
          style={{ width: "100%", height: "100%" }}
          className="w-full h-full"
          allowFullScreen="true"
        ></iframe>
      </div>
      
    </div>
  );
}

export default PowerBi;
