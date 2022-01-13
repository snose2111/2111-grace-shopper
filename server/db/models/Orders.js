const Sequelize = require("sequelize");
const db = require("../db");

const Orders = db.define("order", {
  quantity: {
    type: Sequelize.INTEGER,
  },
});

module.exports = Orders;
