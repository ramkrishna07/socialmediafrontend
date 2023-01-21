import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import ProfileSide from '../../components/profileSide/ProfileSide'
import './Friend.css';
const Friend = () => {
  return (
    <div className='Friend'>
      <Navbar/>
      <div className='friends'>
        <ProfileSide/>
      </div>
     
    </div>
  )
}

export default Friend
