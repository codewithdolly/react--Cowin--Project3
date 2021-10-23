import React from "react";
import CallIcon from "@mui/icons-material/Call";
import Image1 from "../Images/1.png";

const Home = () => {
  return (
    <div>
      <img src={Image1} alt="" width="100%" height="600px" />
      <div className="header">
        <h2>
          <CallIcon /> Support for COVID-19
        </h2>
        <div className="leftSide">
          <p>Health Ministry</p>
          <p>91-11-23978046 or1075</p>
        </div>
        <div>
          <p>Child</p>
          <p>1098</p>
        </div>

        <div>
          <p>Mental Health</p>
          <p>08046110007</p>
        </div>

        <div>
          <p>Senior Citizens</p>
          <p>1500</p>
        </div>

        <div>
          <p>NCW</p>
          <p>7827170170</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
