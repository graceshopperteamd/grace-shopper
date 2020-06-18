const Sequelize = require('sequelize')
const db = require('../db')

var Order = db.define('order', {
  items: {
    type: Sequelize.STRING,
    get: function() {
      return JSON.parse(this.getDataValue('items'))
    },
    set: function(val) {
      return this.setDataValue('items', JSON.stringify(val))
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
  total: {
    type: Sequelize.DOUBLE(4, 2),
    allowNull: false,
    validate: {
      notEmpty: true
    },
    defualtValue: 0.0
  }
})

module.exports = Order
