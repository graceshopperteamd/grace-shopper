const Sequelize = require('sequelize')
const db = require('../db')

const Cart = db.define('cart', {
  totalAmount: {
    type: Sequelize.INTEGER,
    defaultValue: 0
  },
  totalPrice: {
    type: Sequelize.DOUBLE(4, 2),
    allowNull: false,
    validate: {
      notEmpty: true
    },
    defaultValue: 0.0
  }
})

module.exports = Cart
