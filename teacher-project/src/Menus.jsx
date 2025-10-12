import React from 'react'
// import logo1 from '../assets/apademlogo.png'
// import logo2 from '../assets/uni1.jpg'
// import './Menus.css'
import {Link} from 'react-router-dom'

const Menus = () => {
  return (
    <div className='navbar'>
         {/* <img src={logo1} alt="" className='logo'/> */}
    <h2>College Mont Sion Apadem/UNILAK</h2>
   
    <ul>
       {/* <Link to='/'> <li>Home</li></Link>
       <Link to='/About'><li>About</li></Link>
       <Link to='/Contact'><li>Contact us</li></Link>
       <Link to='/Academic'><li>Academic</li></Link>
       <Link to='/Stuff'><li>stuff</li></Link>
       <Link to=''><li>Online Services</li></Link> */}
       
       <li><a href="#landing-page">Home</a></li>
        <li><a href="#about-me">About Me</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#contacts">Contact</a></li>
        <li><a href="#footer">Footer</a></li>
       
    </ul>
    <div className='Search-box'>
        <input type="text" placeholder='search' className='search-box'/>
    </div>
    
    {/* <img src={logo2} alt="" className='logo'/> */}
    </div>
  )
}

export default Menus