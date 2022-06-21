import User from "../models/user.js";

export const updateById = async (req, res) => {
  try {
    const updatedPreference = await User.findByIdAndUpdate(
      { _id: req.params.id },
      { Document: [req.body] }
    );
    res.status(200).json(User);
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
    res.status(200).json(user.Document);
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      message: "Error getting user",
    });
  }
};
