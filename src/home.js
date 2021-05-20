import React, {createContext, useState} from 'react'
import SearchBox from "./components/searchBox";
import TeamDisplay from "./components/teamDisplay";
import PowerstatsSum from "./components/powerstatsSum";


export const CharacterContext=createContext()

export default function Home({handleToken}) {



   

    const [team,setTeam]=useState([])

  
  
  
  function addCharacter(x){
    
    

    if(team.filter(d=>d.id===x.id).length===1){
      alert("pick another")
      return
    }

    if(x.biography.alignment==="good"){
      if(team.filter(d=>d.biography.alignment==="good").length===3)alert("3 heros already, pick the villans")
      else{
        const newTeam=[...team,x]
        setTeam(newTeam)
      }
    }
    else{
      if(team.filter(d=>d.biography.alignment==="bad").length===3)alert("3 villans already, pick the heros")
      else{
        const newTeam=[...team,x]
        setTeam(newTeam)
      }

    }

    
   
  }

  function deleteCharacter(x){

    const newTeam=team.filter(hero=>hero.id!==x.id)
    setTeam(newTeam)

   }

   const contextObj={
     team,
     addCharacter,
     deleteCharacter
   }

    function logOut(){
        localStorage.clear()
        handleToken()
       
        
    }

    function homeCheckToken(token){
      

      if(token){
        return(
          <div>
            <button className="btn btn-dark mt-2" onClick={logOut}>Log Out</button>
              <CharacterContext.Provider value={contextObj}>
  
          
                  <SearchBox/>
                  <PowerstatsSum/>
                  <TeamDisplay/>
         
  
  
  
              </CharacterContext.Provider>
          </div>
        )
      }

      else{
        <h1>You have to Log in whit the correct email and password</h1>
      }
    }


    return (
        <div className="container">
            
            
          {homeCheckToken(localStorage.getItem("challengeToken"))}
            
        </div>
    )
}
