const {route} = require('./users')

const router = require('express').Router()
const {authRole} = require('../authenticate')
module.exports = router

// router.use('/', )
router.use('/users', require('./users'))
router.use('/products', require('./products'))
router.use('/cart', require('./cart'))
router.use('/order', require('./order'))

router.use((req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})
