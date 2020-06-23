const router = require('express').Router()
const {Product} = require('../db/models')

router.get('/', async (req, res, next) => {
  try {
    const products = await Product.findAll({
      attributes: ['id', 'name', 'description', 'imageUrl', 'category', 'price']
    })

    res.json(products)
  } catch (err) {
    next(err)
  }
})

router.get('/:id', async (req, res, next) => {
  try {
    console.log(req.body)
    const currProduct = await Product.findByPk(req.params.id)
    res.json(currProduct)
  } catch (err) {
    next(err)
  }
})

router.delete('/:productId', async (req, res) => {
  try {
    const productId = req.params.productId
    if (!productId) {
      throw Error('Something went wrong!')
    }
    await Product.destroy({where: {id: productId}})
    res.end()
  } catch (error) {
    next(error)
  }
})

module.exports = router
