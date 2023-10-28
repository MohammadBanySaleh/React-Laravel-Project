import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { connect } from "react-redux";
import { fetchReviews, addReview, updateReview, deleteReview } from "./action";
import { Rating } from "../../../helper";
import "./style.css";

function Reviews({
  id,
  reviews,
  fetchReviews,
  addReview,
  updateReview,
  deleteReview,
}) {
  const [showAllComments, setShowAllComments] = useState(false);
  const [editingReviewId, setEditingReviewId] = useState(null); // Track the review being edited

  const user_id = localStorage.getItem("user_id");
  console.log('my test 20233333333333');
  console.log(user_id);
  console.log(reviews[0]);

  // let IsLoggedIn = true;
  const [reviewText, setReviewText] = useState({
    user_id: user_id,
    package_id: id,
    date: new Date().toISOString().split("T")[0],
    rate: 5,
    comment: "",
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
    await addReview(reviewText);
    setReviewText({
      user_id: user_id,
      package_id: id,
      date: new Date().toISOString().split("T")[0],
      rate: 5,
      comment: "",
    });
    BtnClick();
    // await fetchReviews(id);
    fetchReviews(id);
  };

  const BtnClick = () => {
    Swal.fire({
      icon: "success",
      title: "Your Review Submitted Successfully!",
      showConfirmButton: false,
      timer: 2500,
    });
  };

  useEffect(() => {
    fetchReviews(id);
  }, [id, fetchReviews]);


  const toggleEditReview = (reviewId, currentComment, rate) => {
    setEditingReviewId(editingReviewId === reviewId ? null : reviewId);
    setReviewText({
      ...reviewText,
      commentupdate: currentComment,
      rateupdate: rate,
    });
  };

  const saveEditedReview = async (reviewId) => {
    const editedReview = {
      ...reviewText,
      id: reviewId,
    };
    await updateReview(editedReview);
    setEditingReviewId(null);
    BtnClick();
    fetchReviews(id);
  };

  const confirmDeleteReview = (reviewId) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this review?"
    );
    if (confirmed) {
      deleteReview(reviewId);
    }
  };

  function calculateAverageRate(reviews) {
    if (reviews.length === 0) {
      return 0;
    }

    const totalRate = reviews.reduce(
      (accumulator, review) => accumulator + review.rate,
      0
    );
    return totalRate / reviews.length;
  }
  const average = calculateAverageRate(reviews);

  return (
    <div className="section sigma_post-details">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="sigma_post-details-inner">
              <div className="entry-content">
                {reviews.length === 0 && <h4>No Reviews</h4>}
                {reviews.length > 0 && (
                  <div id="reviews">
                    <h4>Review</h4>

                    {reviews && reviews.length > 0 ? (
                      reviews
                        .slice(0, showAllComments ? reviews.length : 2)
                        .map((review) => (
                          <div
                            className="sigma_testimonial style-14"
                            key={review.id}
                          >
                            <div
                              className="sigma_testimonial-thumb"
                              key={review.id}
                            ></div>
                            <div
                              className="sigma_testimonial-body"
                              key={review.id}
                            >
                              <div className="d-flex align-items-center justify-content-between">
                                <div className="d-block d-sm-flex align-items-center">
                                  <div className="sigma_author-block">
                                    <div className="sigma_testimonial-thumb">
                                      {review.user && review.user.image ? (
                                        <img
                                          src={
                                            "http://127.0.0.1:8000/photo/" +
                                            review.user.image
                                          }
                                          alt={review.user.name}
                                          style={{
                                            width: "50px",
                                            height: "50px",
                                            borderRadius: "50%",
                                            marginBottom: "0px",
                                          }}
                                        />
                                      ) : (
                                        <img
                                          src={
                                            "http://127.0.0.1:8000/photo/user.png"
                                          }
                                          style={{
                                            width: "50px",
                                            height: "50px",
                                            borderRadius: "50%",
                                            marginBottom: "0px",
                                          }}
                                        />
                                      )}
                                    </div>
                                  </div>

                                  <div className="sigma_testimonial-body">
                                    <div className="d-flex align-items-center justify-content-between">
                                      <div className="d-block d-sm-flex align-items-center">
                                        <div className="sigma_author-block">
                                          <h5>
                                            {review.user && review.user.name}
                                          </h5>
                                        </div>

                                        <div className="sigma_rating ml-sm-4 ml-0 mt-2 mt-sm-0">
                                          {Rating(review.rate)}
                                          <span className="ml-3">
                                            ({review.rate}/5)
                                          </span>
                                        </div>
                                        <div className="sigma_rating ml-sm-4 ml-0 mt-2 mt-sm-0">
                                          <span className="sigma_testimonial-date">
                                            {review.date}
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>

                                {/* start */}
                                {user_id != null && review.user_id === parseInt(user_id) && (
                                  <div style={{ textAlign: "right" }}>
                                    <button
                                      onClick={() =>
                                        confirmDeleteReview(review.id)
                                      }
                                      style={{
                                        background: "none",
                                        padding: "0",
                                        border: "none",
                                      }}
                                    >
                                      <i
                                        className="fas fa-trash-alt"
                                        style={{ color: "#637E4C" }}
                                      ></i>
                                    </button>
                                    <button
                                      onClick={() =>
                                        toggleEditReview(
                                          review.id,
                                          review.comment,
                                          review.rate
                                        )
                                      }
                                      style={{
                                        background: "none",
                                        padding: "0",
                                        border: "none",
                                      }}
                                    >
                                      <i
                                        className="fas fa-edit"
                                        style={{ color: "#637E4C" }}
                                      ></i>
                                    </button>
                                  </div>
                                )}
                                {/* end */}
                              </div>

                              {editingReviewId === review.id ? (
                                <div>
                                  <label>Rating:</label>
                                  <select
                                    name="rateupdate"
                                    value={reviewText.rateupdate}
                                    onChange={(e) =>
                                      handleInputChange(e, "rateupdate")
                                    }
                                  >
                                    <option value={1}>1</option>
                                    <option value={2}>2</option>
                                    <option value={3}>3</option>
                                    <option value={4}>4</option>
                                    <option value={5}>5</option>
                                  </select>
                                  <textarea
                                    rows="4"
                                    name="commentupdate"
                                    value={reviewText.commentupdate}
                                    onChange={(e) =>
                                      handleInputChange(e, "commentupdate")
                                    }
                                    required
                                  ></textarea>
                                  <button
                                    onClick={() => saveEditedReview(review.id)}
                                    style={{
                                      borderRadius: "5px",
                                      padding: "7px",
                                      marginTop: "5px",
                                    }}
                                  >
                                    Save
                                  </button>
                                </div>
                              ) : (
                                <p>"{review.comment}"</p>
                              )}
                            </div>
                          </div>
                        ))
                    ) : (
                      <p>No reviews available</p>
                    )}


                    {!showAllComments && (
                      <div style={{ textAlign: "right" }}>
                        <button
                          type="button"
                          className="sigma_btn"
                          class="btn btn-primary align-items-center font-weight-bold"
                          onClick={() => setShowAllComments(true)}
                          style={{
                            borderRadius: "5px",
                            padding: "7px",
                            marginTop: "5px",
                          }}
                        >
                          See More
                          <i className="fas fa-arrow-right" />
                        </button>
                      </div>
                    )}
                    {showAllComments && (
                      <div style={{ textAlign: "right" }}>
                        <button
                          type="button"
                          className="sigma_btn"
                          class="btn btn-primary align-items-center font-weight-bold"
                          onClick={() => setShowAllComments(false)}
                          style={{
                            borderRadius: "5px",
                            padding: "7px",
                            marginTop: "5px",
                          }}
                        >
                          See less
                          <i className="fas fa-arrow-left" />
                        </button>
                      </div>
                    )}
                  </div>
                )}
                {user_id == null && (
                  <div>
                    <br />
                    <h5>
                      To Add a Review, Please{" "}
                      <Link to="/login">
                        <h5 className="sigma_btn"
                          class="btn btn-primary align-items-center font-weight-bold"
                          style={{
                            borderRadius: "5px",
                            padding: "7px",
                            marginTop: "5px",
                            width: '80px'
                          }}
                        >
                          Login
                        </h5>
                      </Link>
                    </h5>
                  </div>
                )}
                {user_id != null && (
                  <div className="container">
                    <br />
                    <h4>Add a Review</h4>
                    <form onSubmit={(e) => submit(e)}>
                      <div className="form-group">
                        <label>Rating:</label>
                        <select
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
                          name="comment"
                          value={reviewText.comment}
                          onChange={(e) => handleInputChange(e)}
                          required
                        ></textarea>
                      </div>
                      <div style={{ textAlign: "right" }}>
                        <button
                          class="btn btn-primary align-items-center font-weight-bold"
                          type="submit"
                          style={{
                            borderRadius: "5px",
                            padding: "10px",
                            marginTop: "5px",
                          }}
                        >
                          Submit Review
                        </button>
                      </div>
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

// Map Redux state to component props
const mapStateToProps = (state) => {
  return {
    reviews: state.reviews.reviews,
  };
};

 

// Map Redux actions to component props
const mapDispatchToProps = {
  fetchReviews,
  addReview,
  deleteReview,
  updateReview,
};

export default connect(mapStateToProps, mapDispatchToProps)(Reviews);
