const Quiz = require("../models/Quiz");

exports.getQuizByLesson = async (req, res) => {
  try {
    const quiz = await Quiz.find({ lesson: req.params.lessonId });

    res.status(200).json(quiz);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

exports.createQuiz = async (req, res) => {
  try {
    const quiz = new Quiz(req.body);

    await quiz.save();

    res.status(201).json(quiz);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

exports.updateQuiz = async (req, res) => {
  try {
    const quiz = await Quiz.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );

    res.json(quiz);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

exports.deleteQuiz = async (req, res) => {
  try {
    await Quiz.findByIdAndDelete(req.params.id);

    res.json({
      message: "Quiz Deleted Successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};