module.exports = (error, req, res, next) => {
  res
    .status(error.status || 500)
    .send({ code: error.status, msg: error.message });
};
