import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Footer() {
  const navigate = useNavigate();
 
  const handleButtonClick = () => {
    navigate();
  };

  return (
    <footer className="footer mt-4">
      <div className="space-bottom-2 space-top-1">
        <div className="container">
          <div className="row justify-content-xl-between">
            {/* First Section - Image */}
            <div
              className="col-12 col-lg-4 col-xl-3dot1 mb-6 mb-md-10 mb-xl-0"
              style={{ display: "flex" }}
            >
              <div>
                <span
                  style={{ fontSize: "30px" }}
                  className="u-header__navbar-brand-text m-6"
                >
                  CAMPE
                </span>
                <img
                  src="/assets/img/qqqqqqq.png"
                  alt="Logo"
                  style={{
                    width: "60%",
                    height: "",
                    marginBottom: "0",
                    display: "block",
                  }}
                />
              </div>
            </div>

            {/* Second Section - Company */}
            <div
              className="col-12 col-md-6 col-lg-4 col-xl-1dot8 mb-6 mb-md-10 mb-xl-0"
              style={{ display: "flex" }}
            >
              <div>
                <h4 className="h6 font-weight-bold mb-2 mb-xl-4 font-size-17">
                  Links
                </h4>
                <ul className="list-group list-group-flush list-group-borderless mb-0">
                  <li>
                    <Link
                      className="text-decoration-on-hover list-group-item  list-group-item-action"
                      to={"/home"}
                      aria-haspopup="true"
                      aria-expanded="false"
                      aria-labelledby="homeSubMenu"
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <a
                      className="text-decoration-on-hover list-group-item  list-group-item-action"
                      href="/home#category"
                      aria-haspopup="true"
                      aria-expanded="false"
                      aria-labelledby="homeSubMenu"
                    >
                      {" "}
                      Category
                    </a>
                  </li>

                  <li
                    className="nav-item hs-has-sub-menu u-header__nav-item"
                    data-event="hover"
                    data-animation-in="slideInUp"
                    data-animation-out="fadeOut"
                  >
                    <Link
                      className="text-decoration-on-hover list-group-item  list-group-item-action"
                      to={"/contact"}
                      aria-haspopup="true"
                      aria-expanded="false"
                      aria-labelledby="homeSubMenu"
                    >
                      Contact
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="../others/about.html"
                      className="text-decoration-on-hover list-group-item  list-group-item-action"
                      to={"/about"}
                    >
                      About us
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* Third Section - Other Links */}
            <div
              className="col-12 col-md-6 col-lg-4 col-xl-1dot8 mb-6 mb-md-10 mb-xl-0"
              style={{ display: "flex" }}
            >
              <div>
                <div class="ml-md-6 ml-lg-0">
                  <div class="mb-4">
                    <h4 class="h6 font-weight-bold mb-2 font-size-17">
                      Contact Info
                    </h4>
                    <address class="pr-4">
                      <span class="mb-5 h6 font-weight-normal text-gray-1">
                        Ajloun Jordan.
                      </span>
                    </address>

                    <p class="mb-5 h6 font-weight-normal text-gray-1">
                      TEL: 00962771995104
                    </p>
                  </div>
                </div>

                <h4 className="h6 font-weight-bold mb-2 mb-xl-4 font-size-17">
                  Follow Us{" "}
                </h4>
                <ul className="list-group list-group-flush list-group-borderless mb-0">
                  {/* Add your other links here */}
                  <ul className="list-inline mb-0">
                    <li className="list-inline-item">
                      <a
                        className="btn btn-icon btn-social btn-bg-transparent"
                        href="https://www.facebook.com/your-facebook-profile"
                      >
                        <span
                          className="fab fa-facebook-f btn-icon__inner"
                          style={{ fontSize: "25px" }}
                        ></span>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a
                        className="btn btn-icon btn-social btn-bg-transparent"
                        href="https://twitter.com/your-twitter-profile"
                      >
                        <span
                          className="fab fa-twitter btn-icon__inner"
                          style={{ fontSize: "25px" }}
                        ></span>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a
                        className="btn btn-icon btn-social btn-bg-transparent"
                        href="https://www.instagram.com/your-instagram-profile"
                      >
                        <span
                          className="fab fa-instagram btn-icon__inner"
                          style={{ fontSize: "25px" }}
                        ></span>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a
                        className="btn btn-icon btn-social btn-bg-transparent"
                        href="https://www.linkedin.com/in/your-linkedin-profile"
                      >
                        <span
                          className="fab fa-linkedin-in btn-icon__inner"
                          style={{ fontSize: "25px" }}
                        ></span>
                      </a>
                    </li>
                  </ul>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;