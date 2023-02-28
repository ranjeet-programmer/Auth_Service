const UserService = require("../services/user-service");

const userService = new UserService();

const create = async (req, res) => {
  try {
    const response = await userService.create({
      email: req.body.email,
      password: req.body.password,
    });

    return res.status(201).json({
      data: response,
      err: {},
      success: true,
      message: "successfully created a user ",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      err: error,
      success: false,
      message: "not abled to create a user",
    });
  }
};

module.exports = {
  create,
};
