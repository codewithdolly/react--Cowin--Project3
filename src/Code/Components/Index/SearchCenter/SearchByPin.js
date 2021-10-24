import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";

const SearchByPin=()=> {

  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
    >
      <div>
      <TextField
          id="outlined-password-input"
          label="Enter Your Pin"
          type="number"
          autoComplete="current-password"       
        />
        <Button variant="contained" sx={{ py: 1.7, px: 4, m: 1, borderRadius: 7}}>
          <b>SEARCH</b>
        </Button>
      </div>
    </Box>
  );
}

export default  SearchByPin;
