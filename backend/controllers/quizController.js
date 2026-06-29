const Quiz = require("../models/Quiz");

// Get Quiz by Lesson
exports.getQuizByLesson = async (req, res) => {
  try {
    const quizzes = await Quiz.find({
      lesson: req.params.lessonId,
    });

    res.status(200).json({
      success: true,
      count: quizzes.length,
      quizzes,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Create Quiz (Admin)
exports.createQuiz = async (req, res) => {
  try {
    const quiz = await Quiz.create(req.body);

    res.status(201).json({
      success: true,
      message: "Quiz created successfully",
      quiz,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Update Quiz (Admin)
exports.updateQuiz = async (req, res) => {
  try {
    const quiz = await Quiz.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!quiz) {
      return res.status(404).json({
        success: false,
        message: "Quiz not found",
      });
    }

    res.json({
      success: true,
      message: "Quiz updated successfully",
      quiz,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Delete Quiz (Admin)
exports.deleteQuiz = async (req, res) => {
  try {
    const quiz = await Quiz.findByIdAndDelete(req.params.id);

    if (!quiz) {
      return res.status(404).json({
        success: false,
        message: "Quiz not found",
      });
    }

    res.json({
      success: true,
      message: "Quiz deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Submit Quiz
exports.submitQuiz = async (req, res) => {
  try {
    const { answers } = req.body;

    const quizzes = await Quiz.find({
      lesson: req.params.lessonId,
    });

    let score = 0;

    quizzes.forEach((quiz) => {
      if (answers[quiz._id] === quiz.correctAnswer) {
        score++;
      }
    });

    res.json({
      success: true,
      totalQuestions: quizzes.length,
      score,
      percentage:
        quizzes.length > 0
          ? Math.round((score / quizzes.length) * 100)
          : 0,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
