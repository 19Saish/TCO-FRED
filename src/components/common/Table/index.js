import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Link } from "react-router-dom";

import finalData from '../../../assets/data/finalData.json'

const tableHeadData = [
  "Project Number",
  "Project Title",
  "Phase",
  "Project Engineer",
  "Action",
];



const CommonTable = () => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead
          sx={{
            background:
              "linear-gradient(0deg, rgba(0, 0, 0, 0.12), rgba(0, 0, 0, 0.12)), #FFFFFF",
          }}
        >
          <TableRow sx={{ padding: "6px" }}>
            {tableHeadData.map((data) => {
              return (
                <TableCell sx={{ padding: "6px" }} key={data}>
                  {data}
                </TableCell>
              );
            })}
          </TableRow>
        </TableHead>
        <TableBody>
          {finalData.map((data, idx) => {
            return (
              <TableRow
                key={idx}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell sx={{ padding: "6px" }}>{data.AO_PROJECT_NUMBER}</TableCell>
                <TableCell sx={{ padding: "6px" }}>{data.AO_PROJECT_TITLE}</TableCell>
                <TableCell
                  sx={{
                    padding: "6px",
                    color:
                      data.Current_Phase.toLowerCase() === "active"
                        ? "#3B873E"
                        : data.Current_Phase.toLowerCase() === "cancelled"
                        ? "#F44336"
                        : "black",
                  }}
                >
                  {data.Current_Phase}
                </TableCell>
                <TableCell sx={{ padding: "6px" }}>{data.TCO_RESPONSIBLE_ENG}</TableCell>
                {/* <TableCell sx={{ padding: "6px" }}>{data.category}</TableCell> */}

                <TableCell sx={{ padding: "6px" }}>
                  <Link to="/ninthpage" state={{powerbiLink: data?.POWER_BI_LINK, projectNumber: data?.AO_PROJECT_NUMBER }}>View</Link> 
                  
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CommonTable;
