let blogs = [
  {
    id: 1,
    title: 'this is an experiment'
  },
  {
    id: 2,
    title: 'fastify is pretty cool'
  },
  {
    id: 3,
    title: 'just another blog,yea!'
  }
]

// get all the object in the array
const getAllBlogs = async (req, reply) => {
  return blogs
}

// get a specific id in the array
const getBlog = async (req, reply) => {
  const id = Number(req.params.id)
  const blog = blogs.find((blog) => blog.id === id)
  return blog
}

const addBlog = async (req, reply) => {
  const id = blogs.length + 1 // generate new ID
  const newBlog = {
    id,
    title: req.body.title
  }
  blogs.push(newBlog)
  return newBlog
}

const updateBlog = async (req, reply) => {
  const id = Number(req.params.id)
  blogs = blogs.map((blog) => {
    if (blog.id === id) {
      return {
        id,
        title: req.body.title
      }
    }

    return blogs
  })

  return { id, title: req.body.title }
}

const deleteBlog = async (req, reply) => {
  const id = Number(req.params.id)
  blogs = blogs.filter((blog) => blog.id !== id)
  return { msg: `Blog with ID ${id} is deleted` }
}

module.exports = {
  getAllBlogs,
  getBlog,
  addBlog,
  updateBlog,
  deleteBlog
}
