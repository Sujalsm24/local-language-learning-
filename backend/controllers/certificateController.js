const Certificate = require("../models/Certificate");

exports.generateCertificate = async (req, res) => {
  try {
    const certificate = new Certificate({
      user: req.user.id,
      certificateId:
        "CERT-" + Date.now(),
    });

    await certificate.save();

    res.status(201).json(certificate);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

exports.getCertificate = async (req, res) => {
  try {
    const certificate =
      await Certificate.findOne({
        user: req.user.id,
      });

    res.json(certificate);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};