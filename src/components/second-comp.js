import FirstComp from "./first-comp";
import { useState } from "react";

function SecondComp(){
    const[name,setName]= useState("shaktiman");

    function changeHeroFun(){
        setName("spiderman");
    }
    return (
        <>
        <h1>This is my second component</h1>
        My hero is {name}
        <br></br>
        <button onClick={changeHeroFun}>Change Hero</button>
        </>
    );
}

export default SecondComp;