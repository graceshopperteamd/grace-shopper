const router = require('express').Router()
module.exports = router
const {Cart, Product, CartRelationship} = require('../db/models')

router.get('/', async (req, res, next) => {
  try {
    if (!req.user) {
      return
    } else {
      const cart = await Cart.findAll({
        where: {
          userId: req.user.id
        },
        include: Product
      })
      res.json(cart)
    }
  } catch (err) {
    next(err)
  }
})

router.put('/', async (req, res, next) => {
  try {
    if (!req.user.id) {
      return
    } else {
      const currProduct = await Product.findByPk(req.body.id)

      let currCart = await Cart.findOrCreate({
        where: {
          userId: req.user.id
        }
      })
      const cart = currCart[0]

      const prodInCart = await CartRelationship.findOne({
        where: {
          productId: req.body.id,
          cartId: cart.id
        }
      })
      if (!prodInCart) {
        await cart.addProduct(req.body.id, {
          through: {itemAmount: req.body.quantity}
        })
      } else {
        prodInCart.increment('itemAmount', {by: req.body.quantity})
      }

      await cart.increment({
        totalAmount: req.body.quantity,
        totalPrice: currProduct.dataValues.price * req.body.quantity
      })

      const products = await cart.getProducts({
        attributes: [
          'id',
          'name',
          'description',
          'imageUrl',
          'category',
          'price'
        ]
      })

      res.json(products)
    }
  } catch (err) {
    next(err)
  }
})

router.delete('/', async (req, res, next) => {
  try {
    let deleted = await CartRelationship.destroy({
      where: {
        productId: req.body.id,
        userId: req.body.userId
      }
    })
    if (deleted) res.status(200).send(deleted)
  } catch (error) {
    next(error)
  }
})
