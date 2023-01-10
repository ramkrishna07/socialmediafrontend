import React, { useEffect, useState } from 'react'
import Logo from '../../img/brand.png';
import {UilSearch,UilHome,UilSetting} from '@iconscout/react-unicons';
import { useSelector } from 'react-redux';
import {ImCross} from 'react-icons/im';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';
import{AiFillHome,AiFillSetting,AiFillMessage,AiFillPlusCircle} from 'react-icons/ai';
import {CgProfile} from 'react-icons/cg';
import {MdLightMode,MdDarkMode} from 'react-icons/md';
import {IoIosNotifications} from 'react-icons/io';
import {FaUserFriends} from 'react-icons/fa';
import ShareModal from '../ShareModal/ShareModal';

const Navbar = () => {
  const [theme,setTheme]=useState("light-theme");
    const toggleTheme=()=>{
      theme==="dark-theme" ? setTheme("light-theme") : setTheme("dark-theme");
      localStorage.setItem('Theme',theme);
      
    }
 
  const getTheme=localStorage.getItem('Theme');
  // if(getTheme==="light-theme"){
  //   theme="light-theme";
  // }else{
  //   theme="dark-theme";
  // }
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

  // window.addEventListener("change")

  useEffect(()=>{
    document.body.className=theme;
    // saveTheme(theme);
    
  },[theme]);
  const [modalOpened,setModalOpened]=useState(false);
  
  const [isShown, setIsShown] = useState(false);

  const handleClick = event => {
    // 👇️ toggle visibility
    setIsShown(current => !current);
  };

  const {user}=useSelector((state)=>state.authReducer.authData)
  return (
    <div className='Navbar'>
    <div className='LogoSearch'>
      <img src={Logo} alt="" />
      <div className="Search">
        <input type="text" placeholder='#Explore'/>
        <div className="s-icon">
          <UilSearch/>
        </div>
      </div>
      <div className="Search after">
        <input type="text" placeholder='#Explore' style={{display: isShown ? 'block' : 'none'}}/>
        <div className="s-icon after">
          {isShown?(<ImCross onClick={handleClick}/>):<UilSearch onClick={handleClick}/>}
        </div>
      </div>
      <AiFillPlusCircle className='icons plusIcon' onClick={()=>setModalOpened(true)}/>
      <ShareModal modalOpened={modalOpened}setModalOpened={setModalOpened}/>
    </div>
    <div className="navOptions">
        <div
            className="option"
            style={{ color: "var(--photo)" }}
          ><Link to='../home'>
            <AiFillHome className='icons'/>
            </Link>
          </div>
          <div
            className="option"
            style={{ color: "var(--photo)" }}
          >
            <Link style={{textDecoration:"none", color:"inherit"}} to={`/profile/${user._id}`}>
            <CgProfile className='icons'/>
            </Link>
          </div>
          <div
            className="option"
            style={{ color: "var(--photo)" }}
          >
            <Link to='/friends'>
            <FaUserFriends className='icons'/>
            </Link>
          </div>
          <div
            className="option"
            style={{ color: "var(--photo)" }}
          >
            <Link >
            {theme=="light-theme"? <MdLightMode className='icons' onClick={()=>toggleTheme()}/>:<MdDarkMode className='icons' onClick={()=>toggleTheme()}/>}
           
            </Link>
          </div>
        </div>
    </div>
  )
}

export default Navbar
