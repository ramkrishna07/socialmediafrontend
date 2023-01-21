import React, { useEffect, useState } from 'react'
import Logo from '../../img/brand-dark.png';
import Logo_Light from '../../img/brand-light.png';
import {UilSearch} from '@iconscout/react-unicons';
import {useMediaQuery} from "@mui/material";
import { useSelector } from 'react-redux';
import {ImCross} from 'react-icons/im';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import{AiFillHome,AiFillPlusCircle,AiOutlineMenu} from 'react-icons/ai';
import {CgProfile} from 'react-icons/cg';
import {FaUserFriends} from 'react-icons/fa';
import ShareModal from '../ShareModal/ShareModal';

const Navbar = () => {

  const mobile=useMediaQuery("(max-width:555px)");

  const [modalOpened,setModalOpened]=useState(false);
  
  const [isShown, setIsShown] = useState(false);

  const handleClick = event => {
    // 👇️ toggle visibility
    setIsShown(current => !current);
  };

  const getTheme=localStorage.getItem('Theme');
  const {user}=useSelector((state)=>state.authReducer.authData)
  return (
    <div className='Navbar'>
    <div className='LogoSearch'>
      {getTheme=="light-theme"?(<img src={Logo} alt="" />):(<img src={Logo_Light} alt="" />)}
      
      <div className="Search">
        <input type="text" placeholder='#Explore'/>
        <div className="s-icon">
          <UilSearch/>
        </div>
      </div>
      {mobile?<div className="Search after">
        <input type="text" placeholder='#Explore'/>
        <div className="s-icon after">
          <UilSearch />
        </div>
      </div>:<div className="Search after">
        <input type="text" placeholder='#Explore' style={{display: isShown ? 'block' : 'none'}}/>
        <div className="s-icon after">
          {isShown?(<ImCross onClick={handleClick}/>):<UilSearch onClick={handleClick}/>}
        </div>
      </div>}
      
      <AiFillPlusCircle className='icons plusIcon' onClick={()=>setModalOpened(true)}/>
      <ShareModal modalOpened={modalOpened}setModalOpened={setModalOpened}/>
    </div>
    <nav className="navOptions">
    
        <div
            className="option"
            style={{ color: "var(--photo)" }}
          ><NavLink to='../home'>
            <AiFillHome  className='icons'/>
            </NavLink>
          </div>
          <div
            className="option"
            style={{ color: "var(--photo)" }}
          >
            <NavLink style={{textDecoration:"none", color:"inherit"}} to={`/profile/${user._id}`}>
            <CgProfile className='icons'/>
            </NavLink>
          </div>
          <div
            className="option"
            style={{ color: "var(--photo)" }}
          >
            <NavLink to='/friends'>
              
              <FaUserFriends className='icons'/>
            </NavLink>
          </div>
          <div
            className="option"
            style={{ color: "var(--photo)" }}
          >
            <NavLink to='/more'>
              <AiOutlineMenu className='icons'/>
            {/* {mobile1?<AiFillSetting className='icons'/>:theme=="light-theme"? <MdLightMode className='icons' onClick={()=>toggleTheme()}/>:<MdDarkMode className='icons' onClick={()=>toggleTheme()}/>} */}
           
           
            </NavLink>
          </div>
        </nav>
    </div>
  )
}

export default Navbar
