import React from "react";
import { useState} from "react";
import axios from 'axios';
import {useNavigate} from 'react-router-dom'
import Swal from 'sweetalert2';
const Register = () => {
  
  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });



  const [error, setError] = useState([]);

  const handleSubmit = (e) => {
  
    e.preventDefault();


    const formData = new FormData();
    formData.append("name", user.name);
    formData.append("email", user.email);
    formData.append("password", user.password);

    axios({
      method: "post",
      url: "http://localhost:8000/api/register",
      data: formData,
    })
    .then((res) => {

        if (res.data.errors) {
          setError(res.data.errors);
          const errorMessages = res.data.errors.join("<br>");
          Swal.fire({
            icon: 'error',
            title: 'Registration Failed',
            html: errorMessages,
          });
        } else {
        const userName = res.data.name;
        Swal.fire({
          icon: 'success',
          title: 'Registration Successful',
          html: `<span class="celebration-emoji" style="color:#637E4C;font-size:20px;   font-family: Georgia, 'Times New Roman', Times, serif;font-weight:400">Welcome ${userName} 🎉</span>`, // Use the userName variable
          showConfirmButton: false,
          timer: 2000,
        }).then(() => {
          navigate("/login");
        });
      }
    })
    
  
      .catch((error) => {
        console.log(error.response.data.message);
      });
  };
  
  return (
    <>
      {/* <section className="inner-intro bg-1 bg-overlay-black-70">
        <div className="container">
          <div className="row text-center intro-title">
            <div className="col-md-6 text-md-start d-inline-block">
              <h1 className="text-white">Register </h1>
            </div>
            <div className="col-md-6 text-md-end float-end">
              <ul className="page-breadcrumb">
                <li>
                    <i className="fa fa-home"></i> Home
                  <i className="fa fa-angle-double-right"></i>
                </li>
                
                <li>
                  <span>Register</span>{" "}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section> */}

      

<section className=" gradient-form" style={{ backgroundColor: '#eee', overflowY: 'hidden',height: '100vh' }}>
<div className="container py-2 h-100">

        <div className="row d-flex justify-content-center align-items-center h-100"  style={{ height: '90vh' }} >
          <div className="col-xl-10" >
            <div className="card rounded-3 text-black" >
              <div className="row g-0"  style={{ height: '90vh' }}>

              <div className="col-lg-6 mt-2" style={{ backgroundColor: 'rgba(238, 238, 238, 0.02)' }}>

                  <div className="card-body p-md-5 mx-md-4">
                    <div className="text-center">
                      <a href="/home">
                      <img
                        src="https://media.discordapp.net/attachments/1163503933537402931/1164692955756515468/qqqqqqq.png?ex=654423d7&is=6531aed7&hm=1f6b05cd8b932bbebedaef18a771524c3f48dd726e70594188aa296eedd599ce&=&width=408&height=440"
                        style={{ width: '150px' }}
                        alt="logo"
                      /></a>
                      <h4 className="mt-1 mb-5 pb-1">We are The CAMPE Team</h4>
                    </div>
                    <form
                  action="#"
                  onSubmit={handleSubmit}
                  className="signin-form"
                >
                      <p>Please create your account now</p>
                      <div className="form-outline mb-1">
                        <input
                                 id="name"
                                 onChange={(e) =>
                                  setUser((prev) => ({ ...prev, name: e.target.value }))
                                }
                                className="form-control"
                                type="text"
                                placeholder="Your Name"
                                name="name"
                                value={user.name}
                                required
                        />
                        {/* <label className="form-label" htmlFor="form2Example11">
                          Username
                        </label> */}
                      </div>
                      <div className="form-outline mb-1">
                        <input
                          className="form-control"
                          type="text"
                          placeholder="Enter your email"
                          name="email"
                          onChange={(e) =>
                            setUser((prev) => ({
                              ...prev,
                              email: e.target.value,
                            }))
                          }
                          value={user.email}
                          required
                        />
                    
                      </div>
                      <div className="form-outline mb-1">
                        <input
                           className="form-control"
                           type="password"
                           placeholder="Password"
                           name="password"
                           onChange={(e) =>
                             setUser((prev) => ({
                               ...prev,
                               password: e.target.value,
                             }))
                           }
                           value={user.password}
                           required
                        />
                    
                      </div>
                      <div className="text-center pt-1  pb-1">
                        <button
                          className="btn btn-primary btn-block fa-lg mb-3"
                          type="submit"
                        >
                          Register
                        </button>
                        {/* <a className="text-muted" href="#!">
                          Forgot password?
                        </a> */}
                      </div>
                      <div className="d-flex align-items-right justify-content-right pb-4">
                        <p className="mb-0 me-2">Do you have an account? <a href="/login" style={{ color: "green" }}>
                    Login
                  </a></p>
                        {/* <button type="button" className="btn btn-outline-danger">
                          Create new
                        </button> */}
                      </div>
                    </form>
                  </div>
                </div>
                {/* <div className="col-lg-6 d-flex align-items-center">
                 
<img src="https://i.pinimg.com/564x/7a/8f/d2/7a8fd229c2cff7b54f68c2b024f0e390.jpg" height="100%" width="100%" /> */}
                    
<div className="col-lg-6" style={{height: '736px'}}>
                 
<img src="https://i.pinimg.com/564x/61/d5/e8/61d5e805e7c3bb5a5453c374480a1884.jpg" height="91%" width="100%" className="mt-1"/>  
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

export default Register;