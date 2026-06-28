const Progress = require("../models/Progress");

exports.getProgress = async (req, res) => {
  try {
    const progress = await Progress.find({
      user: req.user.id,
    }).populate("lesson");

    res.json(progress);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

exports.updateProgress = async (req, res) => {
  try {
    const progress = await Progress.findOneAndUpdate(
      {
        user: req.user.id,
        lesson: req.body.lesson,
      },
      req.body,
      {
        new: true,
        upsert: true,
      }
    );

    res.json(progress);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};