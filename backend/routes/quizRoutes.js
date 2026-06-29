const express = require("express");
const router = express.Router();

const authMiddleware = require("../middleware/authMiddleware");

const {
  getQuizzes,
  getQuiz,
  createQuiz,
  submitQuiz,
  deleteQuiz,
} = require("../controllers/quizController");

router.get("/", getQuizzes);
router.get("/:id", getQuiz);

router.post("/", authMiddleware, createQuiz);
router.post("/:id/submit", authMiddleware, submitQuiz);
router.delete("/:id", authMiddleware, deleteQuiz);

module.exports = router;