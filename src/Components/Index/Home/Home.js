import React from "react";
import "../Index.scss"
import CallIcon from "@mui/icons-material/Call";
import Image1 from "../../Images/v4.jpg";
import SingleCard from "../SingleCard/SingleCard";
import SingleCard2 from "../SingleCard/SingleCard2";
import SingleCard3 from "../SingleCard/SingleCard3";
import SingleCard4 from "../SingleCard/SingleCard4";
import Vaccination from "../Vaccination/Vaccination";
import SearchCenter from "../SearchCenter/SearchCenter";
import CoWINPartners from "../CoWINPartners/CoWINPartners";

const Home = () => {
  return (
    <>
      <img src={Image1} alt="" width="100%" height="500px" />
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
      <SearchCenter />
      <Vaccination />
      <div style ={{display:"flex", backgroundColor:"Menu", justifyContent:"space-evenly"}}>
      <SingleCard />
      <SingleCard2 />
      <SingleCard3 />
      <SingleCard4 />
      </div>
      <CoWINPartners />
    </>
  );
};

export default Home;
