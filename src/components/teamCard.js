
import React, { useContext } from 'react'
import {CharacterContext} from "./home"

export default function TeamHero({herosData}) {
    
    const cualities=["intelligence", "power","strength","speed", "combat"]
    const apperanceCualities=["weight","height","eye-color","hair-color"]
 

    const {deleteCharacter}=useContext(CharacterContext)

    return (
        <div  id="teamCard" className="col-sm-2"  >
            
            <div className="d-flex">
                <div onClick={()=>deleteCharacter(herosData)} id="characterAdd" className="bg-danger"><span>x</span></div>
                <img style={{height:"160px",width:"150px"}} src={herosData.image.url} alt="no image"></img>
                <div style={{height:"160px",width:"160px",lineHeight:"8px", fontSize:"15px",padding:"5px"}} >
                    <div className="mb-4 "><strong style={{lineHeight:"12px"}}>{herosData.name}</strong></div>
                    {
                        
                        cualities.map(c=><p key={c}>{c}: {herosData.powerstats[c]==="null"?"-":herosData.powerstats[c]}</p>)
                    }
                    
        
                </div>
            </div>
            
           <div className="row p-2" >
            
            <div  className="col-sm-12" id="appearence" style={{wordWrap: "break-word"}}>name: {herosData.biography["full-name"]}</div>

            <div  className="col-sm-12" id="appearence" style={{wordWrap: "break-word"}}>{herosData.work.occupation}</div>

            {apperanceCualities.map(d=><div key={d} className="col-sm-12" id="appearence" style={{wordWrap: "break-word"}}>{typeof herosData.appearance[d]!==typeof []?d+": "+herosData.appearance[d]:d+": "+herosData.appearance[d][1]}</div>)}

                       
           </div>
           
        </div>
    )
    
}
            



    


    