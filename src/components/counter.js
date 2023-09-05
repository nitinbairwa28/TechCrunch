


import { useState } from "react";

function Counter(){
    const [count,setCount]= useState(0);
    const [heading,setHeading]=useState("This is my Counter");

function addCount(){
    setCount(count +1);
    if(count>=15){
        setCount(15);
    }
    if(count>=15){
        setHeading("You Crossed Your Limit");
    }
    else{
        setHeading("This is my Counter");
    }
    
}    
function subCount(){
    setCount(count -1);
    if(count<=0){
        setCount(0);
    }
    if(count<=15){
        setHeading("This is my Counter");
    }
}
return(
    <>
    <h1>{heading}:{count} </h1>
    <button onClick={addCount}>+</button>
    <button onClick={subCount}>-</button>
    </>
)
}

export default Counter;
