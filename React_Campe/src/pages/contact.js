
// import img1 from "./boat1.jpg";
import 'bootstrap/dist/js/bootstrap'; // Import Bootstrap JavaScript
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';

const formStyles = {
  display: 'flex',
  flexDirection: 'column',
  maxWidth: '100%', // Adjust the width as needed
  margin: '0 auto',
};

const labelStyles = {
  fontSize: '16px',
  marginBottom: '8px',
};

const inputStyles = {
  width: '100%',
  padding: '10px',
  marginBottom: '20px',
  border: '1px solid #ccc',
  borderRadius: '4px',
};

const textareaStyles = {
  width: '100%',
  padding: '10px',
  marginBottom: '20px',
  border: '1px solid #ccc',
  borderRadius: '4px',
};

const submitStyles = {
  backgroundColor: 'rgb(99, 126, 76)',
  color: '#fff',
  width: '50%',
  margin: '0 auto',
  padding: '10px 20px',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
};

const myStyle2 = {
  width: '100%',
  height: '500px',
  border: '0',
  allowFullScreen: true,
};

export default function Contact() {
  const form = useRef(); // Define the form ref here

  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    message: '',
  });

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_z14c58i', 'template_a1t3o1s', form.current, 'FCG9nAGaOYeIEJIpB')
      .then((result) => {
        console.log(result.text);
        console.log('Message sent');


        // Clear the form input fields
        setFormData({
          user_name: '',
          user_email: '',
          message: '',
        });
      })
      .catch((error) => {
        console.error(error);
      });

    Swal.fire({
      title: 'Success!',
      text: 'Your message has been sent.',
      icon: 'success',
      showConfirmButton: false,
      timer: 1500,
    });
  }




  const link = `https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d867.5044848559738!2d35.420466052502704!3d29.574081331131033!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1697891932635!5m2!1sen!2sin`



  return (
    <div>
      {/* <!-- ========== MAIN CONTENT ========== --> */}
      <main id="content">
        {/* <!-- Hero Section --> */}
        <div class="bg-img-hero text-center mb-5 mb-lg-8" style={{ backgroundImage: '  url(../../assets/img/summer-camp-2048px-1199232997-2x1-1.webp)', height: '550px' }}>
          <div class="container space-top-xl-3 py-6 py-xl-0">
            <div class="row justify-content-center py-xl-4">
              {/* <!-- Info --> */}
              <div class="py-xl-10 py-5">
                <h1 class="font-size-40 font-size-xs-30 text-white font-weight-bold mb-0">
                  Contact Us
                </h1>
                <nav aria-label="breadcrumb">
                  <ol class="breadcrumb breadcrumb-no-gutter justify-content-center mb-0">
                    <li class="breadcrumb-item font-size-14">
                      {" "}
                      <a class="text-white" href="../home/index.html">
                        Home
                      </a>{" "}
                    </li>
                    <li
                      class="breadcrumb-item custom-breadcrumb-item font-size-14 text-white active"
                      aria-current="page"
                    >
                      Contact Us
                    </li>
                  </ol>
                </nav>
              </div>
              {/* <!-- End Info --> */}
            </div>
          </div>
        </div>
        {/* <!-- End Hero Section --> */}
        <div class="border-bottom border-color-8 pb-6 pb-lg-8 mb-5 mb-lg-7">
          <div class="container pb-1">
            <div class="row justify-content-center">
              <div class="col-md-6 col-lg-3">
                <div class="mb-5 mb-lg-0 text-center text-md-center">
                  <h6 class="text-gray-3 font-weight-bold font-size-21">
                    Jerash
                  </h6>
                  <div class="mb-3 mb-md-5">
                    <p class="mb-0 text-gray-1">Jerash, Jordan</p>
                  </div>
                  <div class="mb-1">
                    <p class="mb-1 text-gray-1">+1 234 5678 901</p>
                    <p class="mb-0 text-gray-1">jerash@example.com</p>
                  </div>
                </div>
              </div>
              <div class="col-md-6 col-lg-3">
                <div class="mb-5 mb-lg-0 text-center text-md-center">
                  <h6 class="text-gray-3 font-weight-bold font-size-21">
                    Ajloun
                  </h6>
                  <div class="mb-3 mb-md-5">
                    <p class="mb-0 text-gray-1">Ajloun, Jordan</p>
                  </div>
                  <div class="mb-0">
                    <p class="mb-1 text-gray-1">+2 345 6789 012</p>
                    <p class="mb-0 text-gray-1">ajloun@example.com</p>
                  </div>
                </div>
              </div>
              <div class="col-md-6 col-lg-3">
                <div class="text-center text-md-center">
                  <h6 class="text-gray-3 font-weight-bold font-size-21">
                    Wadi Rum
                  </h6>
                  <div class="mb-3 mb-md-5">
                    <p class="mb-0 text-gray-1">Wadi Rum, Jordan</p>
                  </div>
                  <div class="mb-0">
                    <p class="mb-1 text-gray-1">+3 456 7890 123</p>
                    <p class="mb-0 text-gray-1">wadirum@example.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="border-bottom border-color-8 pb-6 pb-lg-9 mb-6 mb-lg-8">
          <div class="container mb-10">
            <div class="w-md-80 w-lg-50 text-center mx-md-auto my-3">
              <h2 class="section-title text-black font-size-30 font-weight-bold mb-5 pb-xl-1">
                Sends us a Message
              </h2>
            </div>
            <div class="comment-section max-width-810 mx-auto">
              <form ref={form} onSubmit={sendEmail} style={formStyles}>
                <label style={labelStyles}>Name</label>
                <input
                  type="text"
                  name="user_name"
                  style={inputStyles}
                  value={formData.user_name}
                  onChange={(e) => setFormData({ ...formData, user_name: e.target.value })}
                />
                <label style={labelStyles}>Email</label>
                <input
                  type="email"
                  name="user_email"
                  style={inputStyles}
                  value={formData.user_email}
                  onChange={(e) => setFormData({ ...formData, user_email: e.target.value })}
                />
                <label style={labelStyles}>Message</label>
                <textarea
                  name="message"
                  style={textareaStyles}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
                <input type="submit" value="Send" style={submitStyles} />
              </form>

            </div>
          </div>
          <iframe src={link} style={myStyle2}></iframe>
        </div>
      </main>
      {/* <!-- ========== END MAIN CONTENT ========== --> */}
    </div>
  );
}




