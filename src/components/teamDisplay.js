import React, { useContext } from 'react'
import {CharacterContext} from "./home"
import TeamHero from './teamCard'


export default function TeamDisplay() {

    const {team}=useContext(CharacterContext)

    return (
        <div className="container" >
                <div className="row p-2" style={{gridGap:"10px"}}>
                   
                   {team.map(hero=><TeamHero key={hero.id} herosData={hero}/>)}
                       
                    
                </div>
       </div>
    )
}

                

                
 