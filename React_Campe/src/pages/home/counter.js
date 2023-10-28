

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function CounterComponent() {
  const [packagesCount, setPackagesCount] = useState(0);
  const [usersCount, setUsersCount] = useState(0);
  const [productsCount, setProductsCount] = useState(0);
  const [reviweCount, setReviweCount] = useState(0);

  const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/reviews").then((response) => {
      setReviweCount(response.data.length);
    });
    axios.get("http://127.0.0.1:8000/api/categories").then((response) => {
      const totalPackagesCount = response.data.reduce(
        (count, category) => count + category.packages.length,
        0
      );
      setPackagesCount(totalPackagesCount);
    });

    axios.get("http://127.0.0.1:8000/api/users").then((response) => {
      setUsersCount(response.data.length);
    });

    axios.get("http://127.0.0.1:8000/api/products").then((response) => {
      setProductsCount(response.data.length);
    });
  }, []);

  return (
    <div className="icon-block-center icon-center-v2 bg-primary">
      <div className="container text-center space-1">
        <div className="row">
          <div className="col-md-3">
            <i class="fi fi-rr-box-open text-white font-size-80 mb-3"></i>
            <h5 className="font-size-30 text-white font-weight-bold mb-2 js-counter">
              {packagesCount}
            </h5>
            <p className="text-white px-x2-2 text-lh-inherit px-uw-3">
              Number of packages
            </p>
          </div>

          <div className="col-md-3">
            <i class="fi fi-rr-user text-white font-size-80 mb-3"></i>
            <h5 className="font-size-30 text-white font-weight-bold mb-2 js-counter">
              {usersCount}
            </h5>
            <p className="text-white px-xl-2 text-lh-inherit px-uw-3">
              Number of Users
            </p>
          </div>

          <div className="col-md-3">
            <i class="fi fi-rr-shopping-cart-add text-white font-size-80 mb-3"></i>
            <h5 className="font-size-30 text-white font-weight-bold mb-2 js-counter">
              {productsCount}
            </h5>
            <p className="text-white px-xl-2 text-lh-inherit px-uw-3">
              Our Products
            </p>
          </div>

          <div className="col-md-3">
            <i class="fi fi-rr-heart  text-white font-size-80 mb-3"></i>
            <h5 className="font-size-30 text-white font-weight-bold mb-2 js-counter">
              {reviweCount}
            </h5>
            <p className="text-white px-xl-2 text-lh-inherit px-uw-3">
              Happy Customer
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CounterComponent;
