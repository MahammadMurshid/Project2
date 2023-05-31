import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Insert({onSubmit}) {
    //const [id,setId]=useState('')
    const [name,setName]=useState('')
    const [phone,setPhone]=useState('')
    let navigate=useNavigate()
    const Submit=(e)=>{
        e.preventDefault()
        navigate('/')
        onSubmit(name,phone)
        
        
    }
   // console.log(name)
    return (

        <div className=' insert Insert-Container text-center'>
            <form onSubmit={Submit}>
                {/* <div className="id">
                    <p>Person_id</p>
                    <input onChange={(e)=>setId(e.target.value)} type="text" />
                </div> */}
                <h3>Insert Form</h3>
                <div className="name">
                    <p>Name</p>
                    <input onChange={(e)=>setName(e.target.value)} type="text" />
                </div>
                <div className="phone">
                    <p>Phone</p>
                    <input onChange={(e)=>setPhone(e.target.value)} type="Number" />
                </div>
                <button className='btn btn-primary mt-3'>Submit</button>
            </form>
        </div>
    )
}
