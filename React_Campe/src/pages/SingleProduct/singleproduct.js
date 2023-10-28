import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import Reviews from "./ReviewRedux/componentReview";
import Details from "./productDetail";
import Slider from "./products_slider/products_slider";
import productImage from './singlephoto2.jpg'; // Import your image
import { useParams } from 'react-router-dom';



function SingleProduct() {
  const [details, setDetails] = useState([]);
  const [selectedDays, setSelectedDays] = useState(1);
  const [updatedPrice, setUpdatedPrice] = useState(0);
  const user_id = localStorage.getItem("user_id");
  const navigate = useNavigate();
  const { id } = useParams();
  console.log('my test');
  console.log(id);
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const getProductDetails = () => {
      axios
        .get(`http://127.0.0.1:8000/api/packages/${id}`)
        .then((response) => {
          setDetails(response.data[0]);
          console.log(response.data[0].name);
        })
        .catch((error) => console.error(error));
    };

    getProductDetails();
  }, [id]);

  // price / day
  useEffect(() => {
    let pricePerDay = details.price || 0;
    let newPrice = (pricePerDay * selectedDays) / 1.3;

    if (selectedDays == 1) {
      newPrice = pricePerDay;
    }
    setUpdatedPrice(newPrice);
  }, [selectedDays, details.price]);

  // date after 2 days
  const [minDate, setMinDate] = useState(calculateMinDate());

  function calculateMinDate() {
    const today = new Date();
    today.setDate(today.getDate() + 2); // Add 2 days to the current date
    return today.toISOString().split("T")[0];
  }

  // Navigation
  const handleNavigate = (e) => {
    e.preventDefault();
    const numberOfDays = selectedDays;
    const price = updatedPrice;
    const selectedDate = document.getElementById("startDate").value;
    // const packageName = details.name;
    const url = `/booking/${numberOfDays}/${selectedDate}/${price}/${details.name}/${details.image.slice(1)}/${details.id}`;
    if (user_id == null) {
      navigate('/login')
    } else {
      navigate(url);
    }
  };

  return (
    <main id="content">
      <div style={{ textAlign: 'center', marginTop: '80px' }}>
        <img
          src={productImage}
          alt="Product Image"
          style={{ width: '100%', height: '300px', objectFit: 'cover' }}
        />
      </div>

      <br />
      <br />
      <br />
      <div class="container">
        <div class="row">
          <div class="col-lg-8 col-xl-9">
            <Details id={id} />
            {/* <div class="py-4 border-top border-bottom mb-4">
              <ul class="list-group list-group-borderless list-group-horizontal flex-center-between text-center mx-md-4 flex-wrap">
                <li class="list-group-item text-lh-sm ">
                  <i class="flaticon-ruler text-primary font-size-40 mb-1 d-block"></i>
                  <div class="text-gray-1">{ } M</div>
                </li>
                <li class="list-group-item text-lh-sm ">
                  <i class="flaticon-download-speed text-primary font-size-40 mb-1 d-block"></i>
                  <div class="text-gray-1">{ } KMPH </div>
                </li>
                <li class="list-group-item text-lh-sm ">
                  <i class="flaticon-user-2 text-primary font-size-40 mb-1 d-block"></i>
                  <div class="text-gray-1">
                    {details.number_of_person} People
                  </div>
                </li>
                <li class="list-group-item text-lh-sm ">
                  <i class="flaticon-bed-1 text-primary font-size-40 mb-1 d-block"></i>
                  <div class="text-gray-1">{ } Beds</div>
                </li>
              </ul>
            </div> */}
            <Reviews id={id} />
          </div>

          <div class="col-lg-4 col-xl-3">
            <div class="mb-4">
              <div class="border border-color-7 rounded mb-5">
                <div class="p-4 m-1">
                  <h6 class="d-block text-gray-1 font-weight-normal mb-0 text-left">
                    Number of Rent Day
                  </h6>
                  <select
                    name="days"
                    id="daySelect"
                    onChange={(e) => setSelectedDays(parseInt(e.target.value))}
                    value={selectedDays}
                  >
                    <option value="1">1 Day </option>
                    <option value="2">2 Days </option>
                    <option value="3">3 Days </option>
                    <option value="4">4 Days</option>
                    <option value="5">5 Days </option>
                    <option value="6">6 Days </option>
                    <option value="7">7 Days </option>
                  </select>

                  <br />
                  <form onSubmit={handleNavigate}>
                    <h6 class="d-block text-gray-1 font-weight-normal mb-0 text-left">
                      Starting Date
                    </h6>
                    <div className="mb-4">
                      <div className="border-bottom border-width-2 border-color-1">
                        <div className="input-group">
                          <div className="input-group-prepend">
                            <span className="input-group-text">
                              <i className="flaticon-calendar text-primary font-weight-semi-bold"></i>
                            </span>
                          </div>
                          <input
                            type="date"
                            className="form-control"
                            id="startDate"
                            name="startDate"
                            min={minDate}
                            required
                          />
                        </div>
                      </div>
                    </div>
                    <h4>
                      Total Price: {Math.floor(updatedPrice)} <br />
                    </h4>
                    <div class="text-center">
                      <button
                        type="submit"
                        class="btn btn-primary d-flex align-items-center justify-content-center height-60 w-100 mb-xl-0 mb-lg-1 transition-3d-hover font-weight-bold"
                      >
                        Book Now
                      </button>
                    </div>
                  </form>

                </div>
              </div>
              {/* <div class="border border-color-7 rounded p-4 mb-5">
                <h6 class="font-size-17 font-weight-bold text-gray-3 mx-1 mb-3 pb-1">
                  Why Book With Us?
                </h6>
                <div class="d-flex align-items-center mb-3">
                  <i class="flaticon-star font-size-25 text-primary mr-3 pr-1"></i>
                  <h6 class="mb-0 font-size-14 text-gray-1">
                    <a href="#">No-hassle best price guarantee</a>
                  </h6>
                </div>
                <div class="d-flex align-items-center mb-3">
                  <i class="flaticon-support font-size-25 text-primary mr-3 pr-1"></i>
                  <h6 class="mb-0 font-size-14 text-gray-1">
                    <a href="#">Customer care available 24/7</a>
                  </h6>
                </div>
                <div class="d-flex align-items-center mb-3">
                  <i class="flaticon-favorites-button font-size-25 text-primary mr-3 pr-1"></i>
                  <h6 class="mb-0 font-size-14 text-gray-1">
                    <a href="#">Hand-picked Tours &amp; Activities</a>
                  </h6>
                </div>
                <div class="d-flex align-items-center mb-0">
                  <i class="flaticon-airplane font-size-25 text-primary mr-3 pr-1"></i>
                  <h6 class="mb-0 font-size-14 text-gray-1">
                    <a href="#">Free Travel Insureance</a>
                  </h6>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default SingleProduct;
