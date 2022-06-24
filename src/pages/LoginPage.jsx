import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaUser } from "react-icons/fa";
import upperlogo from "../assest/images/upperlogo.png";
import downlogo from "../assest/images/downlogo.png";
import { NavLink, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import Toaster from "../utils/ToastMessage";
function LoginPage() {
  const navigate = useNavigate();
  const defaultUserData = {
    email: "",
    password: "",
  };
  const [userData, setUserData] = useState({ ...defaultUserData });
  
  const [isActive,setIsActive]=useState(false)

  

  const onHandleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const login = async () => {
  
    try {
      const users = await signInWithEmailAndPassword(
        auth,
        userData.email,
        userData.password
      );
      setIsActive(true)
      Toaster("success", "Login Success");
      localStorage.setItem("isActive", isActive);
      setUserData({ ...defaultUserData });
      navigate("/");
    } catch (err) {
      Toaster("", err.message);
    }
  };
  return (
    <>
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
            <h3>Login</h3>
          </div>
        </div>
        <div className="row">
          <div className="col input_box">
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
                type="password"
                className="form-control"
                placeholder="Enter your password"
                aria-label="Username"
                aria-describedby="basic-addon1"
                onChange={onHandleChange}
                name="password"
                value={userData.password}
              />
            </div>

            <button
              className="btn btn-outline btn-lg mb-4 mt-2 text-white"
              style={{ background: "#F38630" }}
              onClick={login}
            >
              Login
            </button>

            <a href="#" rel="noopener noreferrer">
              Forgot Password?
            </a>
          </div>
        </div>
        <div className="align-items-center d-flex justify-content-center p-4">
          <button className="btn btn-outline-success p-2 me-2 align-items-center d-flex justify-content-center">
            <FcGoogle className="me-2" size={20} />
            Google
          </button>
          <div className="verticle_line"></div>
          <NavLink
            to="/signup"
            className="btn btn-outline-success p-2 align-items-center d-flex justify-content-center"
          >
            <FaUser className="me-2" size={20} fill="#F38630" />
            Sign Up
          </NavLink>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
