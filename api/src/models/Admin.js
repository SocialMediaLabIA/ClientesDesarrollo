const { DataTypes } = require("sequelize");
module.exports = (sequelize) => {
  sequelize.define("Admin", {
    name: {
      type: DataTypes.STRING,
    },
  });
};
