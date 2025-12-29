const express = require("express");
const {
  addBusiness,
  getBusinesses,
  getBusinessById,
  getTrendingBusinesses
} = require("../controllers/businessController");

const router = express.Router();

router.post("/add", addBusiness);
router.get("/", getBusinesses);
router.get("/trending", getTrendingBusinesses);

router.get("/:id", getBusinessById);

module.exports = router;
