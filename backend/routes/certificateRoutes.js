const express = require("express");

const router = express.Router();

const auth = require("../middleware/auth");

const {
  generateCertificate,
  getCertificate,
} = require("../controllers/certificateController");

router.get("/", auth, getCertificate);

router.post("/", auth, generateCertificate);

module.exports = router;