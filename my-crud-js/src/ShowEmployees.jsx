import React, { useEffect, useState } from 'react'
import { deleteByID, showAllEmployees } from './db'

const ShowEmployees = ({refresh , updateEmployee}) => {

    const [allemps, setAllemps] = useState([])

    const loadEmployees = () => {
        setAllemps(showAllEmployees())
    }

    useEffect(() => {
        loadEmployees();
    }, [refresh])

    const handleDelete = (id) => {
        deleteByID(id);
        loadEmployees();
    }

    return (
        <div>

            <h2>All Employees</h2>
            <table border='2'>

                <thead>
                    <tr>
                        <th>ID</th>
                        <th>NAME</th>
                        <th>ROLE</th>
                        <th>SALARY</th>
                        <th>ACTIONS</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        allemps.map((e) => (
                            <tr key={e.id}>
                                <td>{e.id}</td>
                                <td>{e.name}</td>
                                <td>{e.role}</td>
                                <td>{e.salary}</td>
                                <td>
                                    <button onClick={() => handleDelete(e.id)}>Delete</button> {" "}
                                    <button onClick={()=> updateEmployee(e)}>Update</button> {" "}
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default ShowEmployees
