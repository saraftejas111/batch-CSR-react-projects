import React, { useState } from 'react'
import './App.css'
import ShowEmployees from './ShowEmployees'
import EmployeeForm from './EmployeeForm'
import ShowUberUsers from './Uber/ShowUberUsers'
import UberUserForm from './Uber/UberUserForm'


const App = () => {

  const [ref, setRef] = useState(0)
  const [edit, setEdit] = useState(null)

  const [addUber , setAddUber] =useState(0)
  const [editUber , setEditUber] =useState(null)

  


  return (
    <div>
      <center>
        <h1>Welcome to my crud js</h1>

        <UberUserForm uberAdded={(e)=>setAddUber(addUber+e)} acceptUber={editUber}/>

        <ShowUberUsers added={addUber} updateUberUser={(e)=>setEditUber(e)}/>


        <br /><br />

        <EmployeeForm addEmp={() => { setRef(ref + 1), setEdit(null) }} acceptEdit={edit} />
        <ShowEmployees refresh={ref} updateEmployee={(e) => setEdit(e)} />

      </center>
    </div>
  )
}

export default App
