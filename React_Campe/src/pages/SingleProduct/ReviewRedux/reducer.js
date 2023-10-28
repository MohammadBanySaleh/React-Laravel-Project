// reducers/reviewReducer.js

const initialState = {
  reviews: [],
  error: null,
};

const reviewReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_REVIEWS_SUCCESS":
      return { ...state, reviews: action.payload, error: null };
    case "FETCH_REVIEWS_FAILURE":
      return { ...state, reviews: [], error: action.error };
    case "ADD_REVIEW_SUCCESS":
      return {
        ...state,
        reviews: [...state.reviews, action.payload],
        error: null,
      };
    case "ADD_REVIEW_FAILURE":
      return { ...state, error: action.error };

    case "UPDATE_REVIEW":
      return {
        ...state,
        reviews: state.reviews.map((review) =>
          review.id === action.payload.id ? action.payload : review
        ),
        error: null,
      };

    case "DELETE_REVIEW":
      return {
        ...state,
        reviews: state.reviews.filter((review) => review.id !== action.payload),
        error: null,
      };
    default:
      return state;
  }
};

export default reviewReducer;
