import React, { useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import './Auth.css';
import Logo from '../../img/brand.png';
import { logIn, signUp } from '../../actions/AuthAction';
const Auth = () => {
    const dispatch=useDispatch();
    const loading=useSelector((state)=>state.authReducer.loading)
    const [isSignUp,setIsSignUp]=useState(true);
    console.log(loading);

    const [data,setData]=useState({firstname:"",lastname:"",username:"",password:"",confirmpass:"",});

    const [confirmPass,setConfirmPass]=useState(true)
    const handleChange=(e)=>{
        setData({...data,[e.target.name]: e.target.value});
    };

    const handleSubmit = (e)=>{
        e.preventDefault();

        if(isSignUp){
            data.password===data.confirmpass ? dispatch(signUp (data)) : setConfirmPass(false);
            
        }else{
            dispatch(logIn(data))
        }
    }

    const resetForm=()=>{
        setConfirmPass(true);
        setData({
            firstname:"",lastname:"",username:"",password:"",confirmpass:""
        });
    }
  return (
    <div className='Auth'>
        {/* left side */}
        <div className="a-left">
            
            <div className="Webname">
            <img src={Logo} alt="" />
                <h6>Explore the ideas throughout the world</h6>
            </div>
        </div>
        {/* right side */}
        <div className="a-right">
            <form action="" className='infoForm authForm' onSubmit={handleSubmit}>

                <h3>{isSignUp ? "Sign up":"Log in"}</h3>

                    {isSignUp &&(
                         <div>
                               <input type="text" placeholder='First Name' className='infoInput' name='firstname' onChange={handleChange} value={data.firstname}/>
                               <input type="text" placeholder='Last Name' className='infoInput' name='lastname' onChange={handleChange} value={data.lastname}/>
                         </div>
                    )}
                  
                <div>
                    <input type="text" className="infoInput"placeholder='Username' name='username' onChange={handleChange} value={data.username}/>
                </div>
                <div>
                    <input type="password" className="infoInput" placeholder='Password' name='password' onChange={handleChange} value={data.password}/>
                    {isSignUp &&  <input type="password" className="infoInput" placeholder='Confirm Password' name='confirmpass'  onChange={handleChange} value={data.confirmpass}/>}
                   
                </div>
                <span style={{display:confirmPass? "none": "block", color:'red',fontSize:'12px',alignSelf:"flex-end",marginRight:"5px"}}>
                    * confirm password is not same
                </span>
                <div>
                    <span style={{fontSize:"12px",cursor:"pointer",textDecorationLine: "underline"}} onClick={()=>{setIsSignUp((prev)=>!prev); resetForm()}}>{isSignUp ? "Already have an account. Login!": "Don't have an account? Sign Up"}</span>
                </div>
                <button className='button infoButton' type='submit' disabled={loading}>{ loading? "Loading..":isSignUp ? "Sign Up": "Log In"}</button>
            </form>
        </div>
    </div>

  )
}

export default Auth
