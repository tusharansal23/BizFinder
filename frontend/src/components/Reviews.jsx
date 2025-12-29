import { useEffect, useState } from "react";
import { fetchAPI } from "../services/api";
import "../styles/reviews.css";

const Reviews = ({ businessId }) => {
  const [reviews, setReviews] = useState([]);
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState("");

  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    fetchAPI(`/reviews/${businessId}`).then(setReviews);
  }, [businessId]);

  const submitReview = async () => {
    try {
      await fetchAPI(`/reviews/${businessId}`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${user.token}`
        },
        body: JSON.stringify({ rating, comment })
      });
      window.location.reload();
    } catch (err) {
      alert(err.message);
    }
  };

  return (
  <div className="reviews-section">
    <h3 className="reviews-title">Customer Reviews</h3>

    <div className="reviews-list">
      {reviews.length > 0 ? (
        reviews.map((r) => (
          <div key={r._id} className="review-card">
            <div className="review-header">
              <strong>{r.user.name}</strong>
              <span className="stars">
                {"★".repeat(r.rating)}
                {"☆".repeat(5 - r.rating)}
              </span>
            </div>
            <p className="review-comment">{r.comment}</p>
          </div>
        ))
      ) : (
        <p className="no-reviews">No reviews yet</p>
      )}
    </div>

    {user && (
  <div className="review-form">
    <h4>Add Your Review</h4>

    {/* Star Rating */}
    <div className="star-rating">
  {[1,2,3,4,5].map((n) => (
    <span
      key={n}
      className={`star ${rating >= n ? "active" : ""}`}
      onMouseEnter={() => setRating(n)}
      onClick={() => setRating(n)}
    >
      ★
    </span>
  ))}
</div>


    <textarea
      placeholder="Share your experience..."
      value={comment}
      onChange={(e) => setComment(e.target.value)}
    />

    <button onClick={submitReview}>Submit Review</button>
  </div>
)}

  </div>
);

};

export default Reviews;
