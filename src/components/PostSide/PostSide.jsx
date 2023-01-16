import React from 'react'
import Posts from '../Posts/Posts';
import PostShare from '../PostShare/PostShare';
import './PostSide.css';
import {useMediaQuery} from "@mui/material";

const PostSide = () => {
  const mobile=useMediaQuery("(max-width:670px)");
  return (
    <div className='PostSide'>
         {mobile?"":(<PostShare/>)}
        <Posts location="profilePage"/>
    </div>
  )
}

export default PostSide
