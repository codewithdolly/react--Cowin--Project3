import React from "react";
import { Button, Typography } from "@mui/material";
import { padding } from "@mui/system";

export default function SearchCenter1() {
  return (
    <div style={{padding:"3rem"}}>
      <center>
        <Typography variant="h3">Search Your Nearest Vaccination Center</Typography>
        <Typography>
          Get a preview list of the nearest centers and check availability of
          vaccination slots
        </Typography>
        <Button href="#Health Ministry">Login to Book you slot</Button>
      </center>
    </div>
  );
}
