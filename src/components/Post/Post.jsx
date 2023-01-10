import React, { useState } from 'react'
import './Post.css';
import { useSelector } from 'react-redux';
import { likePost } from '../../api/PostRequest';
import {SlUserFollow,SlUserFollowing} from 'react-icons/sl';
import {FaRegCommentAlt,FaRegHeart,FaHeart} from 'react-icons/fa';
import {RiShareForwardLine} from 'react-icons/ri';
import { Link } from 'react-router-dom';


const Post = ({data}) => {
  const [isShown, setIsShown] = useState(false);

  const handleClick = event => {
    // 👇️ toggle visibility
    setIsShown(current => !current);
  };

  const serverPublic=process.env.REACT_APP_PUBLIC_FOLDER

  const {user} = useSelector((state)=>state.authReducer.authData)

  const [liked,setLiked]=useState(data.likes.includes(user._id))
  const [likes,setLikes]=useState(data.likes.length)

  const handleLike=()=>{
    setLiked((prev)=>!prev)
    likePost(data._id,user._id)
    liked? setLikes((prev)=>prev-1) : setLikes((prev)=>prev+1)
  }
 
  return (
      <div className='Post'>
         
         <div className='PostCard'>
           <Link to={`/profile/${data.userId}`}>
          <img src={data.profileImage? serverPublic + data.profileImage : serverPublic + "defaultProfile.png"} alt="" />
          </Link>
           <div>
             <span><b>{data.username}</b></span>
             <span>{data.location}</span>
           </div>
          {isShown?(<SlUserFollowing style={{color:"var(--orange)"}} onClick={handleClick}/>):<SlUserFollow onClick={handleClick}/>}
         </div>
         
        <img src={data.image? process.env.REACT_APP_PUBLIC_FOLDER + data.image : ""} alt="" />
        <div className="postReact">
            {liked?<FaHeart style={{color:"var(--orange"}} onClick={handleLike}/>: <FaRegHeart onClick={handleLike}/>}
            <FaRegCommentAlt/>
            <RiShareForwardLine/>
        </div>

        <span style={{color:"var(--gray)", fontSize:'12px'}}>{likes} likes</span>
        <div className="details">
          <span><b>{data.firstname}:</b></span>
          <span> {data.desc}</span>
        </div>
    </div>
    
    
    
  )
}

export default Post
