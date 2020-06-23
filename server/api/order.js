const router = require('express').Router()
module.exports = router
const {Order, Product, Cart} = require('../db/models')

router.post('/', async (req, res, next) => {
  try {
    const orderToBePlaced = {
      total: req.body.shoppingCart[0].totalPrice,
      paymentMethod: req.body.payment,
      shippingAddress: req.body.address,
      userId: req.body.shoppingCart[0].userId
    }
    const newOrder = await Order.create(orderToBePlaced)
    req.body.shoppingCart[0].products.forEach(async prod => {
      const currProduct = await Product.findByPk(prod.id)
      newOrder.addProduct(currProduct.id, {
        through: {
          itemAmount: prod.CartProducts.itemAmount,
          priceAtPurchase: prod.price
        }
      })
      currProduct.decrement('amount', {by: prod.CartProducts.itemAmount})
    })
    let cart = await Cart.findOne()
    await cart.destroy()

    res.status(201).json(newOrder)
  } catch (err) {
    next(err)
  }
})
