import React from "react";
import Blogs from "../components/Blogs";
import CitySection from "../components/CitySection";
import Filter from "../components/Filter";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Testimonials from "../components/Testimonials";
import WhyChoose from "../components/WhyChoose";

function HomePage() {
  return (
    <>
      <div className="conatiner-fluid ">
        <div className="topar ">
          <div className="navbar_div">
            <Navbar />
          </div>
        </div>

        <Filter />
        <div className=" container mt-3 city_section">

        <CitySection/>
        </div>
        <div className=" container mt-3 whychoose">

        <WhyChoose/>
        </div>
        <div className="container mt-3 p-3 testimonials">

       <Testimonials/>
        </div>
        <div className="container mt-3 p-3 blogs">
        <Blogs/>
        </div>
        <div className="container-fluid mt-5  footer">
      <Footer/>
      
        </div>
      </div>
    </>
  );
}

export default HomePage;
