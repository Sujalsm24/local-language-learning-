const express = require("express");

const router = express.Router();

const auth = require("../middleware/auth");

const {
  getProgress,
  updateProgress,
} = require("../controllers/progressController");

router.get("/", auth, getProgress);

router.post("/", auth, updateProgress);

module.exports = router;