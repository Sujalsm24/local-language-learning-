const express = require("express");

const router = express.Router();

const auth = require("../middleware/auth");

const {
  getQuizByLesson,
  createQuiz,
  updateQuiz,
  deleteQuiz,
} = require("../controllers/quizController");

router.get("/:lessonId", getQuizByLesson);

router.post("/", auth, createQuiz);

router.put("/:id", auth, updateQuiz);

router.delete("/:id", auth, deleteQuiz);

module.exports = router;