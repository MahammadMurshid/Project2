import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export default function Edit({value,onEdit}) {
    let navigate=useNavigate()
    const param=useParams()
    const [single,setSingle]=useState('')

    const [name,setName]=useState('')
    const [phone,setPhone]=useState('')

    useEffect(()=>{
        return(
            setSingle(Object.assign({},...(value.filter((e)=>e.p_id==param.id))))
        )
    },[])
    let index=(value.findIndex((e)=>e.p_id==param.id))

    const editSubmit=(e)=>{
        e.preventDefault()
        onEdit(single,index)
        navigate('/')
    }
    console.log(param.p_id)
    console.log(index)

    const OnChange=(e)=>{
        setSingle({...single,[e.target.name]:e.target.value})
        console.log(single)
    }

    /* const Submit=(e)=>{
        e.preventDefault()
        navigate('/')
    } */
  return (
    <div className='Edit-Container text-center'>
            <form onSubmit={editSubmit} method='post'>
                {/* <div className="id">
                    <p>Id</p>
                    <input type="text" name='id' value={single
                    .pid} onChange={OnChange} />
                </div> */}
                <h3>Edit Form</h3>
                <div className="name">
                    <p>Name</p>
                    <input type="text" name='name' value={single
                    .name} onChange={OnChange} />
                </div>
                <div className="phone">
                    <p>Phone</p>
                    <input type="Number" name='phone'  value={single
                    .phone} onChange={OnChange} />
                </div>
                <button className='btn btn-primary mt-3'>Submit</button>
            </form>
        </div>
  )
}
