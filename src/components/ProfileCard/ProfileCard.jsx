import React,{useState,useEffect} from 'react'
import './ProfileCard.css';
import { useSelector } from 'react-redux';
import {Link} from 'react-router-dom';
import {FaPencilAlt} from 'react-icons/fa';
import {IoBriefcase} from 'react-icons/io5';
import {GiHouse} from 'react-icons/gi';
import {AiFillHeart} from 'react-icons/ai';
import ProfileModal from '../ProfileModal/ProfileModal';
import { getPost } from '../../api/PostRequest';

const ProfileCard = ({location}) => {

    const [modalOpened,setModalOpened]=useState(false);
    const {user}=useSelector((state)=>state.authReducer.authData)
    // const posts=useSelector((state)=>state.postReducer.posts)
    const [posts,setPosts]=useState([]);
    const length=posts.filter((post)=>post.userId===user._id).length;
    console.log(length);
    useEffect(()=>{
    const fetchPosts=async()=>{
      const {data}=await getPost();
      setPosts(data)
    };
    fetchPosts()
  },[]);
    const serverPublic=process.env.REACT_APP_PUBLIC_FOLDER

  return (
    <div className='ProfileCard'>
          {location==="profilePage"?(
               <div className="ProfileImages forprofile">
               <img src={serverPublic + user.coverPicture} alt="" />
               <img src={serverPublic + user.profilePicture} alt="" />
           </div>
          ):
          (
            <div className="ProfileImages">
            <img src={serverPublic + user.coverPicture} alt="" />
            <img src={serverPublic + user.profilePicture} alt="" />
            
         </div>
          )}
       
        {location==="profilePage"?(
            <div className="ProfileName inprofile">
            <span>{user.firstname} {user.lastname}  {location==="profilePage"? <button onClick={()=>setModalOpened(true)} className=''><FaPencilAlt width='2rem' height='1.2rem'/> Edit Profile</button> :""} 
                <ProfileModal modalOpened={modalOpened}setModalOpened={setModalOpened} data={user}/></span>
               
            <span> <IoBriefcase/> Workd at  {user.worksAt? user.worksAt: "Write about yourself"}</span>
            {location==="profilePage"? <span><GiHouse/> Lives in {user.livesin}</span>:""}
            {location==="profilePage"? <span><AiFillHeart/> {user.relationship}</span>:""}
            
        </div>
        ):(
            <div className="ProfileName">
            <span>{user.firstname} {user.lastname}</span>
               
            <span> <IoBriefcase/> Workd at  {user.worksAt? user.worksAt: "Write about yourself"}</span>
            
        </div>
        )
        
        }
        

        <div className="followStatus">
            <hr />
            <div>
                <div className="follow">
                    <span>{user.following.length}</span>
                    <span>Following</span>
                </div>
                <div className="vl"></div>
                <div className="follow">
                    <span>{user.followers.length}</span>
                    <span>Followers</span>
                </div>

                {location==="profilePage" && (
                    <>
                    <div className="vl"></div>
                    <div className="follow">
                        <span>{length}</span>
                        <span>Posts</span>
                    </div>
                    </>
                )}
            </div>
            <hr />
        </div>
        {location==="profilePage"? (
            ""
            ) : (
            <span>
            <Link style={{textDecoration:"none", color:"var(--orange)"}} to={`/profile/${user._id}`}>My Profile</Link>
            </span>
            )}
    </div>
  )
}

export default ProfileCard
