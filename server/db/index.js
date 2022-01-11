//this is the access point for all things database related!

const db = require("./db");

const User = require("./models/User");
const Clothing = require("./models/Clothing");

//associations could go here!

Clothing.belongsToMany(User, { through: "Cart" });
User.belongsToMany(Clothing, { through: "Cart" });

module.exports = {
  db,
  models: {
    User,
    Clothing,
  },
};
