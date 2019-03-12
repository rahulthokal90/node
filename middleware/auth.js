// const jwt = require("jsonwebtoken");
const config = require("config");

module.exports = function(req, res, next) {
  if (!config.get("requiresAuth")) return next();

  const privateKey = req.header("x-auth-token");
  if (!privateKey) return res.status(401).send("Access denied. No token provided.");

  try {
    // const decoded = jwt.verify(token, config.get("jwtPrivateKey"));
    // req.user = decoded;
    if(privateKey === config.get("privateKey")){
      next();
    }
  } catch (ex) {
    res.status(400).send("Invalid token.");
  }
};
