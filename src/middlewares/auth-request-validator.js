const validateUserAuth = (req, res, next) => {
  if (!req.body.email || !req.body.password) {
    return res.status(400).json({
      success: false,
      data: {},
      message: "something went wrong",
      err: "Email or password missing",
    });
  }

  next();
};
const validateIsAdminRequest = (req, res, next) => {
  if (!req.body.id) {
    return res.status(400).json({
      success: false,
      data: {},
      err: "User Id is not given",
      message: "something went wrong",
    });
  }

  next();
};

module.exports = {
  validateUserAuth,
  validateIsAdminRequest,
};
