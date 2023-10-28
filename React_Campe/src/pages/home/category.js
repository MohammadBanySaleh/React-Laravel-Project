import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
// import { data } from "jquery";

function Category() {
  const navigate = useNavigate();
  const [category, setCategory] = useState([]);

  const handleButtonClick = (id) => {
    navigate(`/category/${id}`);
  };

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/categories").then((response) => {
      setCategory(response.data);
    });
  }, []);

  return (
    <div
      id="category"
      className="destination-block destination-v5 border-bottom border-color-8"
    >
      <div className="container space-1">
        <div className="w-md-80 w-lg-50 text-center mx-md-auto mb-5 mt-3">
          <h2 className="section-title text-black font-size-30 font-weight-bold mb-0">
            Our categories
          </h2>
        </div>
        <div className="row">
          {category.map((category) => (
            <div
              className="col-md-6 col-xl-3 mb-3 mb-md-4 pb-1"
              key={category.id}
            >
              <div
                className="min-height-350 bg-img-hero rounded-border p-5 gradient-overlay-half-bg-gradient transition-3d-hover shadow-hover-2"
                style={{
                  
                  backgroundImage: `url(http://127.0.0.1:8000/photo/${category.image})`,
                }}
                 onClick={() => handleButtonClick(category.id)}
              >
                <header className="w-100 d-flex justify-content-between mb-3">
                  <div>
                    <div className="pb-3 text-lh-1">
                      <a
                        className="text-white font-weight-bold font-size-20"
                        onClick={() => handleButtonClick(category.id)}
                      >
                        {category.name}
                      </a>
                    </div>

                    <div className="d-inline-flex px-3 py-1 rounded-pill bg-white">
                      <h6
                        className="font-size-15"
                        style={{ border: "none", backgroundColor: "white" }}
                        onClick={() => handleButtonClick(category.id)}
                      >
                        {[category.packages.length]} packages
                      </h6>
                    </div>
                    <div className="pb-3 text-lh-1">
                      <p
                        className="text-white font-weight-bold font-size-21"
                        onClick={() => handleButtonClick(category.id)}
                      >
                        {category.description}
                      </p>
                    </div>
                  </div>
                </header>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Category;
