import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import { Link } from "react-router-dom";
import {
  BUDGET_CHART_DATA,
  BUDGET_CHART_OPTION,
  PROJECT,
  WORK_CHART_DATA,
  WORK_CHART_OPTIONS,
} from "../assets/data/project";
import data from "../assets/data/finalData.json";
import BarChart from "../components/common/BarChart";
import "./home.css";
import firstpageData from "../assets/data/firstpageData.json";
const newArr = [];
firstpageData.forEach((item) => {
  let color;
  switch (item.programCategory) {
    case "Asset Retirement":
    case "EDN":
    case "ECD":
    case "EFF":
    case "EPF":
    case "INF_Services":
      color = "#d4443b";
      break;
    case "Pipeline Repair":
      color = "#edc146";
      break;
    case "SCP RM":

    case "SCP INF/ENV":
      color = "#468e38";
      break;
    default:
      color = "#d4443b";
  }

  const itemFound = newArr.find(
    (i) => i.programCategory === item.programCategory
  );
  if (!itemFound) {
    newArr.push({ ...item, color, name: item.programCategory });
  } else {
    itemFound.annualOutlook += item.annualOutlook;
    itemFound.annualBudget += item.annualBudget;
    itemFound.color = color;
    itemFound.name = item.programCategory;
  }
});
newArr.forEach((item) => {
  item.percent = (item.annualOutlook / item.annualBudget) * 100;
});
const Home = () => {
  const [barData, setBarData] = useState(newArr);
  const [totalPortfolioYTD, setTotalPortfolioYTD] = useState(0);
  const [totalAnnualOutlook, setTotalAnnualOutlook] = useState(0);
  const [totalAnnualBudget, setTotalAnnualBudget] = useState(0);
  const [totalProjectEstimate, setTotalProjectEstimate] = useState(0);
  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(`https://localhost:7234/api/mainpage`);

        const data = await res.json();
        if (data && data.length) setBarData(data);
      } catch (error) {
        console.log("error", error);
      }
    }
    fetchData();
  }, []);

  useEffect(() => {
    const totalportfolioytd = barData.reduce((acc, item) => {
      return acc + item.portfolioYTDSpend;
    }, 0);

    const totalannualoutlook = barData.reduce((acc, item) => {
      return acc + item.annualOutlook;
    }, 0);

    const totalannualbudget = barData.reduce((acc, item) => {
      return acc + item.annualBudget;
    }, 0);

    const totalprojectest = barData.reduce((acc, item) => {
      return acc + item.totalProjectEstimate;
    }, 0);

    function formatNumber(num, precision = 2) {
      const map = [
        { suffix: "T", threshold: 1e12 },
        { suffix: "B", threshold: 1e9 },
        { suffix: "M", threshold: 1e6 },
        { suffix: "K", threshold: 1e3 },
        { suffix: "", threshold: 1 },
      ];

      const found = map.find((x) => Math.abs(num) >= x.threshold);
      if (found) {
        const formatted =
          (num / found.threshold).toFixed(precision) + found.suffix;
        return formatted;
      }

      return num;
    }
    const TotalPortfolioYTD = formatNumber(totalportfolioytd);
    const TotalAnnualOutlook = formatNumber(totalannualoutlook);
    const TotalAnnualBudget = formatNumber(totalannualbudget);
    const TotalProjectEstimate = formatNumber(totalprojectest);
    setTotalPortfolioYTD(TotalPortfolioYTD);
    setTotalAnnualBudget(TotalAnnualBudget);
    setTotalAnnualOutlook(TotalAnnualOutlook);
    setTotalProjectEstimate(TotalProjectEstimate);
  }, [barData]);

  console.log("newArr", newArr);

  const BUDGET_CHARTDATA = {
    labels: barData.map((budget) => budget.name),
    datasets: [
      {
        data: barData.map((budget) => budget.percent),
        backgroundColor: barData.map((budget) => budget.color),
        borderRadius: 4,
        borderSkipped: false,
      },
    ],
  };

  const BUDGET_CHARTOPTION = (bgColor) => {
    return {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        title: { display: true },
        legend: { display: false },
        tooltip: { enabled: false },
        datalabels: {
          anchor: "end",
          align: "end",
          clamp: false,
          display: true,
          color: bgColor,
          font: { weight: "bold", size: 12 },
          formatter: (value) =>Number(value).toFixed(2) + "%"
        },
        // value.toFixed(2) + "%",
      },
      scales: {
        x: {
          grid: { display: false },
          ticks: {
            autoSkip: false,
            maxRotation: 0,
            color: bgColor,
            font: { weight: "bold" },
            callback: function (v) {
              const charWidth = 10;
              const label = this.getLabelForValue(v);
              const barWidth = Math.round(
                document.querySelector(".budget-chart canvas")?.clientWidth /
                  barData.length
              );
              const maxLabelChar = Math.floor(barWidth / charWidth) + 1;
              if (label) {
                return label.length > maxLabelChar
                  ? label.slice(0, maxLabelChar - 2) + "..."
                  : label;
              }
            },
          },
        },
        y: {
          grid: { display: false },
          display: false,
        },
      },
    };
  };

  return (
    <div className="home-container">
      <div className="row">
        <div className="project-table-col col-lg-5">
          <div className="title-block">
            <h1>TCO FRED Framework</h1>
            <h4>Facilities Reliable Execution Delivery</h4>
          </div>
          <div className="project-block">
            <h4>List of Active Projects</h4>
            <div className="table-container">
              <table className="project-table">
                <thead>
                  <tr className="sticky">
                    <td>Project #</td>
                    <td>Project Title</td>
                    <td>Phase</td>
                  </tr>
                </thead>
                <tbody>
                  {data.map((data, idx) => (
                    <tr key={idx}>
                      <td>{data.AO_PROJECT_NUMBER}</td>
                      <td title={data.AO_PROJECT_TITLE}>
                        {data.AO_PROJECT_TITLE}
                      </td>
                      <td
                        className={[
                          "project-status",
                          data.Current_Phase.toLowerCase().replace(" ", "-"),
                        ].join(" ")}
                      >
                        {data.Current_Phase}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="portfolio-col col-lg-7">
          <h4>Overview of project portfolio</h4>
          <div className="row g-2">
            <div className="col-lg-6 col-xl-4">
              <div className="row g-2">
                <div className="col-6">
                  <div className="tile ">
                    <span className="tile-title">Total Portfolio</span>
                    <span className="tile-digits">160</span>
                  </div>
                </div>
                <div className="col-6">
                  <div className="tile ">
                    <span className="tile-title">Not Started Projects</span>
                    <span className="tile-digits">13</span>
                  </div>
                </div>
                <div className="col-12">
                  <div className="tile chart-tile work-chart">
                    <span className="title-subtile">Phase of work</span>
                    <Bar options={WORK_CHART_OPTIONS} data={WORK_CHART_DATA} />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-xl-8">
              <div className="row g-2">
                <div className="col-6 col-sm-3 col-lg-6 col-xl-3">
                  <div className="tile">
                    <span className="tile-title">Portfolio YTD Spend</span>
                    <span className="tile-digits">${totalPortfolioYTD}</span>
                  </div>
                </div>
                <div className="col-6 col-sm-3 col-lg-6 col-xl-3">
                  <div className="tile">
                    <span className="tile-title">Annual Outlook</span>
                    <span className="tile-digits">${totalAnnualOutlook}</span>
                  </div>
                </div>
                <div className="col-6 col-sm-3 col-lg-6 col-xl-3">
                  <div className="tile">
                    <span className="tile-title">Annual Budget</span>
                    <span className="tile-digits">${totalAnnualBudget}</span>
                  </div>
                </div>
                <div className="col-6 col-sm-3 col-lg-6 col-xl-3">
                  <div className="tile">
                    <span className="tile-title">Total Project Estimate</span>
                    <span className="tile-digits">${totalProjectEstimate}</span>
                  </div>
                </div>
                <div className="col-12">
                  {barData && barData?.length && (
                    <BarChart
                      bgColor="#fff"
                      Bardata={BUDGET_CHARTDATA}
                      budgetChart={BUDGET_CHARTOPTION}
                    />
                  )}

                  {/* <div className="tile chart-tile budget-chart">
                    <span className="title-subtile">
                      Annual Outlook vs Budget
                    </span>
                    <Bar
                      options={BUDGET_CHART_OPTION}
                      data={BUDGET_CHART_DATA}
                    />
                  </div> */}
                </div>
              </div>
            </div>
          </div>
          <div className="btn-block">
            <Link to="/firstpage">
              <div className="project-button">
                Projects Insights <i className="bi bi-arrow-right"></i>
              </div>
            </Link>
            <button className="project-button">
              Start A project <i className="bi bi-plus"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
