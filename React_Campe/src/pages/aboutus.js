import React from 'react'

import CounterComponent from "./home/counter";

export default function Aboutus() {


  return (
    <div>
      {/* <!-- ========== MAIN CONTENT ========== --> */}
      <main id="content">
        {/* <!-- Hero Section --> */}
        <div
          className="bg-img-hero text-center mb-4"
          style={{
            backgroundImage:
              " url(../../assets/img/summer-camp-2048px-1199232997-2x1-1.webp)",
            height: "550px",
          }}
        >
          <div className="container space-top-xl-3 py-6 py-xl-0">
            <div className="row justify-content-center py-xl-4">
              <div className="py-xl-10 py-5">
                <h1 className="font-size-40 font-size-xs-30 text-white font-weight-bold mb-0">
                  About Us
                </h1>
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb breadcrumb-no-gutter justify-content-center mb-0">
                    <li className="breadcrumb-item font-size-14">
                      {" "}
                      <a className="text-white" href="../home/index.html">
                        Home
                      </a>{" "}
                    </li>
                    <li
                      className="breadcrumb-item custom-breadcrumb-item font-size-14 text-white active"
                      aria-current="page"
                    >
                      About
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- End Slider --> */}
        {/* <!-- Features Section --> */}
        <div className="container text-center space-1">
          {/* <!-- Title --> */}
          <div className="w-md-80 w-lg-50 text-center mx-md-auto pb-1">
            <h2 className="section-title text-black font-size-30 font-weight-bold">
              Why Choose
            </h2>
          </div>
          {/* <!-- End Title --> */}
          {/* <!-- Features --> */}
          <div className="mb-8">
            <div className="row">
              {/* <!-- Icon Block --> */}
              <div className="col-md-4">
                <i className="flaticon-camping text-primary font-size-80 mb-3"></i>
                <h5 className="font-size-17 text-dark font-weight-bold mb-2">
                  <a href="#">Camping</a>
                </h5>
                <p className="text-gray-1 px-xl-2 px-uw-7">
                  Camping is an outdoor recreational activity that involves staying in tents, camper vans, or other temporary shelters in natural settings, typically away from urban areas.
                </p>
              </div>
              {/* <!-- End Icon Block --> */}

              {/* <!-- Icon Block --> */}
              <div className="col-md-4">
                <i className="flaticon-car text-primary font-size-80 mb-3"></i>
                <h5 className="font-size-17 text-dark font-weight-bold mb-2">
                  <a href="#">Delivery Service</a>
                </h5>
                <p className="text-gray-1 px-xl-2 px-uw-7">
                Experience the convenience of our delivery service for a stress-free camping adventure
                </p>
              </div>
              {/* <!-- End Icon Block --> */}

              {/* <!-- Icon Block --> */}
              <div className="col-md-4">

                <i className="flaticon-world text-primary font-size-80 mb-3"></i>
                <h5 className="font-size-17 text-dark font-weight-bold mb-2">
                  <a href="#">Worldwide Coverage</a>
                </h5>
                <p className="text-gray-1 px-xl-2 px-uw-7">
                  More than 500 camps in over at your service
                </p>
              </div>
              {/* <!-- End Icon Block --> */}
            </div>
          </div>
          {/* <!-- End Features --> */}
        </div>
        {/* <!-- End Features Section --> */}
        {/* <!--Banner--> */}
        <div
          className=" bg-img-hero space-3 space-top-lg-4 space-bottom-lg-3"
          style={{
            backgroundImage: `url('../../assets/img/camping_touring_3840x1820.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        // style={imagefluid1}
        >
          <div
            className="text-center mt-xl-2"

          >
            <h5 className="text-white font-size-41 font-weight-bold mb-2">
              Campe Highlights
            </h5>
            <h6 className="text-white font-size-21 font-weight-bold mb-3 mb-lg-5 opacity-7">
              Your New Campe Idea
            </h6>
            {/* Video link code */}
            <a
              className="js-fancybox d-inline-block u-media-player"
              href="https://www.youtube.com/watch?v=QY5WDJCJkm8&ab_channel=LOBOFilms"
              data-speed="700"
              data-animate-in="zoomIn"
              data-animate-out="zoomOut"
              data-caption="MyTravel - Responsive Website Template"
              id="youtube-autoplay-link"
            >
              <span className="u-media-player__icon u-media-player__icon--lg bg-transparent text-white">
                <span className="flaticon-multimedia font-size-60 u-media-player__icon-inner"></span>
              </span>
            </a>
          </div>
        </div>
        {/* <!--End Banner--> */}
        {/* <!-- Testimonials Section --> */}
        {/* <!-- End Testimonials Section --> */}
        {/* <!-- Features Section --> */}
        <br></br> <br></br> <br></br> <br></br>
        <CounterComponent />
        <br></br>
        {/* <!-- End Features Section --> */}
        {/* <!-- Team --> */}
        <div className="team ">
          <div className="container space-top-1">

            <div className="w-md-80 w-lg-50 text-center mx-md-auto pb-1">
              <h2 className="section-title text-black font-size-30 font-weight-bold mb-10">
                Deticated Team
              </h2>
            </div>

            <div className="row text-center pb-2">
              <div className="col-lg-4 col-md-6 inner-right inner-bottom-sm inner-left">
                <div className="pb-3">
                  <figure className="d-inline-block u-avatar-image rounded-circle overflow-hidden">
                    <img src="../../assets/img/shathaaa.jpg" alt="Image-Description" style={{ width: '300px', height: '260px' }} />
                  </figure>
                </div>
                <h1 className="font-size-22 font-weight-bold text-gray-11 mb-0">Shatha</h1>

              </div>
              <div className="col-lg-4 col-md-6 inner-right inner-bottom-sm inner-left">
                <div className="pb-3">
                  <figure className="d-inline-block u-avatar-image rounded-circle overflow-hidden">
                    <img src="../../assets/img/حسن.jpg" alt="Image-Description" style={{ width: '300px', height: '260px' }} />
                  </figure>
                </div>
                <h1 className="font-size-22 font-weight-bold text-gray-11 mb-0">Hasan</h1>

              </div>
              <div className="col-lg-4 col-md-6 inner-right inner-bottom-sm inner-left">
                <div className="pb-3">
                  <figure className="d-inline-block u-avatar-image rounded-circle overflow-hidden">
                    <img src="../../assets/img/lamaPNG.PNG" alt="Image-Description" style={{ width: '300px', height: '260px' }} />
                  </figure>
                </div>
                <h1 className="font-size-22 font-weight-bold text-gray-11 mb-0">Lama</h1>

              </div>
              <div className="col-lg-4 col-md-6 inner-right inner-bottom-sm inner-left">
                <div className="pb-3">
                  <figure className="d-inline-block u-avatar-image rounded-circle overflow-hidden">
                    <img src="../../assets/img/banysaleh.jpg" alt="Image-Description" style={{ width: '300px', height: '260px' }} />
                  </figure>
                </div>
                <h1 className="font-size-22 font-weight-bold text-gray-11 mb-0">Mohammad</h1>

              </div>
              <div className="col-lg-4 col-md-6 inner-right inner-bottom-sm inner-left">
                <div className="pb-3">
                  <figure className="d-inline-block u-avatar-image rounded-circle overflow-hidden">
                    <img src="../../assets/img/razan2.png" alt="Image-Description" style={{ width: '300px', height: '260px' }} />
                  </figure>
                </div>
                <h1 className="font-size-22 font-weight-bold text-gray-11 mb-0">Razan</h1>

              </div>
              <div className="col-lg-4 col-md-6 inner-right inner-bottom-sm inner-left">
                <div className="pb-3">
                  <figure className="d-inline-block u-avatar-image rounded-circle overflow-hidden">
                    <img src="../../assets/img/سامي_النجادات.jpg" alt="Image-Description" style={{ width: '300px', height: '260px' }} />
                  </figure>
                </div>
                <h1 className="font-size-22 font-weight-bold text-gray-11 mb-0">sami</h1>

              </div>
            </div>

          </div>
        </div>
      </main >
      {/* <!-- ========== END MAIN CONTENT ========== --> */}
    </div >
  );
}
