import React, { useState, useCallback } from "react";

// function Callback() {
//   const [count, setCount] = useState(0);

//   const increment = useCallback(() => {
//     setCount(prev => prev + 1);
//   }, []);

//   return (
//     <div>
//       <h2>Count: {count}</h2>
//       <ChildButton onClick={increment} />
//     </div>
//   );
// }

// const ChildButton = React.memo(({ onClick }) => {
//   console.log("Child rendered!");
//   return <button onClick={onClick}>Increment</button>;
// });

// export default Callback;


function Callback(){
    const [count, setCount] = useState(0);


    const increment = useCallback(()=>{
        setCount(prev => prev + 1);
    },[])

    return(
        <div>
            <h2>counting up: {count}</h2>
           
            <ChildButton onClick={increment}/>
        </div>
    );
}

const ChildButton = React.memo(({onClick})=>{
    console.log("rendered well");
   return <button onClick={onClick}>Increment</button>
})

export default Callback;