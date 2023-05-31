import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Axios from 'axios'

export default function Login() {
    //const [id,setId]=useState('')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    let navigate=useNavigate()
    const Submit=(e)=>{
        e.preventDefault()
        console.log(email,password)
        Axios.post('http://localhost:9000/api/admin/login',{email,password})
        .then((res)=>{
            console.log(res)
            if(res.data.success){
                alert('Login Succussfull')
                navigate('/')
            }
        })
        .catch((err)=>{
            console.log(err,3333)
        })
    
    }
   // console.log(name)
    return (

        <div className='Insert-Container text-center'>
            <form onSubmit={Submit}>
                {/* <div className="id">
                    <p>Person_id</p>
                    <input onChange={(e)=>setId(e.target.value)} type="text" />
                </div> */}
                <h2>Login</h2>
                
                <div className="Email">
                    <p>Email</p>
                    <input onChange={(e)=>setEmail(e.target.value)} type="text" />
                </div>
                <div className="Password">
                    <p>Password</p>
                    <input onChange={(e)=>setPassword(e.target.value)} type="password" />
                </div>
                <button className='btn btn-primary mt-3'>Register</button>
            </form>
        </div>
    )
}
