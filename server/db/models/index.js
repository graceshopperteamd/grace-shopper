const User = require('./user')
const Cart = require('./cart')
const Order = require('./order')
const Product = require('./product')
const {Sequelize} = require('sequelize')
const db = require('../db')

/**
 * If we had any associations to make, this would be a great place to put them!
 * ex. if we had another model called BlogPost, we might say:
 *
 *    BlogPost.belongsTo(User)
 */

/**
 * We'll export all of our models here, so that any time a module needs a model,
 * we can just require it from 'db/models'
 * for example, we can say: const {User} = require('../db/models')
 * instead of: const User = require('../db/models/user')
 */

User.hasMany(Order)
Order.belongsTo(User)

const Relationship = db.define('OrderProducts', {
  priceAtPurchase: {
    type: Sequelize.DOUBLE(4, 2),
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  itemAmount: {
    type: Sequelize.INTEGER,
    defaultValue: 0
  }
})

const CartRelationship = db.define('CartProducts', {
  itemAmount: {
    type: Sequelize.INTEGER,
    defaultValue: 0
  }
})

Product.belongsToMany(Order, {through: 'OrderProducts'})
Order.belongsToMany(Product, {through: 'OrderProducts'})

Cart.belongsTo(User)
Cart.belongsToMany(Product, {through: 'CartProducts'})
Product.belongsToMany(Cart, {through: 'CartProducts'})

module.exports = {
  User,
  Cart,
  Order,
  Product,
  Relationship,
  CartRelationship
}
