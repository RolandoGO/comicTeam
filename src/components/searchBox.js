import React,{ useState } from 'react'
import HeroCard from './heroCrad';
import axios from "axios"
import {useFormik} from "formik"
import * as Yup from "yup"



export default function SearchBox() {

    
    const [hero, setHero]=useState(null)
    const [progres, setProgres]=useState(false)
    const [error,setError]=useState(null)



    const validationSchema=Yup.object({
        name:Yup.string().required("required!!"),
        
    })
    const formik = useFormik({
        initialValues:{
            name:""

        },
        onSubmit: (values)=>{

            
            searchCharacter(values)
        },

        validationSchema

        
    })
    
    
    
    
    async function searchCharacter({name}){

        setHero(null)
        setProgres(true)
        setError(null)

        axios.get(`https://www.superheroapi.com/api.php/10158473030413985/search/${name}`)
        .then(d=>{

            if(d.data.error){
                setError(d.data.error)
                setProgres(false)
            }
            else{
                setHero(d.data.results)
                setProgres(false)
                
            }

        })
        .catch(err=>{
            
            setError("error de conexion o no se encontro el recurso")
            
        })
    }

    return (
            
            <div className="container" >
                

                <div className="row  p-2">
                    <div className="col d-flex justify-content-center">
                    <form onSubmit={formik.handleSubmit}>
                        <div className="form-group">
                            <input type="text" onBlur={formik.handleBlur} onChange={formik.handleChange} name="name" value={formik.values.name} className="form-control" id="character" placeholder="Character Name"/>
                        </div>
                        
                        
                        {error&&<strong className="text-danger">{error}</strong>}
                        {formik.errors.name && formik.touched.name?<div className="text-danger text-uppercase" style={{fontWeight:"bold"}}>{formik.errors.name}</div>:null}
                       
                        <div className="d-flex justify-content-around">
                            <button type="submit" className="btn btn-light mt-2">Search</button>
                            {progres&&<div className="spinner-border text-success mt-3" role="status"></div>}
                        </div>
                    </form>
                    </div>
                </div>

               
                
                
                <div className="row p-2" style={{gridGap:"10px"}}>
                {hero&&hero.map(h=><HeroCard herosData={h} key={h.id}/>)}
                </div>
               
            </div>
    )
}


                
                
                        

           
            



        

   