const router = require('express').Router()
module.exports = router
const {Cart, Product, CartRelationship} = require('../db/models')

router.get('/', async (req, res, next) => {
  try {
    const cart = await Cart.findAll({
      include: Product
    })
    res.json(cart)
  } catch (err) {
    next(err)
  }
})

router.put('/', async (req, res, next) => {
  try {
    const currProduct = await Product.findByPk(req.body.id)
    if (currProduct.amount < req.body.quantity) {
      res.status(400)
    }

    let currCart = await Cart.findOne()
    if (!currCart) {
      currCart = await Cart.create({
        userId: req.body.userId
      })
    }

    const prodInCart = await CartRelationship.findOne({
      where: {
        productId: req.body.id
      }
    })
    if (!prodInCart) {
      await currCart.addProduct(req.body.id, {
        through: {itemAmount: req.body.quantity}
      })
    } else {
      prodInCart.increment('itemAmount', {by: req.body.quantity})
    }

    await currCart.increment({
      totalAmount: req.body.quantity,
      totalPrice: currProduct.dataValues.price * req.body.quantity
    }) // this is updating totalAmount quantity via info sent from redux as it is the user that updates this data
    // updating totalPrice from db data as it is are controlled internally and migth change on the back-end

    const products = await currCart.getProducts({
      attributes: ['id', 'name', 'description', 'imageUrl', 'category', 'price']
    })

    res.json(products)
  } catch (err) {
    next(err)
  }
})
