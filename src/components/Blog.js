import React from 'react'

const Blog = ({ blog }) => {

  return (
    <li className='blog'>
      {blog.title} {blog.author} {blog.url}
    </li>
  )
}
export default Blog