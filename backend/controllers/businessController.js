const Business = require("../models/Business");

exports.addBusiness = async (req, res) => {
  try {
    const business = await Business.create({
    ...req.body,
    isApproved: false
  });
    res.status(201).json(business);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getBusinesses = async (req, res) => {
  const { keyword, city } = req.query;

  let query = { isApproved: true };

  if (keyword) {
    query.$or = [
      { name: { $regex: keyword, $options: "i" } },
      { category: { $regex: keyword, $options: "i" } }
    ];
  }

  if (city) {
    query.city = { $regex: city, $options: "i" };
  }

  const businesses = await Business.find(query).limit(20);
  res.json(businesses);
};



exports.getBusinessById = async (req, res) => {
  try {
    const business = await Business.findById(req.params.id);
    if (!business) {
      return res.status(404).json({ message: "Business not found" });
    }
    res.json(business);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getTrendingBusinesses = async (req, res) => {
  try {
    const businesses = await Business.find({ isApproved: true })
      .sort({ rating: -1 })   // highest rated first
      .limit(9);

    res.json(businesses);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};
