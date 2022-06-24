import React, { useState } from "react";
import upperlogo from "../assest/images/upperlogo.png";
import downlogo from "../assest/images/downlogo.png";
import { NavLink, useNavigate } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../firebase";
import Toaster from "../utils/ToastMessage";
function SignUpPage() {
  const navigate = useNavigate();
  const defaultUserData = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phone: "",
  };
  const [userData, setUserData] = useState({ ...defaultUserData });
 
  const onHandleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const register = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(
        auth,
        userData.email,
        userData.password
      );
      Toaster("success", "User Created Succesfully");
      setUserData({ ...defaultUserData });
      navigate("/login");
    } catch (err) {
      Toaster("", err.message);
    }
  };

  return (
    <div className="container mt-5 login_page">
      <div className="cross_bar">X</div>
      <div className="row">
        <div className="col Logo_box">
          <div className="upper_logo">
            <img className="img-fluid" src={upperlogo} alt="" />
          </div>
          <div className="lower_logo">
            <img className="img-fluid" src={downlogo} alt="" />
          </div>
          <h1>
            <span style={{ color: "#F38630" }}>Flat</span>and
            <span style={{ color: "#69D2E7" }}>Flatmates</span>
          </h1>
          <br />
          <div className="border_line"></div>
          <br />
          <h3>SignUp</h3>
        </div>
      </div>
      <div className="row">
        <div className="col input_box">
          <div className="d-flex flex-row justify-content-center align-items-center ">
            <div className="input-group mb-3 me-2">
              <input
                type="text"
                className="form-control"
                placeholder="First Name"
                aria-label="First Name"
                aria-describedby="basic-addon1"
                onChange={onHandleChange}
                name="firstName"
                value={userData.firstName}
              />
            </div>
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Last Name"
                aria-label="Last Name"
                aria-describedby="basic-addon1"
                onChange={onHandleChange}
                name="lastName"
                value={userData.lastName}
              />
            </div>
          </div>

          <div className="input-group mb-3">
            <input
              type="email"
              className="form-control"
              placeholder="Enter your email address"
              aria-label="email"
              aria-describedby="basic-addon1"
              onChange={onHandleChange}
              name="email"
              value={userData.email}
            />
          </div>
          <div className="input-group mb-3">
            <input
              type="phone"
              className="form-control"
              placeholder="Phone Number (optional)"
              aria-label="phone"
              aria-describedby="basic-addon1"
              onChange={onHandleChange}
              name="phone"
              value={userData.phone}
            />
          </div>
          <div className="input-group mb-3">
            <input
              type="password"
              className="form-control"
              placeholder="Enter your password"
              aria-label="password"
              aria-describedby="basic-addon1"
              onChange={onHandleChange}
              name="password"
              value={userData.password}
            />
          </div>
          <div className="input-group mb-3">
            <input
              type="password"
              className="form-control"
              placeholder="Re-enter Password"
              aria-label="password"
              aria-describedby="basic-addon1"
              onChange={onHandleChange}
              name="password"
              value={userData.password}
            />
          </div>

          <button
            className="btn btn-outline btn-lg mb-4 mt-2 text-white"
            style={{ background: "#F38630" }}
            onClick={register}
          >
            SignUp
          </button>

          <NavLink to="/login" rel="noopener noreferrer">
            Already registered?
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default SignUpPage;
