import User from "../models/user.js";

export const create = async (req, res) => {
  try {
    await User.updateOne(
      { _id: req.params.id },
      { $push: { Spaces: { $each: [req.body] } } }
    );

    res.status(200).json("Space status has been added.");
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      message: "Error adding Space",
    });
  }
};

export const getAll = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.status(200).json(user.Spaces);
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      message: "Error getting all spaces",
    });
  }
};

export const deleteById = async (req, res) => {
  try {
    await User.updateOne(
      { _id: req.params.id },
      { $pull: { Spaces: { _id: req.params.userID } } }
    );

    res.status(200).json("Space has been deleted.");
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      message: "Error deleting space",
    });
  }
};

export const getById = async (req, res) => {
  try {
    const user = await User.findById(
      { _id: req.params.id },
      { Spaces: { _id: req.params.userID } }
    );
    res.status(200).json(user);
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      message: "Error get Space",
    });
  }
};
