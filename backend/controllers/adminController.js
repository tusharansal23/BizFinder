const Business = require("../models/Business");

exports.getPendingBusinesses = async (req, res) => {
  const businesses = await Business.find({ isApproved: false });
  res.json(businesses);
};

exports.approveBusiness = async (req, res) => {
  const business = await Business.findById(req.params.id);

  if (!business) {
    return res.status(404).json({ message: "Business not found" });
  }

  business.isApproved = true;
  await business.save();

  res.json({ message: "Business approved" });
};


// DELETE BUSINESS
exports.deleteBusiness = async (req, res) => {
  await Business.findByIdAndDelete(req.params.id);
  res.json({ message: "Business removed" });
};
