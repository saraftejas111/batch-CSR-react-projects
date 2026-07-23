import React, { useState } from 'react'
import './App.css'
import ShowEmployees from './ShowEmployees'
import EmployeeForm from './EmployeeForm'


const App = () => {

  const [ref , setRef] = useState(0)
  const [edit , setEdit] = useState(null)
  
  return (
    <div>
      <center>
        <h1>Welcome to my crud js</h1>

        <EmployeeForm addEmp={()=>{setRef(ref+1), setEdit(null)}} acceptEdit={edit}/>
        <ShowEmployees refresh={ref} updateEmployee={(e)=>setEdit(e)}/>

      </center>
    </div>
  )
}

export default App
