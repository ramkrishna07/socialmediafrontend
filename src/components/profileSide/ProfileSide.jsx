import React from 'react'
import './ProfileSide.css';
import ProfileCard from '../ProfileCard/ProfileCard';
import FollowersCard from '../FollowersCard/FollowersCard';
function ProfileSide({location}) {
  return (
    <>
    {location==="homepage"?(
      <div className='ProfileSide'>
      <ProfileCard location="homepage"/>
      <FollowersCard/>
  </div>
    ):(<div className='ProfileSide frnd'>
    <ProfileCard location="homepage"/>
    <FollowersCard/>
</div>)}
    
    </>
  )
}

export default ProfileSide
