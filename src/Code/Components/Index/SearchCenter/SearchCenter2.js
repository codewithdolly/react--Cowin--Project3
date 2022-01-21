import React, { useState } from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import SearchCenter3 from "./SearchByDistrict";
import SearchByPin from "./SearchByPin";
// import SearchByMap from "./SearchByMap";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

const SearchCenter2 = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  return (
    <Box
      sx={{
        width: "60%",
        textAlign: "center",
        alignContent: "center",
        ml: 40,
        mt: 2,
      }}
    >
      <Tabs
        position="static"
        sx={{ borderBottom: "4px solid silver" }}
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="inherit"
        variant="fullWidth"
      >
        <Tab label="By District" {...a11yProps(0)} />
        <Tab label="By PIN" {...a11yProps(1)} />
        <Tab label="On the Map" {...a11yProps(2)} />
      </Tabs>
      <div>
        <TabPanel value={value} index={0}>
          <SearchCenter3 />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <SearchByPin />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <iframe src="https://www.google.com/maps/@17.4123487,78.4080455,11z" frameborder="0"  width="700"
            height="400" allowfullscreen="" title="map"></iframe>
            {/* <SearchByMap /> */}
        </TabPanel>
      </div>
    </Box>
  );
};

export default SearchCenter2;

//AIzaSyAXuXLvhNUOlQ3FcQCTdDJAN7iOnflyfUA