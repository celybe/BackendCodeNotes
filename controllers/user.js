import User from "../models/user.js";
import Preference from "../models/preference.js";

export const create = async (req, res) => {
  try {
    const {
      Username,
      Email,
      First_Name,
      Last_Name,
      Password,
      Preferences,
      Board,
      Document,
    } = req.body;

    // Creating a new User
    const user = new User({
      User_Type: "USER",
      Username,
      Email,
      First_Name,
      Last_Name,
      Password,
      Created_At: new Date(),
      Updated_At: new Date(),
      Board,
      Document,
      Preferences: {
        Created_At: new Date(),
        Updated_At: new Date(),
        Theme: Preferences.Theme,
        Newsletter: Preferences.Newsletter,
        Static_Sidebar: false,
        Notifications: false,
      },
    });

    const check_username = await User.findOne({
      Username: user.Username,
    }).exec();
    console.log(check_username);
    const check_email = await User.findOne({ Email: user.Email }).exec();
    // Check username
    if (check_username) {
      console.log("Username already exists");
    }

    // Check email
    if (check_email) {
      console.log("Email already exists");
    }

    // Encrypting password
    user.Password = await User.encryptPassword(user.Password);

    // Save User
    const savedUser = await user.save();

    return res.status(200).json({
      //_id: savedUser._id,
      Username: savedUser.Username,
      Email: savedUser.Email,
      First_Name: savedUser.First_Name,
      Last_Name: savedUser.Last_Name,
      Password: savedUser.Password,
      Created_At: savedUser.Created_At,
      Updated_At: savedUser.Updated_At,
      Preferences: savedUser.Preferences,
      Board: savedUser.Board,
      Document: savedUser.Document,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      message: "Error saving user",
    });
  }
};

export const updateById = async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(
      { _id: req.params.id },
      { $set: req.body }
    );
    res.status(200).json(updatedUser);
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
    res.status(200).json(user);
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      message: "Error getting user",
    });
  }
};

export const getAll = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      message: "Error getting users",
    });
  }
};

//
export const deleteById = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(200).json("User has been deleted.");
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      message: "Error deleting user",
    });
  }
};
