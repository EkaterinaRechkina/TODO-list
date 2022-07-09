const sessionLogger = (req, res, next) => {
  console.log("ЛОГГЕР СЕССИЙ", req.session);
  next();
};

module.exports = sessionLogger;
