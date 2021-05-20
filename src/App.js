
import React, { useState } from "react"
import Home from "./home";
import Login from "./login";











function App() {

  

  const [token,setToken]=useState(false)
  
  function handleToken(x){
    setToken(!token)
    
  }
  
  
  return (
    <div style={{width:"100%vw"}} >

      {localStorage.getItem("challengeToken")!==null?<Home handleToken={handleToken}/>:<Login handleToken={handleToken}/>}
      
     
    </div>
  );
}
document.body.style = 'background:#FEDE00';
export default App;
