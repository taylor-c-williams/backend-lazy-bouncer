const jwt = require('jsonwebtoken');

module.exports = async (req, res, next) => {
  try {
    const cookie = req.cookies[process.env.COOKIE_NAME];
    const payload = jwt.verify(cookie, process.env.JWT_SECRET);
    req.user = payload;
    next();
  } catch (error){
    error.message = 'You Must be Logged in to Continue';
    error.status = 401;
    next(error);
  }
};
