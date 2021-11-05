import React from "react";
import "../Index.scss";
import map from "../../Images/map.png";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import Button from "@mui/material/Button";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

function Vaccination() {
  return (
    <>
      <div className="vaccination">
        <center>
          <h1 className="VaccinesDelivered">
            India is running the world’s largest vaccination drive
          </h1>
        </center>
        <div className="vaccinationStatus">
          <div>
            <img src={map} alt="map" width="650px" className="mapimg" />
          </div>
          <div className="VaccinesdetailChart">
            <div className="Vaccinesdetails">
              <p>
                <LocalHospitalIcon />
              </p>
              <div className="Vaccinesdetail">
                <p>Vaccines Delivered</p>
                <small>
                  <span className="VaccinesDelivered">1,01,24,55,510 +</span>
                  <ArrowUpwardIcon /> 61.14 Lakhs
                </small>
              </div>
            </div>
            <div className="Vaccinesdetails">
              <p>
                <LocalHospitalIcon />
              </p>
              <div className="Vaccinesdetail">
                <p>Citizens Fully Vaccinated</p>
                <small>
                  <span className="VaccinesDelivered">29.75 Crore +</span>
                  <ArrowUpwardIcon /> 35.08 Lakhs
                </small>
              </div>
            </div>
            <div className="Vaccinesdetails">
              <p>
                <PeopleAltIcon />
              </p>
              <div className="Vaccinesdetail">
                <p>% of Fully Vaccinated</p>
                <small>
                  <span className="VaccinesDelivered"> 41.77%</span>
                </small>
              </div>
            </div>
            <Button
              href="https://dashboard.cowin.gov.in/"
              variant="outlined"
              color="inherit"
              endIcon={<KeyboardArrowDownIcon />}
              fullWidth
            >
              View vaccination Dashboard
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Vaccination;
