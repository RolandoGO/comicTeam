
import React, { useState } from "react"
import Home from "./components/home";
import Login from "./components/login";











function App() {

  

  const [token,setToken]=useState(false)
  
  function handleToken(x){
    setToken(!token)
    
  }
  
  
  return (
    <div style={{width:"100vw"}} >

      {localStorage.getItem("challengeToken")!==null?<Home handleToken={handleToken}/>:<Login handleToken={handleToken}/>}
      
     
    </div>
  );
}
document.body.style = 'background:#FEDE00';
export default App;
