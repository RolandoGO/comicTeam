import React, { useContext, useEffect, useState } from 'react'
import {CharacterContext} from "../home"


export default function PowerstatsSum() {

    const {team}=useContext(CharacterContext)
    const cualitiesOne=["intelligence", "power","strength","speed", "combat"]
    const cualitiesTwo=["height","weight"]
    const [teamCualitiesSum,setTeamCualities]=useState({})


    useEffect(()=>{ 

        

        handleChangeInCualities(team)
        
    },[team])

    function handleChangeInCualities(x){

        const newCualities={
            intelligence:0,
            power:0,
            strength:0,
            combat:0,
            speed:0,
            height:0,
            weight:0
     
        }
         x.forEach(d=>{
            cualitiesOne.forEach(c=>newCualities[c]=newCualities[c]+ Number(d.powerstats[c]))
            
         })
         x.forEach(d=>{
            cualitiesTwo.forEach(c=>newCualities[c]=newCualities[c] + Number(d.appearance[c][1].split(" ")[0]))
            
         })

        


         setTeamCualities(newCualities)

        
        
    
        
       
         
        

        

    }

   

    return (
        <div className="container" >
            <h2>User Team </h2>
            <strong>Powerstats Sum</strong>
                <div className="row p-2" style={{gridGap:"10px"}}>
                    <div  className="col-sm-2 d-flex" id="cardShadow" style={{lineHeight:"15px"}} >
                        
                        <div>
                        
                        {
                            cualitiesOne.map(d=><ul key={d}>{d}: {teamCualitiesSum[d]}</ul>)
                        }
                        </div>
                        <div>
                        
                        {
                            cualitiesTwo.map(d=><ul key={d}>{d}: {teamCualitiesSum[d]}</ul>)
                        }
                        </div>

                       
                
                    
        
                
                    </div>
                       
                    
                </div>
                

                
        </div>
    )
}
