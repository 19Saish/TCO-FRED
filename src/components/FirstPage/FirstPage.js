import { Box, Grid } from "@mui/material";
import React from "react";
import { Bar } from "react-chartjs-2";
import {
  BUDGET_CHART_DATA,
  BUDGET_CHART_OPTION,
} from "../../assets/data/project";
import graph from "../../assets/img/graph.png";
import BarCard from "../common/BarCard";
import BarChart from "../common/BarChart";
import Filters from "../common/Filters";
import GraphCard from "../common/GraphCard";
import PriseShowCard from "../common/PriseShowCard";
import CommonTable from "../common/Table";

import "./index.css";

export default function FirstPage() {
  return (
    <div>
      <Filters />

      {/* Edit by gyan */}
      <div className="upperbar" style={{}}>
        <Box sx={{ width: { xs: "100%", lg: "16.68%" } }}>Safety</Box>
        <Box sx={{ width: { xs: "100%", lg: "58.34%" } }}>Budget</Box>
        <Box sx={{ width: { xs: "100%", lg: "16%" } }}>Progress</Box>
      </div>
      <Grid container spacing={1}>
        <Grid container item xs={12} lg={2} spacing={1}>
          {[
            { heading: "Facilities", value: "0" },
            { heading: "Serious Injuries", value: "0" },
            { heading: "Probable DIF", value: "Track" },
          ].map((data) => {
            return (
              <Grid
                style={{
                  display: "flex",
                }}
                item
                xs={4}
                lg={12}
                key={data.heading}
              >
                <PriseShowCard
                  heading={data.heading}
                  value={data.value}
                  currency="$"
                  subHeading="One TCO 2022 Target"
                />
              </Grid>
            );
          })}
        </Grid>
        <Grid container item xs={12} lg={5} spacing={1}>
          <Grid columnSpacing={1} container item lg={12}>
            {[
              { heading: "Portfolio YTD Spend", value: "179.73M" },
              { heading: "Annual Budget", value: "236.66M" },
            ].map((data) => {
              return (
                <Grid
                  style={{
                    display: "flex",
                  }}
                  item
                  xs={6}
                  lg={6}
                >
                  <BarCard
                    heading={data.heading}
                    currency="$"
                    value={data.value}
                  />
                </Grid>
              );
            })}
          </Grid>
          <Grid item xs={12} lg={12}>
            <Box>
              <div
                style={{
                  backgroundColor: "#fff",
                  borderRadius: "8px",
                  marginBottom: "20px",
                }}
              >
                <BarChart bgColor="rgba(0, 0, 0, 0.87)" />
              </div>
            </Box>
          </Grid>
        </Grid>
        <Grid container item xs={12} lg={2} spacing={1}>
          {[
            { heading: "Actual Progress", value: "74%" },
            { heading: "YTD Hours", value: "10K" },
            { heading: "Annual Hours", value: "7K" },
          ].map((data) => {
            return (
              <Grid item xs={4} lg={12} key={data.heading}>
                <PriseShowCard
                  heading={data.heading}
                  value={data.value}
                  currency=""
                  subHeading=""
                />
              </Grid>
            );
          })}
        </Grid>
        <Grid item xs={12} lg={3}>
          <GraphCard graph={graph} heading="Man Hours" />
        </Grid>
      </Grid>

      {/* Table Start */}

      <div className="my-2">
        <CommonTable />
      </div>

      {/* Table End */}
    </div>
  );
}
