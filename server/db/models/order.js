const Sequelize = require('sequelize')
const db = require('../db')

var Order = db.define('order', {
  paymentMethod: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  shippingAddress: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  total: {
    type: Sequelize.DOUBLE(4, 2),
    allowNull: false,
    validate: {
      notEmpty: true
    },
    defaultValue: 0.0
  }
})

module.exports = Order
