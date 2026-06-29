const mongoose = require("mongoose");

const lessonSchema = new mongoose.Schema(
  {
    language: {
      type: String,
      required: true,
      enum: ["Marathi", "Hindi", "English"],
    },

    category: {
      type: String,
      required: true,
      enum: [
        "Vowels",
        "Consonants",
        "Alphabet",
        "Barakhadi",
        "Numbers",
        "Colors",
        "Grammar",
      ],
    },

    title: {
      type: String,
      required: true,
      trim: true,
    },

    content: {
      type: String,
      required: true,
    },

    image: {
      type: String,
      default: "",
    },

    audio: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Lesson", lessonSchema);
