import React from 'react'
import Post from './post/Post'

import posts from './postsData'

import './post.css'

const Posts = () => {
  return (
    <div>
      {posts.map((post, id) => (
        <Post {...post} key={id} />
      ))}
    </div>
  )
}

export default Posts
