import React, { useEffect, useState } from 'react'
import './App.css'
import Sum from './Sum';
import Difference from './Difference';
import Multiply from './Multiply';
import Child from './Child';
import Employee from './Employee';
import ShowEmployee from './ShowEmployee';

const App = () => {

  const [a, setA] = useState(0)
  const [b, setB] = useState(0)
  const [childmsg, setChildmsg] = useState('')
  const [emplist, setEmplist] = useState([])
  const [edit, setEdit] = useState(null)

  const handleMsg = (msg) => {
    setChildmsg(msg)
  }

  const deleteByID = (id) => {

    const newData = emplist.filter((e) => e.id != id)
    setEmplist(newData)
  }

  const handleUpdate = (e) => {
    setEdit(e)

  }

  const handleAdd = (emp) => {

    const newData = emplist.filter((e) => e.id != emp.id)

    setEmplist([...newData, emp])

    setEdit(null)
  }

  return (
    <div>
      <center>
        <h1>Welcome to my props app</h1>

        <Child sendMsg={handleMsg} />

        <h2>Msg From Child : {childmsg}</h2>

        <ShowEmployee allemps={emplist} handleDelete={deleteByID} sendUpdate={handleUpdate} />

        <Employee addEmp={handleAdd} acceptUpdate={edit} />

      </center>
    </div>
  )
}

export default App
