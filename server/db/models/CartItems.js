const Sequelize = require("sequelize");
const db = require("../db");

const CartItems = db.define("cart_item", {
  quantity: {
    type: Sequelize.INTEGER,
  },
  price: {
    type: Sequelize.DECIMAL(10, 2),
  },
});

module.exports = CartItems;
