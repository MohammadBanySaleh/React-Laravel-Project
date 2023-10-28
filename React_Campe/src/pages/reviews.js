import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { getAuthor, Rating } from "../helper";
import "./style.css";

function Reviews({ packageId = 1 }) {
  const [showAllComments, setShowAllComments] = useState(false);
  const [Review, setReview] = useState([]);

  // stat get and post data
  useEffect(() => {
    const getReview = async () => {
      await axios
        .get(`http://127.0.0.1:8000/api/reviews/${packageId}`)
        .then((response) => {
          setReview(response.data);
          console.log(response.data);
          console.log('hhhhh');
        })
        .catch((error) => console.error(error));
    };
    getReview();
  }, []);

  const IsLoggedIn = true;
  // const IsLoggedIn = sessionStorage.getItem('IsLoggedIn');

  // start handel add review
  const [reviewText, setReviewText] = useState({
    user_id: 1,
    package_id: 1,
    date: new Date().toISOString().split("T")[0],
    rate: 5,
    comment: " ",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setReviewText({
      ...reviewText,
      [name]: value,
    });
  };

  const submit = async (e) => {
    e.preventDefault();
    // console.log(reviewText);
    await axios
      .post(`http://127.0.0.1:8000/api/reviews`, reviewText)
      .then((response) => {
        // console.log(response);
        if (response.status === 200) {
          const newReview = response.data;
          // Update reviews state with the new review
          setReview([...Review, newReview]);
          setReviewText({ rate: 5, comment: "" });
          console.log("Review added successfully:", newReview);
          BtnClick();
        } else {
          console.error("Failed to add review");
        }
      })
      .catch((error) => {
        console.error("Error adding review:", error);
      });
  };

  const BtnClick = () => {
    Swal.fire({
      icon: "success",
      title: "Your Review Submitted Successfully !",
      showConfirmButton: false,
      timer: 2500,
    });
  };
  // end

  // // start calculating Rating
  // const reviewsFiltered = Review.filter(
  //   (review) => review.doctorid === detailId && review.catid === catId
  // );

  // const totalRating = reviewsFiltered.reduce((sum, review) => {
  //   const rating = parseFloat(review.rating);
  //   return sum + rating;
  // }, 0);

  // const averageRating =
  //   reviewsFiltered.length === 0 ? 0 : totalRating / reviewsFiltered.length;
  // // end

  return (
    <div className="section sigma_post-details">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="sigma_post-details-inner">
              <div className="entry-content">
              {Review.length == 0 && (
                <h2>
                  No Reviews
                </h2>
              )}


                {Review.length > 0 && (
                  <div id="reviews">
                    <h4>Review</h4>

                    {Review.slice(0, showAllComments ? Review.length : 2).map(
                      (review) => (
                        <>
                          <div
                            className="sigma_testimonial style-14"
                            key={review.id}
                          >
                            <div
                              className="sigma_testimonial-thumb"
                              key={review.id}
                            >
                              <img
                                src={
                                  // process.env.PUBLIC_URL +
                                  // `/assets/img/` +
                                  review.user.image
                                }
                                width="70px"
                                alt={review.user.name}
                              />
                            </div>
                            <div
                              className="sigma_testimonial-body"
                              key={review.id}
                            >
                              <div className="d-flex align-items-center justify-content-between">
                                <div className="d-block d-sm-flex align-items-center">
                                  <div className="sigma_author-block">
                                    <h5>{review.user.name}</h5>
                                  </div>
                                  <div className="sigma_rating ml-sm-4 ml-0 mt-2 mt-sm-0">
                                    {Rating(review.rate)}
                                    <span className="ml-3">
                                      ({review.rate}/5)
                                    </span>
                                  </div>
                                </div>
                                <span className="sigma_testimonial-date">
                                  {review.date}
                                </span>
                              </div>
                              <p>"{review.comment}"</p>
                            </div>
                          </div>
                        </>
                      )
                    )}

                    {!showAllComments && (
                      <button
                        type="button"
                        className="sigma_btn"
                        onClick={() => setShowAllComments(true)}
                      >
                        See More
                        <i className="fal fa-arrow-right" />
                      </button>
                    )}

                    {showAllComments && (
                      <button
                        type="button"
                        className="sigma_btn"
                        onClick={() => setShowAllComments(false)}
                      >
                        See less
                        <i className="fal fa-arrow-right" />
                      </button>
                    )}
                  </div>
                )}

                {!IsLoggedIn && (
                  <div>
                    <br></br>
                    <h5>
                      To Add Review Please{" "}
                      <Link to="/authUser">
                        <h5
                          style={{
                            color: "#00acb1",
                            textDecoration: "underline",
                          }}
                        >
                          Login
                        </h5>
                      </Link>
                    </h5>
                  </div>
                )}
                {IsLoggedIn && (
                  <div className="container">
                    <br />
                    <h4>Add a Review</h4>
                    <form onSubmit={(e) => submit(e)}>
                      <div className="form-group">
                        <label>Rating:</label>
                        <select
                          // id="rating"
                          name="rate"
                          value={reviewText.rate}
                          onChange={(e) => handleInputChange(e)}
                        >
                          <option value={1}>1</option>
                          <option value={2}>2</option>
                          <option value={3}>3</option>
                          <option value={4}>4</option>
                          <option value={5}>5</option>
                        </select>
                      </div>
                      <div className="form-group">
                        <label>Review:</label>
                        <textarea
                          rows="4"
                          // id="comment"
                          name="comment"
                          value={reviewText.comment}
                          onChange={(e) => handleInputChange(e)}
                          required
                        ></textarea>
                      </div>
                      <button type="submit">Submit Review</button>
                    </form>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reviews;
