import React from 'react'
import Posts from '../Posts/Posts'
import PostShare from '../PostShare/PostShare'
import './PostSideHome.css';
const PostSideHome = () => {
  return (
    <div className='PostSideHome'>
      <PostShare/>
      <Posts location='homepage'/>
    </div>
  )
}

export default PostSideHome
