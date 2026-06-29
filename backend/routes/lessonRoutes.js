const express = require("express");
const router = express.Router();

const authMiddleware = require("../middleware/authMiddleware");

const {
  getLessons,
  getLesson,
  createLesson,
  updateLesson,
  deleteLesson,
} = require("../controllers/lessonController");

router.get("/", getLessons);
router.get("/:id", getLesson);

router.post("/", authMiddleware, createLesson);
router.put("/:id", authMiddleware, updateLesson);
router.delete("/:id", authMiddleware, deleteLesson);

module.exports = router;