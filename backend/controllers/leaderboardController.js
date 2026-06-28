const Leaderboard = require("../models/Leaderboard");

exports.getLeaderboard = async (req, res) => {
  try {
    const leaderboard = await Leaderboard.find()
      .populate("user", "name")
      .sort({
        points: -1,
      });

    res.json(leaderboard);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};