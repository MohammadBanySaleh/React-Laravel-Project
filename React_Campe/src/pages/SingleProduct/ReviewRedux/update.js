import React, { useState } from "react";

function EditReviewModal({ review, onUpdate }) {
  const [editedReview, setEditedReview] = useState({ ...review });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedReview({
      ...editedReview,
      [name]: value,
    });
  };

  const handleUpdate = () => {
    // Call the onUpdate function to update the review
    onUpdate(editedReview);
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Edit Review</h2>
        <label>
          Rating:
          <select
            name="rate"
            value={editedReview.rate}
            onChange={handleInputChange}
          >
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
          </select>
        </label>
        <label>
          Comment:
          <textarea
            name="comment"
            value={editedReview.comment}
            onChange={handleInputChange}
          ></textarea>
        </label>
        <button onClick={handleUpdate}>Save</button>
      </div>
    </div>
  );
}

export default EditReviewModal;
