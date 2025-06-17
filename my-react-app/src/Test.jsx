import { useRef, useState } from "react";

const Test = () => {
 const inputRef = useRef(); // Declare useRef to reference the input element
 const [data, setData] = useState(""); // State to store input value

 const clickHandler = () => {
 setData(inputRef.current.value); // Accessing the input value using ref
 };

 return (
 <div>
 <input type="text" ref={inputRef} /> {/* Associating ref with input */}
 <button onClick={clickHandler}>CLICK ME</button>
 <h1>The submitted value is: {data}</h1>
 </div>
 );
};

export default Test;
