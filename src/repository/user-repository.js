const { User } = require("../models/index");

class UserRepository {
  async createUser(data) {
    try {
      const user = await User.create(data);
      return user;
    } catch (error) {
      console.log("something went wrong on repository layer");
      throw error;
    }
  }

  async destory(userId) {
    try {
      await User.destory({
        where: {
          id: userId,
        },
      });

      return true;
    } catch (error) {
      console.log("something went wrong on repository layer");
      throw error;
    }
  }

  async getById(userId) {
    try {
      const user = await User.findByPk(userId, {
        attributes: ["email", "id"],
      });
      return user;
    } catch (error) {
      console.log("something went wrong on repository layer");
      throw error;
    }
  }
}

module.exports = UserRepository;
