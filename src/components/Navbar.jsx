import React, { useState } from "react";
import upperlogo from "../assest/images/upperlogo.png";
import downlogo from "../assest/images/downlogo.png";
import { NavLink, useNavigate } from "react-router-dom";
import { signOut ,onAuthStateChanged} from "firebase/auth";
import { auth } from "../firebase";

function Navbar() {
  
  const isActive=localStorage.getItem("isActive")
  const [activeUser, setActiveUser] = useState({});
  const navigate =useNavigate()
  
  onAuthStateChanged(auth, (currentUser) => {
    setActiveUser(currentUser);
   
  });
  const logout =async()=>{
    await signOut(auth)
    // setActiveUser(activeUser)
    localStorage.setItem("isActive","")
    navigate("/")
  }

 
  return (
    <nav className="navbar navbar-expand-lg ">
      <div className="container ">
        <div className="col-3 Nav_logo ms-3">
          <div className="upper_logo">
            <img
              className="img-fluid"
              src={upperlogo}
              style={{ width: "25px", height: "25px" }}
              alt=""
            />
          </div>
          <div className="lowernav_logo">
            <img
              className="img-fluid"
              style={{ width: "25px", height: "25px" }}
              src={downlogo}
              alt=""
            />
          </div>
        </div>
        <div className="col">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav d-flex justify-content-center align-items-center">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  For Tenants
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  For Flatmates
                </a>
              </li>
              <li className="nav-item me-3">
                <a className="nav-link" href="#">
                  For Owners
                </a>
              </li>

              <li className="nav-item me-3">
                <button
                  className="btn btn-outline btn-sm   text-white"
                  style={{ background: "#69D2E7" }}
                >
                  Create Your Listing
                </button>
              </li>
             
              <li className="nav-item ms-3 me-2">
               <span className="text-success">{activeUser?.email}</span>
              
              </li>


              <li className="nav-item">

{isActive? <button
                  className="btn btn-outline btn-sm   text-white"
                  style={{ background: "#69D2E7" }}
                  onClick={logout}
                >
                  SignOut
                </button>: <NavLink
                to="/login"
                  className="btn btn-outline btn-sm  text-white"
                  style={{ background: "#F38630" }}
                >
                  Login/Signup
                </NavLink>}
               
              </li>
            
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
