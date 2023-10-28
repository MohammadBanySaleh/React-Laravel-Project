import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';
import React, { useState, useEffect } from "react";
import Googel from "../SignIn";

const Login = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();

    axios({
      method: "post",
      url: "http://localhost:8000/api/login",
      data: user,
    })
      .then((res) => {
        console.log("Response Data:", res.data.user.id);
        if (res.data.errors) {
          setError(res.data.errors);
        } else {
          // Store user data in session storage
          // sessionStorage.setItem("user_id", res.data.id);
          localStorage.setItem("user_id", res.data.user.id);
          setIsLoggedIn(true);
          // Redirect to the home page or perform any other actions
          navigate(-1);
        }
      })
      .catch((error) => {
        // Handle error with SweetAlert
        Swal.fire({
          title: 'Error',
          text: 'An error occurred while logging in. Please try again later.',
          icon: 'error',
        });
        console.error('Login error:', error);
      });


  };




  return (
    <>
      <section
        className=" gradient-form"
        style={{
          backgroundColor: "#eee",
          overflowY: "hidden",
          height: "100vh",
        }}
      >
        <div className="container py-2 h-100">
          <div
            className="row d-flex justify-content-center align-items-center h-100"
            style={{ height: "90vh" }}
          >
            <div className="col-xl-10">
              <div className="card rounded-3 text-black">
                <div className="row g-0" style={{ height: "90vh" }}>
                  <div
                    className="col-lg-6 mt-5"
                    style={{ backgroundColor: "rgba(238, 238, 238, 0.02)" }}
                  >
                    <div className="card-body p-md-5 mx-md-4">
                      <div className="text-center">
                        <a href="/home">
                          <img
                            src="https://media.discordapp.net/attachments/1163503933537402931/1164692955756515468/qqqqqqq.png?ex=654423d7&is=6531aed7&hm=1f6b05cd8b932bbebedaef18a771524c3f48dd726e70594188aa296eedd599ce&=&width=408&height=440"
                            style={{ width: "150px" }}
                            alt="logo"
                          />
                        </a>
                        <h4 className="mt-1 mb-5 pb-1">
                          We are The CAMPE Team
                        </h4>
                      </div>
                      <form
                        action="#"
                        onSubmit={handleSubmit}
                        className="signin-form"
                      >
                        <p>Please login to your account</p>
                        <div className="form-outline mb-4">
                          <input
                            id="name"
                            className="form-control"
                            onChange={(e) =>
                              setUser((prev) => ({
                                ...prev,
                                email: e.target.value,
                              }))
                            }
                            type="text"
                            placeholder="Email"
                            name="email"
                            value={user.email}
                            required
                          />
                          {/* <label className="form-label" htmlFor="form2Example11">
                          Username
                        </label> */}
                        </div>
                        <div className="form-outline mb-1">
                          <input
                            onChange={(e) =>
                              setUser((prev) => ({
                                ...prev,
                                password: e.target.value,
                              }))
                            }
                            id="Password"
                            className="form-control"
                            type="password"
                            placeholder="Password"
                            name="Password"
                            value={user.password}
                            required
                          />
                        </div>
                        <div className="text-center pt-1  pb-1">
                          <button
                            className="btn btn-primary btn-block fa-lg mb-3"
                            type="submit"
                          >
                            Log in
                          </button>
                          
                          
                            <Googel />                             

                          <br></br>
                          {/* <a className="text-muted" href="#!">
                          Forgot password?
                        </a> */}
                        </div>
                        <div className="d-flex align-items-right justify-content-right pb-4">

                          <p className="mb-0 me-2">
                            Don't have an account?{" "}
                            <a href="/register" style={{ color: "green" }}>
                              Sign Up
                            </a>

                          </p>
                          {/* <button type="button" className="btn btn-outline-danger">
                          Create new
                        </button> */}
                        </div>
                      </form>
                    </div>
                  </div>
                  {/* <div className="col-lg-6 d-flex align-items-center">
                 
<img src="https://i.pinimg.com/564x/7a/8f/d2/7a8fd229c2cff7b54f68c2b024f0e390.jpg" height="100%" width="100%" /> */}

                  <div className="col-lg-6 " style={{ height: "736px" }}>
                    <img
                      src="https://i.pinimg.com/564x/61/d5/e8/61d5e805e7c3bb5a5453c374480a1884.jpg"
                      height="91%"
                      width="100%"
                      className="mt-1"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );



};
export default Login