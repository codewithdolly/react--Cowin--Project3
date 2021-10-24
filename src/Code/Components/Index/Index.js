import React from "react";
import "./Index.scss";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Home from "./Home/Home";
import CoWINPartners from "./CoWINPartners/CoWINPartners"
import Vaccination from "./Vaccination/Vaccination";
import SingleCard from "./SingleCard/SingleCard";
import SearchCenter2 from "./SearchCenter/SearchCenter2";



function Index() {
  return (
    <div>
        <Header />
        <Home />
        <SingleCard />
        <SearchCenter2 />
        <Vaccination />
        <CoWINPartners />
        <Footer />
    </div>
  );
}

export default Index;


