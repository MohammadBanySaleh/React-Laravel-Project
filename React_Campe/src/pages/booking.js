import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";

function Booking() {
  const navigate = useNavigate();
  const { days, date, price, packageName, packageImage, packageId } =
    useParams();
  const user_id = localStorage.getItem('user_id');
  // const [userDetails, setUserDetails] = useState([]);
  const [bookingDetails, setBookingDetails] = useState({
    name: "",
    phone: "",
    address: "",
  });
  console.log(packageName, packageImage);
  console.log(days, date, price);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBookingDetails({ ...bookingDetails, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      name: bookingDetails.name,
      date: date,
      phone: bookingDetails.phone,
      address: bookingDetails.address,
      user_id: user_id,
      package_id: packageId,
    };
    console.log("wwwwwwwwwwwwwwwwwwwww");
    console.log(formData);

    axios
      .post("http://127.0.0.1:8000/api/bookings", formData)
      .then((response) => {
        console.log("Booking successful!");
        console.log(response);
        Swal.fire({
          icon: "success",
          title: "Your Booking Submitted Successfully!",
          showConfirmButton: false,
          timer: 2500,
        });
        navigate('/home');
      })
      .catch((error) => {
        console.error("Booking failed.", error);
      });
  };




  // start date and period

  const startDate = new Date(date);
  const period = parseInt(days);

  const endDate = new Date(startDate);
  endDate.setDate(startDate.getDate() + period);

  const formattedEndDate = endDate.toISOString().split('T')[0];

  // console.log('Start Date:', startDate.toISOString().split('T')[0]);
  // console.log('End Date:', formattedEndDate);

  return (
    <>
      <main id="content" class="bg-gray space-2">
        <div class="container" style={{ marginTop: "100px" }}>
          <div className="row" style={{ display: "flex", height: "780px" }}>
            <div class="col-lg-8 col-xl-9 ">
              <div class="mb-5 shadow-soft bg-white rounded-sm">
                <div class="py-6 px-5 border-bottom" style={{paddingBottom: "10px"}}>
                  <div class="flex-horizontal-center">
                    <i
                      class="fi fi-rr-info font-size-40"
                      style={{ color: "#637E4C", marginTop: "-10px" }}
                    ></i>
                    <div class="ml-3">
                      <h3 class="font-size-18 font-weight-bold text-dark mb-0 text-lh-sm">
                        Your Information
                      </h3>
                      <p class="mb-0">
                        The delivery is estimated to arrive within 1 to 2 days
                      </p>
                    </div>
                  </div>
                </div>
                <div class="pt-4 pb-5 px-5 border-bottom" style={{ paddingTop: "0px" }}>
                  <form onSubmit={handleSubmit}>
                    <div className="form-group">
                      <label>Name</label>
                      <input
                        name="name"
                        type="text"
                        value={bookingDetails.name}
                        placeholder="Enter your name"
                        onChange={handleInputChange}
                        className="form-control"
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label>Phone Number</label>
                      <input
                        name="phone"
                        type="number"
                        value={bookingDetails.phone}
                        placeholder="Enter your phone number"
                        onChange={handleInputChange}
                        className="form-control"
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label>Address</label>
                      <input
                        name="address"
                        type="text"
                        value={bookingDetails.address}
                        placeholder="Enter your address"
                        onChange={handleInputChange}
                        className="form-control"
                        required
                      />
                    </div>

                    <div style={{ textAlign: 'center' }}>
                      <button
                        style={{ width: '200px' }}
                        type="submit"
                        class="btn btn-primary align-items-center font-weight-bold"
                      >
                        Book Now
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-xl-3">
              <div class="shadow-soft bg-white rounded-sm">
                <div class="pt-5 pb-4 px-5 border-bottom">
                  <a href="#" class="d-block mb-2">
                    <img
                      className="img-fluid rounded-sm"
                      alt="Image-Description"
                      src={
                        "http://127.0.0.1:8000/photo/" + packageImage

                      }
                    />
                  </a>
                  {/* {eventData.name} */}
                  <div class="flex-horizontal-center text-gray-1">
                    {packageName}
                  </div>
                </div>
                <div id="basicsAccordion">
                  <div class="card rounded-0 border-top-0 border-left-0 border-right-0">
                    <div
                      class="card-header card-collapse bg-transparent border-0"
                      id="basicsHeadingOne"
                    >
                      <h5 class="mb-0">
                        <button
                          type="button"
                          class="btn btn-link border-0 btn-block d-flex justify-content-between card-btn py-3 px-4 font-size-17 font-weight-bold text-dark"
                          data-toggle="collapse"
                          data-target="#basicsCollapseOne"
                          aria-expanded="true"
                          aria-controls="basicsCollapseOne"
                        >
                          Booking Detail
                          <span class="card-btn-arrow font-size-14 text-dark">
                            <i class="fas fa-chevron-down"></i>
                          </span>
                        </button>
                      </h5>
                    </div>
                    <div
                      id="basicsCollapseOne"
                      class="collapse show"
                      aria-labelledby="basicsHeadingOne"
                      data-parent="#basicsAccordion"
                    >
                      <div class="card-body px-4 pt-0">
                        <ul className="list-unstyled font-size-1 mb-0 font-size-16">
                          {/* <li className="d-flex justify-content-between py-2">
                            <span className="font-weight-medium">Date:</span>
                            <span className="text-secondary">
                              <a href="#" className="text-underline">
                                Edit
                              </a>
                              {eventData.date}
                            </span>
                          </li> */}

                          {/* <li className="d-flex justify-content-between py-2">
                            <span className="font-weight-medium">
                              Nights :{" "}
                            </span>
                            <span className="text-secondary">
                              {cart[0].nights}
                            </span>
                          </li> */}

                          <li className="d-flex justify-content-between py-2">
                            <span className="font-weight-medium">From:</span>
                            <span className="text-secondary">{date}</span>
                          </li>

                          <li className="d-flex justify-content-between py-2">
                            <span className="font-weight-medium">To:</span>
                            <span className="text-secondary">{formattedEndDate}</span>
                          </li>

                          <li className="d-flex justify-content-between py-2">
                            <span className="font-weight-medium">Period</span>
                            <span className="text-secondary">{days} days</span>
                          </li>
                          <hr style={{ marginBottom: '0px', marginTop: '0px', border: ' 1px solid gray' }} />
                          <li className="d-flex justify-content-between py-2" >
                            <span className="font-weight-medium" style={{ color: '#637E4C' }}>Total Price</span>
                            <span className="font-weight-medium" style={{ color: '#637E4C', important: true }}>{Math.floor(price)} JOD</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* <div class="card rounded-0 border-top-0 border-left-0 border-right-0">
                    <div
                      class="card-header card-collapse bg-transparent border-0"
                      id="basicsHeadingFour"
                    >
                      <h5 class="mb-0">
                        <button
                          type="button"
                          class="btn btn-link border-0 btn-block d-flex justify-content-between card-btn py-3 px-4 font-size-17 font-weight-bold text-dark"
                          data-toggle="collapse"
                          data-target="#basicsCollapseFour"
                          aria-expanded="false"
                          aria-controls="basicsCollapseFour"
                        >
                          Payment
                          <span class="card-btn-arrow font-size-14 text-dark">
                            <i class="fas fa-chevron-down"></i>
                          </span>
                        </button>
                      </h5>
                    </div>
                    <div
                      id="basicsCollapseFour"
                      class="collapse show"
                      aria-labelledby="basicsHeadingFour"
                      data-parent="#basicsAccordion"
                    >
                      <div class="card-body px-4 pt-0">
                        <ul class="list-unstyled font-size-1 mb-0 font-size-16">
                          <li class="d-flex justify-content-between py-2">
                            <span class="font-weight-medium">Subtotal</span>
                            <span class="text-secondary">
                            </span>
                          </li>

                          <li class="d-flex justify-content-between py-2">
                            <span class="font-weight-medium">Extra Price</span>
                            <span class="text-secondary">JD0,00</span>
                          </li>

                          <li class="d-flex justify-content-between py-2">
                            <span class="font-weight-medium">Tax</span>
                            <span class="text-secondary">0 %</span>
                          </li>

                          <li class="d-flex justify-content-between py-2 font-size-17 font-weight-bold">
                            <span class="font-weight-bold">Pay Amount</span>JD
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Booking;
