const fastify = require('fastify')({ logger: true })

// const fastifyEnv = require('fastify-env')

// const options = {
//   confKey: 'config',
//   schema: {
//     type: 'object',
//     required: ['PORT'],
//     properties: {
//       PORT: {
//         type: 'string',
//         default: 1000
//       }
//     }
//   }
// }

fastify.addHook('onRoute', (routeOptions) => {
  console.log(`Registered route: ${routeOptions.url}`)
})

// fastify.register(fastifyEnv, options)
//   .ready((err) => {
//     if (err) console.error(err)
//     console.log(fastify.config)
//   })

const blogRoutes = require('./routes/blogs')
blogRoutes.forEach((route, index) => {
  fastify.route(route)
})

// fastify.listen(fastify.config.PORT, (err, address) => {
//   if (err) {
//     fastify.log.error(err)
//     process.exit(1)
//   }
//   fastify.log.info(`server listening on ${address}`)
// })
const start = async () => {
  try {
    await fastify.listen(3000)
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start()
