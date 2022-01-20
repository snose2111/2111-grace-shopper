const {models: {User}} = require('../db')

const requireToken = async (req, res, next) => {
  try {
    const token = req.headers.authorization;
    console.log("this is my token ", token)
    req.user = await User.findByToken(token);

    console.log("this is my current user ", req.user)
    if(req.user){
      next();
    }
  } catch (err) {
    next(err);
  }
}


const isAdmin = (req, res, next) => {
  if(!req.user.isAdmin) {
    return res.status(403).send("You do not have the necessary permissions to view this page!")
  }
  else {
    next ()
  }
}

module.exports = {
  requireToken,
  isAdmin
}
