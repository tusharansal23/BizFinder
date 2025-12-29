const Search = require("../models/Search");

exports.trackSearch = async (req, res) => {
  try {
    const { keyword } = req.body;
    if (!keyword) return res.status(400).json({ message: "Keyword missing" });

    const existing = await Search.findOne({ keyword });
    if (existing) {
      existing.count += 1;
      await existing.save();
    } else {
      await Search.create({ keyword });
    }

    res.status(200).json({ message: "Search tracked successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

exports.getPopularSearches = async (req, res) => {
  try {
    const searches = await Search.find().sort({ count: -1 }).limit(10);
    res.status(200).json(searches);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};
