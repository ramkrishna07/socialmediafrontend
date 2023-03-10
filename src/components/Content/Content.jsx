import React from 'react'
import PostSideHome from '../PostSideHome/PostSideHome';
import ProfileSide from '../profileSide/ProfileSide'
import RightSide from '../RightSide/RightSide'
import './Content.css';


const Content = () => {

  return (
    <div className='Content'>
      <ProfileSide location="homepage"/>
      <PostSideHome/>
      <RightSide/>
    </div>
  )
}

export default Content
