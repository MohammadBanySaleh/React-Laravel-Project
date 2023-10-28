import React from "react";

function Payment() {
  return (
    <div>
      <div class="mb-5 shadow-soft bg-white rounded-sm">
        <div class="py-3 px-4 px-xl-12 border-bottom">
          <ul class="list-group flex-nowrap overflow-auto overflow-md-visble list-group-horizontal list-group-borderless flex-center-between pt-1">
            <li class="list-group-item text-center flex-shrink-0 flex-xl-shrink-1">
              <div class="flex-content-center mb-3 width-40 height-40 border  border-width-2 border-gray mx-auto rounded-circle">
                1
              </div>
              <div class="text-gray-1">Customer information</div>
            </li>
            <li class="list-group-item text-center flex-shrink-0 flex-xl-shrink-1">
              <div class="flex-content-center mb-3 width-40 height-40 bg-primary border-width-2 border border-primary text-white mx-auto rounded-circle">
                2
              </div>
              <div class="text-primary">Payment information</div>
            </li>
            <li class="list-group-item text-center flex-shrink-0 flex-md-shrink-1">
              <div class="flex-content-center mb-3 width-40 height-40 border  border-width-2 border-gray mx-auto rounded-circle">
                3
              </div>
              <div class="text-gray-1">Booking is confirmed!</div>
            </li>
          </ul>
        </div>
        <div class="pt-4 pb-5 px-5">
          <h5
            id="scroll-description"
            class="font-size-21 font-weight-bold text-dark mb-4"
          >
            Your Card Information
          </h5>
          <ul
            class="nav nav-classic nav-choose border-0 nav-justified border mx-n3"
            role="tablist"
          >
            <li class="nav-item mx-3 mb-4 mb-md-0">
              <a
                class="rounded py-5 border-width-2 border nav-link font-weight-medium active"
                id="pills-one-example2-tab"
                data-toggle="pill"
                href="#pills-one-example2"
                role="tab"
                aria-controls="pills-one-example2"
                aria-selected="true"
              >
                <div class="height-25 width-25 flex-content-center bg-primary rounded-circle position-absolute left-0 top-0 ml-2 mt-2">
                  <i class="flaticon-tick text-white font-size-15"></i>
                </div>
                <div class="d-md-flex justify-content-md-center align-items-md-center flex-wrap">
                  <img
                    class="img-fluid mb-3"
                    src="../../assets/img/199x35/img1.jpg"
                    alt="Image-Description"
                  />
                  <div class="w-100 text-dark">Payment with credit card</div>
                </div>
              </a>
            </li>
            <li class="nav-item mx-3">
              <a
                class="rounded py-5 border-width-2 border nav-link font-weight-medium"
                id="pills-two-example2-tab"
                data-toggle="pill"
                href="#pills-two-example2"
                role="tab"
                aria-controls="pills-two-example2"
                aria-selected="false"
              >
                <div class="height-25 width-25 flex-content-center bg-primary rounded-circle position-absolute left-0 top-0 ml-2 mt-2">
                  <i class="flaticon-tick text-white font-size-15"></i>
                </div>
                <div class="d-md-flex justify-content-md-center align-items-md-center flex-wrap">
                  <img
                    class="img-fluid mb-3"
                    src="../../assets/img/199x35/img2.jpg"
                    alt="Image-Description"
                  />
                  <div class="w-100 text-dark">Payment with paypal</div>
                </div>
              </a>
            </li>
          </ul>

          <div class="tab-content">
            <div
              class="tab-pane fade pt-8 show active"
              id="pills-one-example2"
              role="tabpanel"
              aria-labelledby="pills-one-example2-tab"
            >
              <form class="js-validate">
                <div class="row">
                  <div class="col-sm-6 mb-4">
                    <div class="js-form-message">
                      <label class="form-label">Card Holder Name</label>

                      <input
                        type="text"
                        class="form-control"
                        name="Cardname"
                        placeholder=""
                        aria-label=""
                        required
                        data-msg="Please enter card holder name."
                        data-error-class="u-has-error"
                        data-success-class="u-has-success"
                      />
                    </div>
                  </div>

                  <div class="col-sm-6 mb-4">
                    <div class="js-form-message">
                      <label class="form-label">Card Number</label>

                      <input
                        type="number"
                        class="form-control"
                        name="Cardnumber"
                        placeholder=""
                        aria-label=""
                        required
                        data-msg="Please enter card number."
                        data-error-class="u-has-error"
                        data-success-class="u-has-success"
                      />
                    </div>
                  </div>

                  <div class="w-100"></div>

                  <div class="col-sm-6 mb-4">
                    <div class="row">
                      <div class="col-sm-6 mb-4 mb-md-0">
                        <div class="js-form-message">
                          <label class="form-label">Expiry Month</label>

                          <input
                            type="number"
                            class="form-control"
                            name="Expirymonth"
                            placeholder=""
                            aria-label=""
                            required
                            data-msg="Please enter expiry month."
                            data-error-class="u-has-error"
                            data-success-class="u-has-success"
                          />
                        </div>
                      </div>
                      <div class="col-sm-6">
                        <div class="js-form-message">
                          <label class="form-label">Expiry Year</label>

                          <input
                            type="number"
                            class="form-control"
                            name="Expiryyear"
                            placeholder=""
                            aria-label=""
                            required
                            data-msg="Please enter expiry year."
                            data-error-class="u-has-error"
                            data-success-class="u-has-success"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="col-sm-6 mb-4">
                    <div class="js-form-message">
                      <label class="form-label">CCV</label>

                      <input
                        type="number"
                        class="form-control"
                        name="ccvnumber"
                        placeholder=""
                        aria-label=""
                        required
                        data-msg="Please enter ccv number."
                        data-error-class="u-has-error"
                        data-success-class="u-has-success"
                      />
                    </div>
                  </div>

                  <div class="w-100"></div>

                  <div class="col">
                    <div class="js-form-message mb-5">
                      <div class="custom-control custom-checkbox d-flex align-items-center text-muted">
                        <input
                          type="checkbox"
                          class="custom-control-input"
                          id="termsCheckbox"
                          name="termsCheckbox"
                          required
                          data-msg="Please accept our Terms and Conditions."
                          data-error-class="u-has-error"
                          data-success-class="u-has-success"
                        />
                        <label class="custom-control-label" for="termsCheckbox">
                          <small>
                            By continuing, you agree to the
                            <a class="link-muted" href="../pages/terms.html">
                              Terms and Conditions
                            </a>
                          </small>
                        </label>
                      </div>
                    </div>
                    <button
                      type="submit"
                      class="btn btn-primary w-100 rounded-sm transition-3d-hover font-size-16 font-weight-bold py-3"
                    >
                      CONFIRM BOOKING
                    </button>
                  </div>
                </div>
              </form>
            </div>

            <div
              class="tab-pane fade pt-8"
              id="pills-two-example2"
              role="tabpanel"
              aria-labelledby="pills-two-example2-tab"
            >
              <form class="js-validate">
                <div id="login" data-target-group="idForm">
                  <div class="form-group">
                    <div class="js-form-message js-focus-state">
                      <label class="sr-only" for="signinEmail">
                        Email
                      </label>
                      <div class="input-group">
                        <div class="input-group-prepend">
                          <span class="input-group-text" id="signinEmailLabel">
                            <span class="fas fa-user"></span>
                          </span>
                        </div>
                        <input
                          type="email"
                          class="form-control"
                          name="email"
                          id="signinEmail"
                          placeholder="Email"
                          aria-label="Email"
                          aria-describedby="signinEmailLabel"
                          required
                          data-msg="Please enter a valid email address."
                          data-error-class="u-has-error"
                          data-success-class="u-has-success"
                        />
                      </div>
                    </div>
                  </div>

                  <div class="form-group mb-4">
                    <div class="js-form-message js-focus-state">
                      <label class="sr-only" for="signinPassword">
                        Password
                      </label>
                      <div class="input-group">
                        <div class="input-group-prepend">
                          <span
                            class="input-group-text"
                            id="signinPasswordLabel"
                          >
                            <span class="fas fa-lock"></span>
                          </span>
                        </div>
                        <input
                          type="password"
                          class="form-control"
                          name="password"
                          id="signinPassword"
                          placeholder="Password"
                          aria-label="Password"
                          aria-describedby="signinPasswordLabel"
                          required
                          data-msg="Your password is invalid. Please try again."
                          data-error-class="u-has-error"
                          data-success-class="u-has-success"
                        />
                      </div>
                    </div>
                  </div>

                  <div class="mb-2">
                    <button
                      type="submit"
                      class="btn btn-block btn-primary transition-3d-hover"
                    >
                      Login
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
