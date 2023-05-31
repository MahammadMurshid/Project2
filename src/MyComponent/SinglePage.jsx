import React, { useEffect, useState } from 'react'
import './All_style.css'
import Image from '../logo.svg'
import { Link, useParams, } from 'react-router-dom'
export default function SinglePage({ value }) {
    const [single, setSingle] = useState([])
    const param = useParams()
    useEffect(() => {
        setSingle(value.filter((e) => e.p_id == param.id))
    }, [])
    console.log(single)
    return (
        <>
            <div className='single'>
                {single.map((item) => {
                    return (
                        <div className="card" style={{ width: "18rem" }}>
                            <img src={Image} className="card-img-top" alt="...no image" />
                            <div className="card-body">
                                <h5 className="card-title">Person ID : {item.p_id}</h5>
                                <h5 className="card-title">Name : {item.name}</h5>
                                <h5 className="card-title">Phone : {item.phone}</h5>


                                <Link to="/" className="btn btn-primary">Go Back</Link>
                            </div>
                        </div>
                    )
                })}

            </div>
        </>
    )
}
