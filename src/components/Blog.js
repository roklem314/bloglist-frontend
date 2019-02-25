import React from 'react'

const Blog = ({ title, author, url }) => {

  return (
    <li className='blog'>
      {title} {author} {url}
    </li>
  )
}
export default Blog