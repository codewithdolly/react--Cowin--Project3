import React from "react";
import "./Index.scss";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Home from "./Home/Home";
import CoWINPartners from "./CoWINPartners/CoWINPartners";
import Vaccination from "./Vaccination/Vaccination";
import SingleCard from "./SingleCard/SingleCard";
import SearchCenter from "./SearchCenter/SearchCenter";
import SingleCard2 from "./SingleCard/SingleCard2";
import SingleCard3 from "./SingleCard/SingleCard3";
import SingleCard4 from "./SingleCard/SingleCard4";

function Index() {
  return (
    <div>
      <Header />
      <Home />
      <SearchCenter />
      <Vaccination />
      <div style ={{display:"flex", backgroundColor:"Menu", justifyContent:"space-evenly"}}>
      <SingleCard />
      <SingleCard2 />
      <SingleCard3 />
      <SingleCard4 />
      </div>
      <CoWINPartners />
      <Footer />
    </div>
  );
}

export default Index;
