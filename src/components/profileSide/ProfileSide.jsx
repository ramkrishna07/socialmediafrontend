import React from 'react'
import './ProfileSide.css';
import ProfileCard from '../ProfileCard/ProfileCard';
import FollowersCard from '../FollowersCard/FollowersCard';
function ProfileSide() {
  return (
    <div className='ProfileSide'>
        <ProfileCard location="homepage"/>
        <FollowersCard/>
    </div>
  )
}

export default ProfileSide
