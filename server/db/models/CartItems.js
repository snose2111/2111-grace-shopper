const Sequelize = require("sequelize");
const db = require("../db");

const CartItems = db.define("cart_item", {
  quantity: {
    type: Sequelize.INTEGER,
    validate: {
      min: 1
    }
  },
  price: {
    type: Sequelize.DECIMAL(10, 2),
    defaultValue: 0
  },
});

module.exports = CartItems;
