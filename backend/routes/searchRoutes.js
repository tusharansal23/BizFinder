const express = require("express");
const {
  trackSearch,
  getPopularSearches
} = require("../controllers/searchController");

const router = express.Router();

router.post("/track", trackSearch);
router.get("/popular", getPopularSearches);

module.exports = router;
