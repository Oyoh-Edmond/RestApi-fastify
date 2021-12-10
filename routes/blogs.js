//  let route = (function (fastify, options, done) {
//   fastify.get('/', (request, reply) => {
//     return { hello: 'world' }
//   })
//   done()
// })()

// module.exports = route

const blogController = require('../controller/blogs')

const getBlogValidation = {
  params: {
    id: { type: 'number' }
  },
  response: {
    200: {
      type: 'object',
      properties: {
        id: { type: 'number' },
        title: { type: 'string' }
      }
    }
  }
}

const addBlogValidation = {
  body: {
    type: 'object',
    required: ['title'],
    properties: {
      title: { type: 'string' }
    }
  },
  response: {
    200: {
      type: 'object',
      properties: {
        id: { type: 'number' },
        title: { type: 'string' }
      }
    }
  }
}

const pathway = [
  {
    method: 'GET',
    url: '/blogs',
    handler: blogController.getAllBlogs
  },
  {
    method: 'GET',
    url: '/blogs/:id',
    schema: getBlogValidation,
    handler: blogController.getBlog
  },
  {
    method: 'POST',
    url: '/blogs',
    schema: addBlogValidation,
    handler: blogController.addBlog
  },
  {
    method: 'PUT',
    url: '/blogs/:id',
    handler: blogController.updateBlog
  },
  {
    method: 'DELETE',
    url: '/blogs/:id',
    handler: blogController.deleteBlog
  }
]

module.exports = pathway
