const mongoose = require("mongoose");

const quizSchema = new mongoose.Schema(
  {
    lesson: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Lesson",
      required: true,
    },

    question: {
      type: String,
      required: true,
    },

    options: {
      type: [String],
      required: true,
      validate: {
        validator: (arr) => arr.length === 4,
        message: "Exactly 4 options are required.",
      },
    },

    correctAnswer: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Quiz", quizSchema);
