import React from 'react'
import Content from '../../components/Content/Content';
import Navbar from '../../components/Navbar/Navbar';
import PostSide from '../../components/PostSide/PostSide';
import ProfileSide from '../../components/profileSide/ProfileSide';
import RightSide from '../../components/RightSide/RightSide';
import './Home.css';
function Home() {
  return (
    <div className='Home'>
      <Navbar/>
      <Content/>
    </div>
  )
}

export default Home
