import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ReactPaginate from "react-paginate";
import { useNavigate } from "react-router-dom";

// Define the packages component
function Packages() {
  const { id } = useParams();

  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [data, setData] = useState([]);
  const [selectedUsers, setSelectedUsers] = useState("");
  // const [selectedSpeed, setselectedSpeed] = useState("");
  const [currentPage, setCurrentPage] = useState(0);
  const [resultCount, setResultCount] = useState(0);
  const itemsPerPage = 2;
  // const [packages, setPackages] = useState([]);
  const [category, setCategory] = useState([]);

  const navigate = useNavigate();

  const handleButtonClick = (id) => {
    navigate(`/category/${id}`);
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/categories").then((response) => {
      setCategory(response.data);
    });
  }, []);


  useEffect(() => {
    axios.get(`http://127.0.0.1:8000/api/packages`).then((response) => {
      let filteredData = response.data.filter((packages) => {
        return (
          packages.category_id === parseInt(id) &&
          packages.name.toLowerCase().includes(searchQuery.toLowerCase())
        );
      });
      if (selectedUsers !== "") {
        filteredData = filteredData.filter(
          (packages) => packages.number_of_person === parseInt(selectedUsers)
        );
        console.log(selectedUsers);
      }

      setData(filteredData);
      setResultCount(filteredData.length);
    });
  }, [id, searchQuery, selectedUsers]);

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

  const pageCount = Math.ceil(data.length / itemsPerPage);

  const offset = currentPage * itemsPerPage;
  const currentData = data.slice(offset, offset + itemsPerPage);

  let filteredData = currentData.filter((packages) => {
    const price = parseFloat(packages.price);
    const min = minPrice !== "" ? parseFloat(minPrice) : 0;
    const max = maxPrice !== "" ? parseFloat(maxPrice) : Infinity;
    return price >= min && price <= max;
  });

  return (
    <div className="mt-10">
      <main id="content" role="main">
        <div class="container pt-5 pt-xl-8">
          <div class="row mb-5 mb-md-8 mt-xl-1 pb-md-1">
            <div class="col-lg-4 col-xl-3 order-lg-1 width-md-50">
              <div class="navbar-expand-lg navbar-expand-lg-collapse-block">
                <button
                  class="btn d-lg-none mb-5 p-0 collapsed"
                  type="button"
                  data-toggle="collapse"
                  data-target="#sidebar"
                  aria-controls="sidebar"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <i class="far fa-caret-square-down text-primary font-size-20 card-btn-arrow ml-0"></i>
                  <span class="text-primary ml-2">Sidebar</span>
                </button>
                <div id="sidebar" class="collapse navbar-collapse">
                  <div class="mb-6 w-100">
                    <div className="sidenav border border-color-2 rounded-xs">
                      <div
                        id="shopCartAccordion"
                        className="accordion rounded shadow-none"
                      >
                        <div className="border-5">
                          <div className="pb-4 mb-2">
                            <div class="font-weight-bold font-size-20 text-dark mb-3  mt-3 mx-2">
                              Filter the results:
                            </div>

                            <div
                              id="cityCategoryAccordion"
                              class="accordion rounded-0 shadow-none border-top"
                            >
                              <div class="border-0">
                                <div
                                  class="card-collapse"
                                  id="cityCategoryHeadingOne"
                                >
                                  <h3 class="mb-0">
                                    <button
                                      type="button"
                                      class="btn btn-link btn-block card-btn py-2 px-5 text-lh-3 collapsed"
                                      data-toggle="collapse"
                                      data-target="#cityCategoryOne"
                                      aria-expanded="false"
                                      aria-controls="cityCategoryOne"
                                    >
                                      <span class="row align-items-center">
                                        <span class="font-weight-bold font-size-19 text-dark mb-3">
                                          Categories
                                        </span>
                                        <span class="col-3 text-right">
                                          <span class="card-btn-arrow">
                                            <span class="fas fa-chevron-down small"></span>
                                          </span>
                                        </span>
                                      </span>
                                    </button>
                                  </h3>
                                </div>
                                <div
                                  id="cityCategoryOne"
                                  class="collapse show"
                                  aria-labelledby="cityCategoryHeadingOne"
                                  data-parent="#cityCategoryAccordion"
                                >
                                  {category.map((category) => (
                                    <div
                                      class="card-body pt-0 mt-1 px-5 pb-4"
                                      key={category.id}
                                    >
                                      <div class="form-group d-flex align-items-center justify-content-between font-size-1 text-lh-md text-secondary mb-3">
                                        <div class="custom-control custom-radio">
                                          <input
                                            type="radio"
                                            class="custom-control-input"
                                            id={`brand${category.id}`}
                                            name="cityRadio"
                                            onClick={() =>
                                              handleButtonClick(category.id)
                                            }
                                          />
                                          <label
                                            class="custom-control-label font-size-large"
                                            for={`brand${category.id}`}
                                          >
                                            {category.name} - ({" "}
                                            {[category.packages.length]} items)
                                          </label>
                                        </div>
                                      </div>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </div>

                            <div className="search-container px-4 w-100">
                              <span class="font-weight-bold font-size-19 text-dark mb-3">
                                Search
                              </span>
                              <input
                                type="text"
                                placeholder="Search by name..."
                                value={searchQuery}
                                onChange={handleSearchInputChange}
                                className="search-input"
                              />
                            </div>
                            <div className="d-block  text-left font-weight-normal mb-2 mt-3  px-4 font-size-18">
                              <span class="font-weight-bold font-size-19 text-dark mb-3">
                                Price
                              </span>
                            </div>
                            <div className="  px-4">
                              <div className="input-group">
                                <input
                                  type="number"
                                  placeholder="Min Price"
                                  value={minPrice}
                                  onChange={(e) => setMinPrice(e.target.value)}
                                  className="form-control"
                                />
                                <input
                                  type="number"
                                  placeholder="Max Price"
                                  value={maxPrice}
                                  onChange={(e) => setMaxPrice(e.target.value)}
                                  className="form-control"
                                />
                              </div>
                            </div>
                          </div>

                          <div className="px-4 mb-3">
                            <span class="font-weight-bold font-size-19 text-dark mb-3">
                              Number of person:
                            </span>
                            <select
                              className=" w-100  border broder-color-2 p-1"
                              onChange={(e) => setSelectedUsers(e.target.value)}
                              value={selectedUsers}
                            >
                              <option value="">All</option>
                              <option value="1">1 person</option>
                              <option value="2">2 person</option>
                              <option value="3">3 person</option>
                              <option value="4">4 person</option>
                              <option value="5">5 person</option>
                              <option value="6">6 person</option>
                              <option value="7">7 person</option>
                              <option value="8">8 person</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-8 col-xl-9 order-md-1 order-lg-2">
              <div class="d-flex justify-content-between align-items-center mb-4">
                <h3 class="font-size-21 font-weight-bold mb-2 text-lh-1">
                  {resultCount} results found
                </h3>
              </div>

              <div class="u-slick__tab">
                <div className="tab-content" id="pills-tabContent">
                  <div
                    id="pills-three-example1"
                    role="tabpanel"
                    aria-labelledby="pills-three-example1-tab"
                    data-target-group="groups"
                  >
                    <ul className="d-block list-unstyled products-group prodcut-list-view">
                      {/* {filteredpackagess.map((packages) => ( */}
                      {filteredData.map((packages) => (
                        <div>
                          <li
                            key={packages.id}
                            className="card mb-5 overflow-hidden"
                          >
                            <div className="product-item__outer w-100">
                              <div className="row">
                                <div className="col-md-5 col-xl-4">
                                  <div className="product-item__header">
                                    <div className="position-relative">
                                      <a href={`/package/${packages.id}`}>
                                        <div
                                          className="js-slide bg-img-hero min-height-300 "
                                          style={{
                                            backgroundImage: `url(http://127.0.0.1:8000/photo/${packages.image})`,
                                            // width: "340px",
                                            // height: "280px",
                                            // backgroundSize: "100% 100%",
                                          }}
                                        ></div>
                                      </a>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-md-7 col-xl-5 flex-horizontal-center ">
                                  <div className="w-100 position-relative m-4 ms-auto">
                                    <a href="../packages/packages-single-v1.html">
                                      <span className="font-weight-bold font-size-17 text-dark d-flex mb-1">
                                        {packages.name}
                                      </span>
                                    </a>
                                    <div className="card-body p-0">
                                      <a
                                        href="../packages/packages-single-v1.html"
                                        className="d-block mb-1"
                                      ></a>
                                      <div className="mb-3">
                                        <div className="d-inline-flex align-items-center font-size-14 text-lh-1 text-primary">
                                          <div className="green-lighter mr-2">
                                            <small className="fas fa-star"></small>
                                            <small className="fas fa-star"></small>
                                            <small className="fas fa-star"></small>
                                            <small className="fas fa-star"></small>
                                            <small className="fas fa-star"></small>
                                          </div>
                                          <span className="text-secondary font-size-14 mt-1">
                                            48 Reviews
                                          </span>
                                        </div>
                                      </div>
                                      <div className="d-flex">
                                        <div className="mr-5">
                                          <ul className="list-unstyled mb-0">
                                            <li className="media mb-2 text-gray-1 align-items-center">
                                              <small className="mr-3">
                                                <small className="flaticon-user font-size-16"></small>
                                              </small>
                                              FOR {packages.number_of_person}{" "}
                                              PERSON
                                              <div className="media-body font-size-1">
                                                {packages.person}
                                              </div>
                                            </li>
                                          </ul>
                                          <div className="ml-1">
                                            <ul className="list-unstyled mb-0">
                                              <li className="media mb-2 text-gray-1 align-items-center">
                                                <small className="mr-3">
                                                  <small className="fa fa-info font-size-16"></small>
                                                </small>
                                                <div className="media-body font-size-1.5">
                                                  <strong>
                                                    {" "}
                                                    {packages.description}{" "}
                                                  </strong>
                                                </div>
                                              </li>
                                            </ul>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="col col-xl-3 align-self-center py-4 py-xl-0 border-top border-xl-top-0">
                                  <div className="border-xl-left border-color-7 py-5">
                                    <div className="ml-md-4 ml-xl-0">
                                      <div className="text-center text-md-left text-xl-center d-flex flex-column mb-2 pb-1 ml-md-3 ml-xl-0">
                                        <div className="mb-0">
                                          <span className="font-weight-bold font-size-22">
                                            {parseFloat(packages.price).toFixed(
                                              2
                                            )}
                                          </span>
                                          <span className="mr-1 font-size-14 text-gray-1">
                                            / JOD
                                          </span>
                                        </div>
                                      </div>
                                      <div className="d-flex justify-content-center justify-content-md-start justify-content-xl-center">
                                        <a
                                          href={`/package/${packages.id}`}
                                          className="btn btn-outline-primary d-flex align-items-center justify-content-center font-weight-bold min-height-50 border-radius-3 border-width-2 px-2 px-5 py-2"
                                        >
                                          View Detail
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                        </div>
                      ))}
                    </ul>
                    <div className="pagination-container">
                      <ReactPaginate
                        previousLabel={"Previous"}
                        nextLabel={"Next"}
                        breakLabel={"..."}
                        breakClassName={"break-me"}
                        pageCount={pageCount}
                        marginPagesDisplayed={2}
                        pageRangeDisplayed={5}
                        onPageChange={handlePageClick}
                        containerClassName={"pagination"}
                        subContainerClassName={"pages pagination"}
                        activeClassName={"active"}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Packages;
