import React from 'react'
import './RightSide.css';
import TrendCard from '../TrendCard/TrendCard';
import { useState } from 'react';
import ShareModal from '../ShareModal/ShareModal';

const RightSide = () => {
  const [modalOpened,setModalOpened]=useState(false);

  return (
    <div className='RightSide'>

        <TrendCard/>

        <button className='button r-button' onClick={()=>setModalOpened(true)}>
           share
        </button>
          <ShareModal modalOpened={modalOpened}setModalOpened={setModalOpened}/>
    </div>
  )
}

export default RightSide
