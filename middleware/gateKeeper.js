const gateKeeper = function(req,res,next){
  const password = req.headers.password;
  if (!password) res.status(401).json({you: 'shall not pass!!!'})
  else {
    password.toLowerCase() === 'mellon' ?
    next()
    :
    res.status(400).json({you: 'cannot pass!!!'})
  }
};

module.exports = gateKeeper;