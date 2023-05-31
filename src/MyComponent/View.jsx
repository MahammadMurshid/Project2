import React, { useState } from 'react'
import Insert from './Insert'
import { Link } from 'react-router-dom'
import './All_style.css'
export default function View({ value, onDelete }) {
  const [del_t, setDelete] = useState([])
  //console.log(del_t, 'DELLLLLLL')
  return (
    <div className="view-Container">
      <h1><code style={{color:'Black'}}>Welcome to Small Basket</code> </h1>
      <h4>Add Product Detail  <Link to='/insert'><button className='btn btn-success '>Insert</button></Link></h4>
      <table className='table'>
        <thead>
          <tr>
            <th scope='col'>S.no</th>
            <th scope='col'>Name</th>
            <th scope='col'>Phone</th>
           {/*  <th>Product Id</th>
            <th>Customer</th>
            <th>Product Name</th>
            <th>Product Price</th>
            <th>Product Type</th>
            <th>Product Quantity</th>
            <th>Product Review</th>
            <th>Total Price</th> */}
            
            


            <th>View</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>

        </thead>
        <tbody>
          {value.length === 0 && 'no data'}
          {
            value.map((item, index) => {
              return (
                <tr>

                  <td>{index + 1}</td>
                  <td>{item.p_id}</td>
                  <td>{item.name}</td>
                  <td>{item.phone}</td>
                  {/* <td>{item.p_id}</td>
                  <td>{item.name}</td>
                  <td>{item.phone}</td>
                  <td>{item.p_id}</td>
                  <td>{item.name}</td>
                  <td>{item.phone}</td> */}


                  <td ><Link to={`/single-view/${item.p_id}`}><button className='btn  btn-primary'>View</button></Link></td>
                  <td ><Link to={`/edit/${item.p_id}`}><button className='btn  btn-success'>Edit</button></Link></td>
                  {/* <td ><button className='btn  btn-danger'  onClick={() => setDelete(item)}>Delete</button></td> */}
                  <td ><button className='btn  btn-danger' onClick={() => onDelete(item)}>Delete </button></td>

                </tr>
              )

            })
          }


        </tbody>

      </table>
    </div>
  )
}
