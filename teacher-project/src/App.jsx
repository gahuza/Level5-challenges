
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Users from './Users'
import Counters from './Counters'
import Store from './UseEffect'
import Context from './Context'
import Ref from './Ref'
import Callback from './Callback'

function App() {
  

  return (
    <>
 <div>
  {/* <Callback/> */}
      {/* <Ref/> */}
<Context/>
      {/* <Store/> */}
        {/* <Counters/>  */}
{/* <Users/> */}
     
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

