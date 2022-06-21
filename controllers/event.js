import User from "../models/user.js";

export const create = async (req, res) => {
  try {
    await User.updateOne(
      { _id: req.params.id },
      { $push: { Events: { $each: [req.body] } } }
    );

    res.status(200).json("Event status has been added.");
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      message: "Error adding Event",
    });
  }
};

export const getAll = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.status(200).json(user.Events);
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      message: "Error getting all Events",
    });
  }
};

export const deleteById = async (req, res) => {
  try {
    await User.updateOne(
      { _id: req.params.id },
      { $pull: { Events: { _id: req.params.userID } } }
    );

    res.status(200).json("Events has been deleted.");
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      message: "Error deleting event",
    });
  }
};

export const getById = async (req, res) => {
  try {
    const user = await User.findById(
      { _id: req.params.id },
      { Events: { _id: req.params.userID } }
    );
    res.status(200).json(user);
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      message: "Error get Event",
    });
  }
};
