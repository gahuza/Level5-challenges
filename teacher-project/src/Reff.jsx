import React, {useRef} from 'react'

const Reff = () => {
    const inputRef = useRef(null);

    const focusInput = () =>{
        inputRef.current.focus();
    };

    return(

        <div>
            <input ref={inputRef} />
            <button onClick={focusInput}> Focus Button </button>
        </div>
    );
}

export default Reff;