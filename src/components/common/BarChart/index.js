import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import {
  BUDGET_CHART_DATA,
  BUDGET_CHART_OPTION,
} from "../../../assets/data/project";
import { useLocation } from "react-router-dom";

const BarChart = ({ bgColor, Bardata, budgetChart }) => {
  const location = useLocation();

  return (
    // <div className="col-12">
    <div className="tile chart-tile budget-chart canvas">
      <span className="title-subtile">Annual Outlook vs Budget</span>
      {location.pathname === "/home" ? (
        <Bar options={budgetChart(bgColor)} data={Bardata} />
      ) : (
        <Bar options={BUDGET_CHART_OPTION(bgColor)} data={BUDGET_CHART_DATA} />
      )}
    </div>
    // </div>
  );
};

export default BarChart;
