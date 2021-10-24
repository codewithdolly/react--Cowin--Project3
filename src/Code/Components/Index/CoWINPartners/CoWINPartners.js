import React from "react";
import "../Index.scss";
import img1 from "../../Images/p1.png";
import img2 from "../../Images/p2.png";
import img3 from "../../Images/p3.png";
import img4 from "../../Images/p4.png";

const CoWINPartners = () => {
  return (
    <div>
      <div className="partnership">
        <h2 className=" partnership--header">Our Partners</h2>
        <img src={img1} alt="" className="img2" />
        <img src={img2} alt="" className="img2" />
        <img src={img3} alt="" className="img2" />
        <img src={img4} alt="" className="img2" />
      </div>
    </div>
  );
};

export default CoWINPartners;
