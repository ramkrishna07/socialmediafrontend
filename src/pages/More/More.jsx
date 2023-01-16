import React,{useEffect,useState} from 'react'
import Navbar from '../../components/Navbar/Navbar';
import "./More.css";
import { NavLink,Link, useLocation } from 'react-router-dom';
import {IoLogOut} from 'react-icons/io5'
import {MdLightMode,MdDarkMode} from 'react-icons/md';
import {AiFillPlusCircle,AiFillSetting} from 'react-icons/ai';
import {HiInformationCircle} from 'react-icons/hi';
import { logOut } from '../../actions/AuthAction';
import { useDispatch,useSelector } from 'react-redux';
import ShareModal from '../../components/ShareModal/ShareModal';

const More = () => {

  // adding logout functionality
  const dispatch=useDispatch();
  const handleLogOut=()=>{
    dispatch(logOut())
}

// adding light and dark mode functionality
  const [theme,setTheme]=useState("light-theme");
  const toggleTheme=()=>{
    theme==="dark-theme" ? setTheme("light-theme") : setTheme("dark-theme");
    localStorage.setItem('Theme',theme);
    
  }

const getTheme=localStorage.getItem('Theme');
const location = useLocation();
 useEffect(() => {
  if(getTheme==="light-theme"){
    setTheme("dark-theme");
  }else{
    setTheme("light-theme");
  }
}, [location]);
window.addEventListener("load",()=>{
  if(getTheme==="light-theme"){
    setTheme("dark-theme");
  }else{
    setTheme("light-theme");
  }
})


useEffect(()=>{
  document.body.className=theme;
  
},[theme]);

// adding create post functionality
const [modalOpened,setModalOpened]=useState(false);
// const [profilemodalOpened,setProfilemodalOpened]=useState(false);
  return (
    <div className='More'>
        <Navbar/>
        <div className='More-content'>
            <h2>What do you want</h2>
            <ul className='list'>
                
                
                <li className='items' onClick={()=>setModalOpened(true)}><AiFillPlusCircle/>Create Post</li>
                <ShareModal modalOpened={modalOpened}setModalOpened={setModalOpened}/>
                <li className='items'><HiInformationCircle/>About Us</li>
                <li className='items'><AiFillSetting/>Settings</li>
                <li className='items' onClick={()=>toggleTheme()}>{theme=="light-theme"? (<MdDarkMode/>):(<MdLightMode/>)}{theme=="light-theme"? "Dark Mode":"Light Mode"}</li>
                <li className='items' onClick={handleLogOut}><IoLogOut/>Log Out</li>
            </ul>
        </div>
    </div>
  )
}

export default More
