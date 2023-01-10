import React from 'react'
import ProfileLeft from '../../components/ProfileLeft/ProfileLeft';
import './Profile.css';
import ProfileCard from '../../components/ProfileCard/ProfileCard.jsx';
import PostSide from '../../components/PostSide/PostSide.jsx';
import RightSide from '../../components/RightSide/RightSide.jsx';
import Navbar from '../../components/Navbar/Navbar';


const Profile = () => {
  return (
    <div className='Profile'>
      <div>
       <Navbar/>
      </div>
      <div className='Profile-content'>
        <ProfileLeft/>

        <div className="Profile-center">
          <ProfileCard location="profilePage"/>
          <PostSide/>
        </div>
        <RightSide/>
      </div>
      
    </div>
  )
}

export default Profile
