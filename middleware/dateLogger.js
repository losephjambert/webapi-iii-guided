const dateLogger = function(req, res, next) {
  console.log(new Date().toISOString());
  next();
}

module.exports = dateLogger