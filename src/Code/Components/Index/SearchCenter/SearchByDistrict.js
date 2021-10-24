import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";

const state = [
  {
    value: "0",
    label: "Select With State",
  },
  {
    value: "1",
    label: "Telengana",
  },
  {
    value: "2",
    label: "Andhra Pradesh",
  },
  {
    value: "3",
    label: "Assam",
  },
  {
    value: "4",
    label: "Bihar",
  },
  {
    value: "5",
    label: "Chandhigadh",
  },
];

const district = [
  {
    value: "0",
    label: "Select With district",
  },
  {
    value: "1",
    label: "Hyderabad",
  },
  {
    value: "2",
    label: "Andhra Pradesh",
  },
  {
    value: "3",
    label: "Assam",
  },
  {
    value: "4",
    label: "Bihar",
  },
  {
    value: "5",
    label: "Chandhigadh",
  },
];

const SearchByDistrict=()=> {
  const [state1, setState] = useState("0");
  const [district1, setDistrict] = useState("0");

  const handleChange = (event) => {
    setState(event.target.value);
  };
  const handleChange2 = (event2) => {
    setDistrict(event2.target.value);
  };

  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          id="outlined-select-currency-native"
          select
          value={state}
          onChange={handleChange}
          SelectProps={{
            native: true,
          }}
        >
          {state.map((option) => (
            <option value={option.value}>{option.label}</option>
          ))}
        </TextField>
        <TextField
          id="outlined-select-currency-native"
          select
          value={district}
          onChange={handleChange2}
          SelectProps={{
            native: true,
          }}
        >
          {district.map((option) => (
            <option value={option.value}>{option.label}</option>
          ))}
        </TextField>
        <Button variant="contained"  sx={{ py: 1.7, px: 5, m: 1, borderRadius: 9}}>
          <b>SEARCH</b>
        </Button>
      </div>
    </Box>
  );
}

export default  SearchByDistrict;
