//this is the access point for all things database related!

const db = require("./db");

const User = require("./models/User");
const Clothing = require("./models/Clothing");
const Cart = require("./models/Cart");
const CartItems = require("./models/CartItems");

//associations could go here!

User.hasMany(Cart);
Clothing.belongsToMany(Cart, { through: CartItems });
Cart.belongsToMany(Clothing, { through: CartItems });

module.exports = {
  db,
  models: {
    User,
    Clothing,
    Cart,
    CartItems,
  },
};
