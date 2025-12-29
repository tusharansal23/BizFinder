const express = require("express");
const {
  getPendingBusinesses,
  approveBusiness,
  deleteBusiness
} = require("../controllers/adminController");

const { protect } = require("../middleware/authMiddleware");
const { adminOnly } = require("../middleware/adminMiddleware");

const router = express.Router();

router.get(
  "/pending-businesses",
  protect,
  adminOnly,
  getPendingBusinesses
);

router.put(
  "/approve-business/:id",
  protect,
  adminOnly,
  approveBusiness
);

router.delete("/:id", protect, adminOnly, deleteBusiness);

module.exports = router;
