import './App.css';
import { useEffect ,useState} from 'react';
import Home from './pages/home/Home';
import Profile from './pages/Profile/Profile';
import Auth from './pages/Auth/Auth';
import {Routes,Route,Navigate,useLocation} from 'react-router-dom';
import { useSelector } from 'react-redux';
import Friend from './pages/Friend/Friend';
import More from './pages/More/More';
import {MdLightMode,MdDarkMode} from 'react-icons/md';

function App() {
  const user=useSelector((state)=>state.authReducer.authData)

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

  return (
    
    <div className='App'>
      <div className="blur" style={{top:'-18%',right:'0'}}></div>
      <div className='style-switcher' onClick={()=>toggleTheme()}><div>{theme=="light-theme"? (<MdDarkMode/>):(<MdLightMode/>)}</div></div>
      <div className="blur" style={{top:'36%',left:'-8rem'}}></div>
      <Routes>
        <Route path='/' element={user? <Navigate to="home"/>:<Navigate to ='auth'/>}/>
        <Route path='/home' element={user? <Home/>: <Navigate to='../auth'/>}/>
        <Route path='/auth' element={user? <Navigate to='../home'/>:<Auth/>}/>
        <Route path='/profile/:id' element={user? <Profile/> : <Navigate to="../auth"/>}/>
        <Route path='/friends' element={user? <Friend/> : <Navigate to="../auth"/>}/>
        <Route path='/more' element={user? <More/> : <Navigate to="../auth"/>}/>
      </Routes>
   </div>
  );
}

export default App;
