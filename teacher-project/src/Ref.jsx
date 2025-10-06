import React, { useRef } from "react";

// function Ref() {
//   const inputRef = useRef(null);

//   function handleFocus() {
//     inputRef.current.focus(); // Focus on the input field
//   }

//   return (
//     <div>
//       <input ref={inputRef} placeholder="Click the button to focus me" />
//       <button onClick={handleFocus}>Focus Input</button>
//     </div>
//   );
// }

// export default Ref;


function Ref(){
   const inputRef = useRef(null);

    function handleFocus(){
        // inputRef.current.focus();
        inputRef.current.focus();
    }


    return(
        <div>
            <input ref={inputRef} placeholder="click the button"/>
            <button onClick={handleFocus}>Focus input</button>
        </div>
    )
}

export default Ref;