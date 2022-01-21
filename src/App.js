import React from 'react'
import Header from "./Code/Components/Index/Header/Header";
import Footer from "./Code/Components/Index/Footer/Footer";
import Home from "./Code/Components/Index/Home/Home";
import CoWINPartners from "./Code/Components/Index/CoWINPartners/CoWINPartners";
import Vaccination from "./Code/Components/Index/Vaccination/Vaccination";
import SearchCenter from "./Code/Components/Index/SearchCenter/SearchCenter"
import SingleCard from "./Code/Components/Index/SingleCard/SingleCard";
import SingleCard2 from "./Code/Components/Index/SingleCard/SingleCard2"
import SingleCard3 from "./Code/Components/Index/SingleCard/SingleCard3"
import SingleCard4 from "./Code/Components/Index/SingleCard/SingleCard4"
import PostMethos from './Code/Components/AccessFromAPI/PostMethod/PostMethod';


const App=()=> {
  return (
   <> 
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
      {/* <GetMethod /> */}
      {/* <PostMethos /> */}

    </>
  )
}

export default App
