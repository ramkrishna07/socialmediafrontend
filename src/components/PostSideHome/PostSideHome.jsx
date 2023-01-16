import React from 'react'
import Posts from '../Posts/Posts'
import PostShare from '../PostShare/PostShare'
import './PostSideHome.css';
import {useMediaQuery} from "@mui/material";


const PostSideHome = () => {
  const mobile=useMediaQuery("(max-width:670px)");
  return (
    <div className='PostSideHome'>
      {mobile?"":(<PostShare/>)}
      
      <Posts location='homepage'/>
    </div>
  )
}

export default PostSideHome
