import React, { useState, useEffect } from 'react';

function Mount() {
  const [count, setCount] = useState(0);
//This function runs when the component mounts
  useEffect(() => {
    console.log('Component mounted or updated');
//This function runs when the component unmounts
    return () => {
      console.log('Component unmounted');
    };
  }, [count]); // dependency array

  return(
    <div>
         <button onClick={() => setCount(count + 1)}>Clicked {count} times</button>
   
    </div>
   
  ) ;
}

export default Mount;
