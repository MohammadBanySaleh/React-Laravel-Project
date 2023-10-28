import React, { useState, useEffect, useRef } from "react";

import axios from "axios";
import Swal from "sweetalert2";
import "../profile/profile.css";

export default function Profile() {
  const imageInput = useRef(null);
  // const user_id = sessionStorage.getItem("user_id");
  const id = localStorage.getItem("user_id");
  console.log('ererererererererererer');
  console.log(id);
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    image: "",
    phone: "",
    address: "",
    image: "",
  });

  const [userAvailable, setUserAvailable] = useState(false);
  const [error, setError] = useState([]);

  useEffect(() => {
    if (!id) {
      // User is not available, handle the case as needed (e.g., show a message or redirect)
      setUserAvailable(false);
      return;
    }

    axios({
      method: "get",
      url: `http://127.0.0.1:8000/api/users/${id}`,
      data: userData,
    })
      .then((res) => {
        if (res.data.errors) {
          setError(res.data.errors);
        } else {
          const { name, email, image, phone, address } = res.data[0];
          setUserData({ name, email, image, phone, address });
          setUserAvailable(true);
        }
      })
      .catch((error) => {
        console.log(error.response.data.message);
        setUserAvailable(false);
      });
  }, [id]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setUserData((prev) => ({
          ...prev,
          image: reader.result, // Use the data URL
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  useEffect(() => {
    if (!id) {
      setUserAvailable(false);
      return;
    }

    axios({
      method: "get",
      url: `http://127.0.0.1:8000/api/users/${id}`,
      data: userData,
    })
      .then((res) => {
        if (res.data.errors) {
          setError(res.data.errors);
        } else {
          const { name, email, image, phone, address } = res.data[0];
          setUserData({ name, email, image, phone, address });
          setUserAvailable(true);
        }
      })
      .catch((error) => {
        console.log(error.response.data.message);
        setUserAvailable(false);
      });
  }, [id]);

  const handleProfileUpdate = async () => {
    const formData = new FormData();
    formData.append("name", userData.name);
    formData.append("phone", userData.phone);
    formData.append("email", userData.email);
    formData.append("address", userData.address);

    if (imageInput.current && imageInput.current.files.length > 0) {
      formData.append("image", imageInput.current.files[0]);
    }

    try {
      const response = await axios.post(
        `http://127.0.0.1:8000/api/edit_profile/${id}`,
        formData
      );

      if (response.status === 200) {
        // Assuming your response contains the URL of the updated image
        const imageUrl = response.data.imageUrl;
        setNewImageUrl(imageUrl); // Update the new image URL
        Swal.fire({
          title: "Success",
          text: "Data Updated Successfully",
          icon: "success",
        });
      }
    } catch (error) {
      Swal.fire({
        title: "Error",
        text: "Error updating data",
        icon: "error",
      });
      console.error("Error updating data:", error);
    }
  };
  const [newImageUrl, setNewImageUrl] = useState(null);

  useEffect(() => {
    const profileImage = document.getElementById("profileImage");
    if (profileImage && newImageUrl) {
      profileImage.src = newImageUrl;
    }
  }, [newImageUrl]);

  const [passwordData, setPasswordData] = useState({
    password: "",
    newPassword: "",
  });

  const handlePasswordUpdate = async (e) => {
    e.preventDefault();

    const requestData = {
      current_password: passwordData.currentPassword,
      new_password: passwordData.newPassword,
    };

    try {
      const response = await axios.put(
        `http://127.0.0.1:8000/api/eng/${id}`,
        requestData
      );

      if (response.status === 200) {
        Swal.fire({
          title: "Success",
          text: "Password updated successfully",
          icon: "success",
        });
        setPasswordData({
          currentPassword: "",
          newPassword: "",
        });
      }
    } catch (error) {
      console.error("Error updating password:", error);
      if (error.response.status === 400) {
        Swal.fire({
          title: "Validation Error",
          html: error.response.data.errors.join("<br>"),
          icon: "error",
        });
      } else {
        Swal.fire({
          title: "Error",
          text: "An error occurred while updating the password",
          icon: "error",
        });
      }
    }
  };

  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/api/book/${id}`)
      .then((response) => {
        setBookings(response.data);
        console.log('kkkkkkkkkkkkkkkkkkkkkk');
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [id]);

  return (
    <div>
      <div className="container rounded bg-white  profile mt-17">
        <div className="row">
          <div className="col-md-4 border-right mt-5 ">
            <div className="d-flex flex-column align-items-center text-center p-3 py-5">
              <h1
                className="font-weight-bold  mb-4"
                style={{
                  fontSize: "35px", // Set the desired font size
                  color: "#637E4C", // Set the desired color
                }}
              >
                Welcome {userData.name}
              </h1>
              <img
                src={
                  userData.image
                    ? `http://127.0.0.1:8000/img/${userData.image}`
                    : "https://icones.pro/wp-content/uploads/2022/07/icones-d-administration-vert.png"
                }
                alt="Selected Image"
                width="170"
                height="170"
                className="rounded-circle mt-2"
              />
              {/* http://127.0.0.1:8000/api/bookings */}
              {/* http://127.0.0.1:8000/api/packages */}
              {/* <label
  className="font-weight-bold "
  style={{
    fontSize: '30px', // Set the desired font size
    color: 'green',   // Set the desired color
  }}
>
  {userData.name}
</label> */}

              <label for="Image" className="mt-2">
                Edit your image
              </label>
              <input
                id="Image"
                name="image"
                type="file"
                accept="image/*" // Note the correct 'image' type
                className="form-control-file"
                onChange={handleImageChange}
                autoComplete="image"
                hidden
                ref={imageInput}
              />
            </div>
          </div>
          <div className="col-md-8">
            <div className="p-3 py-5">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <div className="d-flex flex-row align-items-center back">
                  <i className="fa fa-long-arrow-left mr-1 mb-1"></i>
                  <h6>Back to home</h6>
                </div>
                <h6 className="text-right">Edit Profile</h6>
              </div>
              <form onSubmit={handleProfileUpdate}>
                <div className="row mt-2">
                  <div className="col-md-6">
                    <input
                      onChange={(e) =>
                        setUserData((prev) => ({
                          ...prev,
                          name: e.target.value,
                        }))
                      }
                      value={userData.name}
                      name="name"
                      type="text"
                      placeholder="your name"
                      className="form-control"
                    />
                  </div>
                  <div className="col-md-6">
                    <input
                      onChange={(e) =>
                        setUserData((prev) => ({
                          ...prev,
                          phone: e.target.value,
                        }))
                      }
                      value={userData.phone}
                      name="phone"
                      placeholder="your phone"
                      type="text"
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col-md-6">
                    <input
                      onChange={(e) =>
                        setUserData((prev) => ({
                          ...prev,
                          email: e.target.value,
                        }))
                      }
                      value={userData.email}
                      placeholder="Ex:shathaandlama@mail.com"
                      name="email"
                      type="text"
                      className="form-control"
                    />
                  </div>
                  <div className="col-md-6">
                    <input
                      onChange={(e) =>
                        setUserData((prev) => ({
                          ...prev,
                          address: e.target.value,
                        }))
                      }
                      className="form-control"
                      value={userData.address}
                      name="address"
                      type="text"
                      placeholder="Address"
                    />
                  </div>
                </div>

                <div className="mt-5 text-right">
                  <input
                    id="input7Save"
                    type="submit"
                    className="btn btn-primary profile-button"
                    value="Save"
                  />
                </div>
              </form>
              <div className="d-flex flex-row align-items-center back">
                <i className="fa fa-long-arrow-left mr-1 mb-1"></i>
                <h6 className="mr-4">Change Password</h6>
              </div>
              <form onSubmit={handlePasswordUpdate}>
                <div className="row mt-1">
                  <div className="col-md-12">
                    {/* <label htmlFor="currentPassword" style={{ fontSize: 12 }}>Current Password</label> */}
                    <input
                      type="password"
                      id="currentPassword"
                      name="currentPassword" // Should be "currentPassword" to match the state
                      value={passwordData.currentPassword} // Bind it to the state
                      onChange={(e) =>
                        setPasswordData({
                          ...passwordData,
                          currentPassword: e.target.value,
                        })
                      }
                      required
                      className="form-control"
                      placeholder="Current Password"
                    />
                  </div>
                </div>
                <div className="row mt-2">
                  <div className="col-md-12">
                    {/* <label htmlFor="newPassword">New Password</label> */}
                    <input
                      type="password"
                      id="newPassword"
                      name="newPassword"
                      value={passwordData.newPassword}
                      onChange={(e) =>
                        setPasswordData({
                          ...passwordData,
                          newPassword: e.target.value,
                        })
                      }
                      required
                      className="form-control"
                      placeholder="New Password"
                    />
                  </div>
                </div>
                <div className="mt-5 text-right">
                  <input
                    id="input7Save"
                    type="submit"
                    className="btn btn-primary profile-button"
                    value="Update Password"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <hr></hr>
      <h1
        className="font-weight-bold text-center mb-4"
        style={{
          fontSize: "35px", // Set the desired font size
          color: "#637E4C", // Set the desired color
        }}
      >
        Booking table
      </h1>
      <div class="d-flex justify-content-center">
        <table class="table custom-table mx-auto">
          <thead>
            <tr>
              <th scope="col">
                <label class="control control--checkbox">
                  <input type="checkbox" class="js-check-all" />
                  <div class="control__indicator"></div>
                </label>
              </th>

              <th scope="col">Name</th>
              <th scope="col">Name of packages</th>
              <th scope="col">Image</th>
              <th scope="col">Date</th>
              <th scope="col">price</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking) => (
              <tr key={booking.id}>
                <td>
                  <label className="control control--checkbox">
                    <input type="checkbox" />
                    <div className="control__indicator"></div>
                  </label>
                </td>
                <td>{userData.name}</td>
                <td>
                  {booking.package && booking.package.name
                    ? booking.package.name
                    : "N/A"}
                </td>
                <td>
                  {booking.package && booking.package.image ? (
                    <img

                      src={`http://127.0.0.1:8000/photo/${booking.package.image}` }

                      alt={booking.package.name}
                    />
                  ) : (
                    "N/A"
                  )}
                </td>
                <td>{booking.date ? booking.date : "N/A"}</td>
                <td>
                  {booking.package && booking.package.price
                    ? booking.package.price
                    : "N/A"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
