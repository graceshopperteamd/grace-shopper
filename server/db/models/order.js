const Sequelize = require('sequelize')
const db = require('../db')

var Order = sequelize.define('order', {
  products: {
    type: Sequelize.STRING,
    get: function() {
      return JSON.parse(this.getDataValue('products'))
    },
    set: function(val) {
      return this.setDataValue('products', JSON.stringify(val))
    },
    defualtValue: []
  },
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
  totalCost: {
    type: Sequelize.NUMBER,
    allowNull: false,
    validate: {
      notEmpty: true
    },
    defualtValue: 0.0
  }
})

module.exports = Order
