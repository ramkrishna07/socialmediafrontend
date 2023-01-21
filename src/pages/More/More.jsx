import React,{useState} from 'react'
import Navbar from '../../components/Navbar/Navbar';
import "./More.css";
import {IoLogOut} from 'react-icons/io5'
import {AiFillPlusCircle,AiFillSetting} from 'react-icons/ai';
import {HiInformationCircle} from 'react-icons/hi';
import { logOut } from '../../actions/AuthAction';
import { useDispatch } from 'react-redux';
import ShareModal from '../../components/ShareModal/ShareModal';

const More = () => {

  // adding logout functionality
  const dispatch=useDispatch();
  const handleLogOut=()=>{
    dispatch(logOut())
}


// adding create post functionality
const [modalOpened,setModalOpened]=useState(false);
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
                <li className='items' onClick={handleLogOut}><IoLogOut/>Log Out</li>
            </ul>
        </div>
    </div>
  )
}

export default More
