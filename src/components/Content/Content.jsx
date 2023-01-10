import React from 'react'
import PostSide from '../PostSide/PostSide'
import PostSideHome from '../PostSideHome/PostSideHome';
import ProfileSide from '../profileSide/ProfileSide'
import RightSide from '../RightSide/RightSide'
import './Content.css';

const Content = () => {
  return (
    <div className='Content'>
      <ProfileSide/>
      <PostSideHome/>
      <RightSide/>
    </div>
  )
}

export default Content
