const router = require('express').Router()
module.exports = router
const {Order, Product, Cart} = require('../db/models')

router.get('/:id', async (req, res, next) => {
  try {
    if (!req.user) {
      res.send("Sorry, you're not authorized to see this")
    } else {
      const orders = await Order.findAll({
        where: {
          userId: req.user.id
        },
        include: Product
      })
      res.json(orders)
    }
  } catch (err) {
    next(err)
  }
})

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
    let cart = await Cart.findOne({
      where: {
        userId: req.user.id
      }
    })
    await cart.destroy()

    res.status(201).json(newOrder)
  } catch (err) {
    next(err)
  }
})
