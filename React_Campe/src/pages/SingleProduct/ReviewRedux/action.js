// actions/reviewActions.js
import axios from "axios";

export const fetchReviews = (packageId) => {
    return async (dispatch) => {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/api/reviews/${packageId}`);
        dispatch({ type: 'FETCH_REVIEWS_SUCCESS', payload: response.data });
      } catch (error) {
        dispatch({ type: 'FETCH_REVIEWS_FAILURE', error });
      }
    };
  };
  
  export const addReview = (reviewText) => {
    console.log("add testtttttttttt");
    console.log(reviewText);
    return async (dispatch) => {
      try {
        const response = await axios.post(`http://127.0.0.1:8000/api/reviews`, reviewText);
        // dispatch({ type: 'ADD_REVIEW_SUCCESS', payload: response.data });
        // dispatch(fetchReviews(reviewText.package_id));
      } catch (error) {
        dispatch({ type: 'ADD_REVIEW_FAILURE', error });
      }
    };
  };

export const updateReview = (review) => {
  console.log("Helooooo44444444444444");
  console.log(review);
  return async (dispatch) => {
    try {
      const response = await axios.put(`http://127.0.0.1:8000/api/reviews/${review.id}`, review);
      // dispatch({ type: 'UPDATE_REVIEW', payload: response.data });
      // dispatch(fetchReviews(review.package_id));
      // Handle errors
    }catch (error) {
      // Handle errors
    }
  };
};

export const deleteReview = (reviewId) => {
  return async (dispatch) => {
    try {
      await axios.delete(`http://127.0.0.1:8000/api/reviews/${reviewId}`);
      dispatch({ type: 'DELETE_REVIEW', payload: reviewId });
    } catch (error) {
      // Handle errors
    }
  };
};
