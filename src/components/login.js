import React from 'react'
import {useFormik} from "formik"
import * as Yup from "yup"
import axios from "axios"


export default function Login({handleToken}) {
    
    const validationSchema=Yup.object({
        email:Yup.string().email("put a valid email").required("required!!"),
        password:Yup.string().min(5).max(15).required("required!!")
    })
    
    const formik=useFormik({

        initialValues:{
            email:"",
            password:""
        },
        onSubmit:function (values){
    
            const tokenUrl="http://challenge-react.alkemy.org/"
            axios.post(tokenUrl,{
                email:values.email,
                password:values.password
            }).then(response=>{
                localStorage.setItem("challengeToken", response.data.token)
                handleToken()
            })
            
        },
        
        validationSchema
    })

    return (
        <div className="container">
            <h2>Login to create your team</h2>
            
            <form onSubmit={formik.handleSubmit}>
            <div className="form-group w-75">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input value={formik.values.email} name="email" onChange={formik.handleChange} onBlur={formik.handleBlur} type="email" className="form-control" id="exampleInputEmail1" placeholder="Enter email"/>
                {formik.errors.email && formik.touched.email?<div className="text-danger text-uppercase" style={{fontWeight:"bold"}}>{formik.errors.email}</div>:null}
            </div>
            <div className="form-group w-50">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input value={formik.values.password} name="password" onChange={formik.handleChange} onBlur={formik.handleBlur} type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
                {formik.errors.password && formik.touched.password?<div className="text-danger text-uppercase" style={{fontWeight:"bold"}}>{formik.errors.password}</div>:null}
            </div>
            
            <button type="submit" className="btn btn-warning mt-2">Login</button>
            
        </form>
        
        </div>
    )
}






    


    