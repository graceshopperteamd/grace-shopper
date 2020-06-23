'use strict'

const db = require('../server/db')
const {User, Product, Order, Relationship} = require('../server/db/models')
const faker = require('faker')
// const {use} = require('chai')

const DUMMY_DATA_AMOUNT = 100

const users = []

for (let i = 0; i < DUMMY_DATA_AMOUNT; i++) {
  const username = `${faker.name.firstName()} ${faker.name.lastName()}`
  const email = `${faker.internet.email()}`
  const password = `${faker.lorem.words(3)}`
  const user = {username, email, password}
  users.push(user)
}

const items = []

for (let i = 0; i < DUMMY_DATA_AMOUNT; i++) {
  const productId = i + 1
  const name = faker.commerce.productName()
  const description = 'WOW! So much lorem, so much ipsem!'
  const imageUrl = faker.image.cats()
  const category = faker.commerce.department()
  const price = faker.commerce.price()
  const amount = Math.floor(Math.random() * 10)
  const item = {productId, name, description, imageUrl, category, price, amount}
  items.push(item)
}

const dummyOrders = []

for (let i = 0; i < DUMMY_DATA_AMOUNT; i++) {
  const userId = Math.ceil(Math.random() * DUMMY_DATA_AMOUNT)

  const paymentMethod = faker.lorem.word()
  const shippingAddress = `${faker.address.streetAddress()}, ${faker.address.city()}, ${faker.address.stateAbbr()} ${faker.address.zipCode()}`
  const total = faker.commerce.price()
  const isComplete = false
  const order = {userId, paymentMethod, shippingAddress, total, isComplete}
  dummyOrders.push(order)
}

const relationships = []

for (let i = 0; i < DUMMY_DATA_AMOUNT; i++) {
  const orderId = i + 1
  const productId = i + 1
  const priceAtPurchase = faker.commerce.price()
  const itemAmount = Math.ceil(Math.random() * 10)
  const cart = {orderId, productId, priceAtPurchase, itemAmount}
  relationships.push(cart)
}

async function seed() {
  await db.sync({force: true})
  console.log('db synced!')

  await Promise.all(users.map(user => User.create(user)))

  await Promise.all(items.map(item => Product.create(item)))

  await Promise.all(
    dummyOrders.map(async order => {
      Order.create(order)
    })
  )

  await Promise.all(
    relationships.map(relationship => Relationship.create(relationship))
  )

  console.log(`seeded ${users.length} users`)
  console.log(`seeded successfully`)
}

// We've separated the `seed` function from the `runSeed` function.
// This way we can isolate the error handling and exit trapping.
// The `seed` function is concerned only with modifying the database.
async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

// Execute the `seed` function, IF we ran this module directly (`node seed`).
// `Async` functions always return a promise, so we can use `catch` to handle
// any errors that might occur inside of `seed`.
if (module === require.main) {
  runSeed()
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed
