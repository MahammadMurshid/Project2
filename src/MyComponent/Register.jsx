import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Axios from 'axios'
export default function Register() {
    //const [id,setId]=useState('')
    const nav=useNavigate()
    const [name,setName]=useState('')
    const [phone,setPhone]=useState('')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    let navigate=useNavigate()
    const Submit=(e)=>{
        e.preventDefault()
        console.log(name,phone,email,password)
        if(!name||!phone||!email||!password){
            alert('One of them Cannot Empty!!!')
        }
        Axios.post('http://localhost:9000/api/admin/register',{name,phone,email,password})
        .then((res)=>{
            console.log(res)
            if(res.data.success){
                alert('register Succussfull')
                nav('/login')
            }
            else{
                alert('Incorrect Detail')
            }
        })
        .catch((err)=>{
            console.log(err,2882828)
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
                <h2>Register</h2>
                <div className="name">
                    <p>Name</p>
                    <input name='name' onChange={(e)=>setName(e.target.value)} type="text" />
                </div>
                <div className="phone">
                    <p>Phone</p>
                    <input name='phone' onChange={(e)=>setPhone(e.target.value)} type="Number" />
                </div>
                <div className="Email">
                    <p>Email</p>
                    <input name='email' onChange={(e)=>setEmail(e.target.value)} type="text" />
                </div>
                <div className="Password">
                    <p>Password</p>
                    <input name='password' onChange={(e)=>setPassword(e.target.value)} type="password" />
                </div>
                <button className='btn btn-primary mt-3'>Register</button>
            </form>
        </div>
    )
}
