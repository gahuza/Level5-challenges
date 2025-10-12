
// my hooks

import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Users from './Users'
import Counters from './Counters'
import Store from './UseEffect'
import Context from './Context'
import Ref from './Reff'
import Callback from './Callback'
import Mount from './Mounts'
import DidUpdate from './Didupdate'
import UnMount from './UnMount'
import Memo from './Memo'

function App() {
   const [show, setShow] = useState(true);
  

  return (
    <>
 <div>
  {/* <Callback/> */}
      {/* <Ref/> */}
{/* <Context/> */}
      {/* <Store/> */}
        {/* <Counters/>  */}
{/* <Users/> */}
 {/* <Mount/>  */}
 {/* <DidUpdate/>  */}
 {/* <UnMount/> */}
 <Memo/>

     
 </div>
    
    </>
  )
}

export default App

















// import React, {useState,UseEffect} from 'react'

// function App(){
//   const [products, setProducts] = useState([]);

//  UseEffect(()=>{
// fetch("https://fakestoreapi.com/products").
// then((res)=>res.json())
// .then((data)=>{
//   setdata(data)
// });
//  },[]) 

//   return(

//    <>
//    <div>
   
//     <h2>Teacher E-commerce platform</h2>
//     <div>
//       {products.map((product)=>(
//        <div key={product.id}
//             style={{
//               border: "1px solid #ccc",
//               padding: "10px",
//               borderRadius: "10px",
//               textAlign: "center",
//             }}
//           >
//             <img src={product.image}
//               alt={product.title}
//               style={{ width: "150px", height: "150px", objectFit: "contain" }} />
// {/* > */}
//                   <h3>{product.title}</h3>
//              <p>${product.price}</p>
//            <button style={{ backgroundColor: "orange",
//     color: "white",
//     padding: "10px 20px",
//     border: "none",
//     borderRadius: "8px",}}>ADD TO Cart</button>
//        </div> 
//       )
      
//       )}
//     </div>
  
//    </div>
   
//    </>
//   )
// }










// import React from 'react'
// // import logo1 from '../assets/apademlogo.png'
// // import logo2 from '../assets/uni1.jpg'
// import './Menus.css'
// import {Link} from 'react-router-dom'

// const App = () => {
//   return (
//     <div className='navbar'>
//          {/* <img src={logo1} alt="" className='logo'/> */}
//     <h2>College Mont Sion Apadem/UNILAK</h2>
   
//     <ul>
//        {/* <Link to='/'> <li>Home</li></Link>
//        <Link to='/About'><li>About</li></Link>
//        <Link to='/Contact'><li>Contact us</li></Link>
//        <Link to='/Academic'><li>Academic</li></Link>
//        <Link to='/Stuff'><li>stuff</li></Link>
//        <Link to=''><li>Online Services</li></Link> */}
       
//        <li><a href="#landing-page">Home</a></li>
//         <li><a href="#about-me">About Me</a></li>
//         <li><a href="#skills">Skills</a></li>
//         <li><a href="#contacts">Contact</a></li>
//         <li><a href="#footer">Footer</a></li>
       
//     </ul>
//     <div className='Search-box'>
//         <input type="text" placeholder='search' className='search-box'/>
//     </div>
    
//     {/* <img src={logo2} alt="" className='logo'/> */}
//     </div>
//   )
// }

// export default App
