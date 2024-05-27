import React, { useEffect, useRef, useState } from "react";
import "./MilestoneGraph.css";
import Bars from "../Bars/Bars";
import milestoneData from "../../../../assets/data/milestone.json";
import Bars2 from "../Bars2/Bars2";
import moment from "moment";
// console.log("milestoneData", milestoneData);

function MilestoneGraph({ ProjectN }) {
  const myref = useRef();

  const [graphData, setGraphData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        // setTimeout(() => {
        //   if (milestoneData && milestoneData.length > 0)
        //     setGraphData(milestoneData);
        // }, 100);
        const res = await fetch(
          `https://localhost:7234/api/scheduleapi/${ProjectN}`
        );
        const data = await res.json();
        // console.log("data", data);
        if (data && data.length) setGraphData(data);
      } catch (error) {
        console.log("error", error);
      }
    }
    fetchData();
  }, [ProjectN]);

  const [left, setLeft] = useState();

  const [monthsTotal, setMonthsTotal] = useState();
  const [axisYear, setAxisYear] = useState([]);
  const [actualyear, setActualyear] = useState();
  const [endyear, setEndyear] = useState();
  const [actualDate, setActualDate] = useState();
  const [endDate, setEndDate] = useState();

  useEffect(() => {
    if (graphData && graphData.length > 0) {
      const leastDate = graphData.reduce((previous, current) => {
        let sdate = current.projecT_START_DATE_ACTUAL;
        if (!previous) {
          return moment(sdate);
        } else {
          return previous.diff(moment(sdate), "days") < 0
            ? previous
            : moment(sdate);
        }
      }, null);
      const maxDate = graphData.reduce((previous, current) => {
        let sdate = current.projecT_FINISH_DATE;
        if (!previous) {
          return moment(sdate);
        } else {
          return previous.diff(moment(sdate), "days") > 0
            ? previous
            : moment(sdate);
        }
      }, null);
      let sP = `${leastDate.year()}-01-01`;
      let startDateP = moment(sP);
      setActualDate(startDateP);
      setActualyear(leastDate.year());
      setEndyear(maxDate.year());
      let sPEnd = `${maxDate.year()}-12-31`;
      let endDateP = moment(sPEnd);
      setEndDate(endDateP);
      const months = endDateP.diff(startDateP, "months");
      setMonthsTotal(months + 1);
    }
  }, [graphData]);

  const calculateLeft = (sdate) => {
    let startDate = new Date(sdate).toISOString().slice(0, 10);
    let startDateP = moment(startDate);
    let actualD = moment(actualDate);
    let diff = startDateP.diff(actualD, "months");
    return (diff * myref?.current?.offsetWidth) / monthsTotal;
  };
  return (
    <div>
      <div className="graph">
        {graphData.map((item, index) => (
          <div className="BarContainer" key={index}>
            <div
              className="bars"
              style={{
                left: `${calculateLeft(item.projecT_START_DATE_ACTUAL)}px`,
              }}
            >
              <Bars itemD={item} />
            </div>
            <div
              className="bars"
              style={{ left: `${calculateLeft(item.projecT_FINISH_DATE)}px` }}
            >
              <Bars2 itemD={item} />
            </div>
          </div>
        ))}
        <div className="line" ref={myref}>
          <div className="lineEnd"></div>
        </div>

        {monthsTotal &&
          Array.from(Array(monthsTotal + 1), (e, index) => {
            debugger;
            console.log("actualyear", actualyear);
            console.log(
              "left",
              (index * myref?.current.offsetWidth) / monthsTotal
            );
            return (
              <>
                {index % 3 === 0 && (
                  <div
                    className="vert-line"
                    style={{
                      position: "absolute",
                      bottom: 58,
                      left: `${
                        (index * myref?.current.offsetWidth) / monthsTotal
                      }px`,
                    }}
                  ></div>
                )}
                {index % 3 === 0 && (
                  <div
                    style={{
                      fontSize: "9px",
                      position: "absolute",
                      bottom: 35,
                      left: `${
                        (index * myref?.current.offsetWidth) / monthsTotal +
                        (myref?.current.offsetWidth * 2) / monthsTotal
                      }px`,
                    }}
                  >
                    {`Q${(index % 4) + 1}`}
                  </div>
                )}
                {index % 12 === 0 && (
                  <div
                    className="year"
                    style={{
                      position: "absolute",
                      bottom: 0,
                      left: `${
                        (index * myref?.current.offsetWidth) / monthsTotal - 10
                      }px`,
                      bottom: "0px",
                    }}
                  >
                    {+actualyear + index / 12}
                  </div>
                )}
              </>
            );
          })}
      </div>
    </div>
  );
}

export default MilestoneGraph;
