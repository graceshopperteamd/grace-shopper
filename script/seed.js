'use strict'

const db = require('../server/db')
const {User, Product, Order, Relationship} = require('../server/db/models')

const items = [
  {
    productId: 1,
    name: 'Paint & Wine Night',
    description: 'rhhtgti',
    imageUrl:
      'https://images.squarespace-cdn.com/content/57c705d2bebafb286be9d66d/1512414729677-55YXXUB9UGDSPTGFK8JE/paint-night.jpg?content-type=image%2Fjpeg',
    category: 'Arts',
    price: 20,
    amount: 300
  },
  {
    productId: 2,
    name: 'Build a Terranium',
    description: 'akftigt',
    imageUrl:
      'https://www.mudforest.com/wp-content/uploads/2019/04/small-glass-terrarium-4-1.jpeg',
    category: 'Crafts',
    price: 20,
    amount: 300
  },
  {
    productId: 3,
    name: 'Salsa Night!',
    description: 'hfitgitho',
    imageUrl: 'https://media.istockphoto.com/photos/dance-picture-id181083498',
    category: 'Dance',
    price: 20,
    amount: 300
  }
]

const dummyOrders = [
  {
    userId: 1,
    paymentMethod: 'Visa',
    shippingAddress: '123 Seasame St, Brooklyn, NY 12345',
    total: 0
  },
  {
    userId: 2,
    paymentMethod: 'Capital One',
    shippingAddress: '123 Seasame St, Brooklyn, NY 12345',
    total: 0
  },
  {
    userId: 2,
    paymentMethod: 'American Express',
    shippingAddress: '123 Seasame St, Brooklyn, NY 12345',
    total: 0
  }
]

const relationships = [
  {
    orderId: 1,
    productId: 1,
    priceAtPurchase: 234.43
  },
  {
    orderId: 2,
    productId: 3,
    priceAtPurchase: 521.01
  },
  {
    orderId: 1,
    productId: 3,
    priceAtPurchase: 134.07
  }
]

async function seed() {
  await db.sync({force: true})
  console.log('db synced!')

  const users = await Promise.all([
    User.create({
      username: 'Dr. Shawn Murphy',
      email: 'cody@email.com',
      password: '123'
    }),
    User.create({
      username: 'Dr. Neil Melendez',
      email: 'murphy@email.com',
      password: '123'
    })
  ])

  await Promise.all(items.map(item => Product.create(item)))

  await Promise.all(dummyOrders.map(order => Order.create(order)))

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
