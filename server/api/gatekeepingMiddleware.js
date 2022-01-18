const {models: {User}} = require('../db')

async function requireToken(req, res, next) {
  try {
    const token = req.headers.authorization;
    const user = await User.findByToken(token);
    req.user = user;
    next();
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
