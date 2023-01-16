import React, { useEffect, useState } from 'react'
import './Posts.css';
import Post from '../Post/Post';
import {useDispatch,useSelector} from 'react-redux'
import { getTimelinePosts } from '../../actions/postAction';
import {useParams} from "react-router-dom";
const Posts = ({location}) => {
  // const [isprofile,setIsprofile]=useState(false);

  const dispatch=useDispatch()
  const {user}=useSelector((state)=>state.authReducer.authData)
  let {posts,loading}=useSelector((state)=>state.postReducer)
  const params=useParams();
  useEffect(()=>{
    dispatch(getTimelinePosts(user._id))
  },[])
  if(!posts) return "no posts";
  if(params.id) posts.filter((post)=>post.userId===params.id)
  return (
    <>
    {location==="profilePage"?(
      <div className="Posts-profile">
         {loading? 
           "Fetching Posts...":
          //  console.log(params.id)
         posts.map((post,id)=>{
            return <Post data={post} id={id}/>
         })
         }
      </div>
    ):<div className="Posts">
        {loading? 
          "Fetching Posts...":
        posts.map((post,id)=>{
        
         return <Post data={post} id={id}/>
    })}
     </div>}</>
    
    
  )
}

export default Posts
