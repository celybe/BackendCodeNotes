const config = process.env;

import User from "../models/user.js";

export const checkUsernameExist = async (req, res) => {
  try {
    User.findOne({ Username: req.params.username }, (err, user) => {
      if (!user) {
        return res.status(200).json({
          ok: true,
        });
      }

      res.status(200).json({
        ok: false,
      });
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      message: "Error finding Username",
    });
  }
};

export const checkEmailExist = async (req, res) => {
  try {
    User.findOne({ Email: req.params.email }, (err, user) => {
      if (!user) {
        return res.status(200).json({
          ok: true,
        });
      }

      res.status(200).json({
        ok: false,
      });
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      message: "Error finding Email",
    });
  }
};
