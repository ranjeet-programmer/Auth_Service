"use strict";
const { Model } = require("sequelize");

const bcrypt = require("bcrypt");

const { SALT } = require("../config/serverConfig");

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      this.belongsToMany(models.Role, {
        through: "User_Roles",
      });
    }
  }
  User.init(
    {
      email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
        validate: { isEmail: true },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [3, 100],
        },
      },
    },
    {
      sequelize,
      modelName: "User",
    }
  );

  User.beforeCreate((user) => {
    console.log("old password :", user.password);

    const encryptedPassword = bcrypt.hashSync(user.password, SALT);

    user.password = encryptedPassword;

    console.log("new password :", user.password);
  });

  return User;
};
