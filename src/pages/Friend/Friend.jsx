import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import ProfileSide from '../../components/profileSide/ProfileSide'
import './Friend.css';
const Friend = () => {
  return (
    <div className='Friend'>
      <Navbar/>
      <ProfileSide/>
    </div>
  )
}

export default Friend
