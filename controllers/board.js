import User from "../models/user.js";

export const create = async (req, res) => {
  try {
    await User.updateOne({ _id: req.params.id }, { Board: [req.body] });

    res.status(200).json("Board status has been added.");
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      message: err,
    });
  }
};

export const getAll = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.status(200).json(user.Board);
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      message: "Error getting all boards",
    });
  }
};

export const deleteById = async (req, res) => {
  try {
    await User.updateOne(
      { _id: req.params.id },
      { $pull: { Board: { _id: req.params.userID } } }
    );

    res.status(200).json("Board has been deleted.");
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      message: "Error deleting board",
    });
  }
};

export const getById = async (req, res) => {
  try {
    const user = await User.findById(
      { _id: req.params.id },
      { Board: { _id: req.params.userID } }
    );
    res.status(200).json(user);
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      message: "Error get board",
    });
  }
};
