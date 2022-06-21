import Preference from "../models/preference.js";
import User from "../models/user.js";

export const updateById = async (req, res) => {
  try {
    const updatedPreference = await User.findByIdAndUpdate(
      { _id: req.params.id },
      { Preferences: req.body }
    );
    res.status(200).json(updatedPreference);
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      message: "Error updating user",
    });
  }
};

export const getById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.status(200).json(user.Preferences);
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      message: "Error getting user",
    });
  }
};
