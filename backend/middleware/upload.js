const multer = require("multer");
const path = require("path");

// Store uploaded audio files
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/audio");
  },

  filename: (req, file, cb) => {
    const uniqueName =
      Date.now() + path.extname(file.originalname);

    cb(null, uniqueName);
  },
});

// Allow only audio files
const fileFilter = (req, file, cb) => {
  const allowedTypes = [
    "audio/mpeg",
    "audio/mp3",
    "audio/wav",
    "audio/ogg",
  ];

  if (allowedTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error("Only MP3, WAV, and OGG audio files are allowed."));
  }
};

const upload = multer({
  storage,
  fileFilter,
});

module.exports = upload;
