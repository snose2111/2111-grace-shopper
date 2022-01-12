//this is the access point for all things database related!

const db = require("./db");

const User = require("./models/User");
const Clothing = require("./models/Clothing");
const Cart = require("./models/Cart");
const Orders = require("./models/Orders");

//associations could go here!

User.hasMany(Cart);
Clothing.belongsToMany(Cart, { through: Orders });
Cart.belongsToMany(Clothing, { through: Orders });

module.exports = {
  db,
  models: {
    User,
    Clothing,
    Cart,
    Orders,
  },
};
