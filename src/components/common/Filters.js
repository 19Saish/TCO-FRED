import React from "react";
import {
  Button,
  IconButton,
  MenuItem,
  TextField,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { dropDown1, dropDown2, dropDown3 } from "../../assets/data/project";
import "./btn.css";
import { Grid } from "@mui/material";

export default function Filters() {
  return (
    <Grid
      style={{
        display: "flex",
        alignItems:'center',
        // marginTop: "15px",
        // gap: "1rem",
        padding: "1rem",
      }}
      container
      spacing={1.5}
    >
      <Grid item xs={12} md={3.5}>
      <TextField
        size="small"
        variant="outlined"
        fullWidth
        //   margin="dense"
        placeholder="Search"
        InputProps={{
          startAdornment: (
            <IconButton sx={{ position: "relative", right: "10px" }}>
              <SearchIcon />
            </IconButton>
          ),
        }}
      />
      </Grid>
      <Grid item xs={12} md={2}>
      <TextField
        id="outlined-select-currency"
        size="small"
        select
        // label="Select"
        defaultValue="FACILITY"
        // helperText="Please select your currency"
       fullWidth
      >
        {dropDown1.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
      </Grid>
      <Grid item xs={12} md={2}>
      <TextField
        id="outlined-select-currency"
        size="small"
        select
        // label="Select"
        defaultValue="CATEGORY"
        // helperText="Please select your currency"
        fullWidth
      >
        {dropDown2.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
      </Grid>
      <Grid item xs={12} md={2}>

      <TextField
        id="outlined-select-currency"
        size="small"
        select
        // label="Select"
        defaultValue="PHASE"
        // helperText="Please select your currency"
        fullWidth
      >
        {dropDown3.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
      </Grid>
      <Grid item xs={12} md={2.5}>
      <Button
      fullWidth
      className="firstPage-button">
        <i className="bi bi-plus"></i> Start A project
      </Button>
      </Grid>
    </Grid>
  );
}
