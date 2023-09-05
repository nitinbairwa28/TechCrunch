import "./StyleComp.css"
function StyleComp(){
    const StyleVar = {
        backgroundColor: "blue",
        textAlign :"center",
        
    
    };
    return(
        <>
        <div style={ {
        backgroundColor: "blue",
        textAlign :"center",
        fontFamily:"cursive",
        color:"white",
        
    
    }}>
            <h1>{""}check the div</h1>
            <p className="para">Lorem Test</p>
            </div></>
    );
}
export default StyleComp;