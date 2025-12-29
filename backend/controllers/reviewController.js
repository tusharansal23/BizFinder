const Review = require("../models/Review");
const Business = require("../models/Business");

exports.addReview = async (req, res) => {
  const { rating, comment } = req.body;
  const businessId = req.params.businessId;

  const alreadyReviewed = await Review.findOne({
    user: req.user._id,
    business: businessId
  });

  if (alreadyReviewed) {
    return res.status(400).json({ message: "Already reviewed" });
  }

  const review = await Review.create({
    user: req.user._id,
    business: businessId,
    rating,
    comment
  });

  const reviews = await Review.find({ business: businessId });
  const avgRating =
    reviews.reduce((acc, r) => acc + r.rating, 0) / reviews.length;

  await Business.findByIdAndUpdate(businessId, {
    rating: avgRating.toFixed(1),
    numReviews: reviews.length
  });

  res.status(201).json(review);
};

exports.getReviews = async (req, res) => {
  const reviews = await Review.find({ business: req.params.businessId })
    .populate("user", "name");
  res.json(reviews);
};
