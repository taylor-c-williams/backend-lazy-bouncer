const jwt = require('jsonwebtoken')
module.exports = async (req, res, next) => {

  // TODO: Check req.user to ensure the user's email is 'admin'
  try{
    // const userEmail = req.user.userEmail;
    // const payload = jwt.verify(userEmail, 'admin');
    // req.user = payload;
    // next();

    const userEmail = req.user.userEmail;
    const secret = 'admin';
    if (userEmail === secret){
      next();}

  } catch (error){
    console.error(error);
    error.message = 'You NARY HAVE ACCESS TO VIEW THIS PAGE'; 
    error.status = 403;
    next(error);
  }
};
