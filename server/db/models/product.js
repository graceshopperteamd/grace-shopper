const Sequelize = require('sequelize')
const db = require('../db')

const Product = db.define('product', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    },
    defaultValue: ''
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
    defaultValue: ''
  },
  category: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    },
    defaultValue: 'General'
  },
  amount: {
    type: Sequelize.INTEGER,
    defaultValue: 0
  },
  price: {
    type: Sequelize.DOUBLE(4, 2),
    allowNull: false,
    validate: {
      notEmpty: true
    },
    defaultValue: 0.0
  }
})

module.exports = Product
