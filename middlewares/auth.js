const jwt = require("jsonwebtoken");

const config = process.env;

const isAuth = (req, res, next) => {
  let token = req.get("Authorization");
  console.log(token);
  console.log(config.SECRET_KEY);
  jwt.verify(token, config.SECRET_KEY, (err, user) => {
    if (err) {
      return res.status(500).json({
        ok: false,
        msg: "Token is invalid!",
      });
    }

    req.user = user.data;

    next();
  });
};

const token_image = (req, res, next) => {
  let token = req.query.token;

  jwt.verify(token, config.SECRET_KEY, (err, user) => {
    if (err) {
      return res.status(500).json({
        ok: false,
        msg: "Token is invalid!",
      });
    }

    req.user = user.data;

    next();
  });
};

module.exports = {
  isAuth,
  token_image,
};
