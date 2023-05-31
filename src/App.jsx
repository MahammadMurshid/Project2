
import View from './MyComponent/View';
import Insert from './MyComponent/Insert';
import Edit from './MyComponent/Edit';
import SinglePage from './MyComponent/SinglePage';
import Register from './MyComponent/Register';
import Login from './MyComponent/Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './MyComponent/All_style.css'
import React, { useEffect, useState } from 'react';
function App() {
  let initvalue;
  if (localStorage.getItem('Person') === null) {
    initvalue = []
  }
  else {
    initvalue = JSON.parse(localStorage.getItem('Person'))
  }



  const onSubmit = (name, phone) => {
    //console.log(name, phone)
    let p_id = 100;
    if (value.length == 0) {
      p_id = 100;
    }
    else {
      p_id = value[value.length - 1].p_id + 1
    }
    const Detail = {
      p_id: p_id,
      name: name,
      phone: phone,
    }
    
    setValue([...value, Detail])
    localStorage.setItem('Person', JSON.stringify(value))
  }
  const onDelete = (item) => {
    console.log('Deletiing', JSON.stringify(item))
    setValue(value.filter((e) => {
      console.log(e)
      return e !== item
    }))
    localStorage.setItem('Person', JSON.stringify(value))
  }
  const onEdit = (val, index) => {
    console.log(val)
    console.log(index)
    console.log(value.splice(index, 1, val))
    localStorage.setItem("Person", JSON.stringify(value))
  }
  const [value, setValue] = useState(initvalue)
  useEffect(() => {
    localStorage.setItem("Person", JSON.stringify(value))
  }, [value])
  return (
    <>
      <div className="App">
        <div className="container">
          <BrowserRouter>
            <Routes>
              <Route exact path='/' element={<View value={value} onDelete={onDelete} />} />
              <Route exact path='/register' element={<Register/>} />
              <Route exact path='/login' element={<Login/>} />
              <Route exact path='/insert' element={<Insert onSubmit={onSubmit} />} />
              <Route exact path='/single-view/:id' element={<SinglePage value={value} />} />
              <Route exact path='/edit/:id' element={<Edit value={value} onEdit={onEdit} />} />
            </Routes>
          </BrowserRouter>
        </div>
      </div>
    </>
  )
}

export default App;
