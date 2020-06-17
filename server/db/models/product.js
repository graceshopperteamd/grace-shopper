const Sequelize = require('sequelize')
const db = require('../db')

var Product = db.define('product', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    },
    defualtValue: ''
  },
  description: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    },
    defualtValue: ''
  },
  imageUrl: {
    type: Sequelize.STRING,
    defualtValue: ''
  },
  category: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    },
    defualtValue: 'General'
  },
  amount: {
    type: Sequelize.INTEGER,
    defualtValue: 0
  },
  price: {
    type: Sequelize.NUMBER,
    allowNull: false,
    validate: {
      notEmpty: true
    },
    defualtValue: 0.0
  }
})

module.exports = Product
