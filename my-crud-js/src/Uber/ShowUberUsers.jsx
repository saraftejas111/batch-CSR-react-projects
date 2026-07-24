import React, { useEffect, useState } from 'react'
import { deleteUberByID, showAllUberUsers } from './uberdb'

const ShowUberUsers = ({added , updateUberUser}) => {

    const [alluberusers, setAlluberusers] = useState([])

    const loadUberUsers = () => {
        setAlluberusers(showAllUberUsers())
    }

    useEffect(() => {
        loadUberUsers();
    }, [added])

    const handleDelete = (id) => {
        deleteUberByID(id);
        loadUberUsers();
    }


    return (
        <div>
            <h2>All Uber Users</h2>
            <table border='2'>

                <thead>
                    <tr>

                        <th>ID</th>
                        <th>NAME</th>
                        <th>PICK</th>
                        <th>DROP</th>
                        <th>DIST IN KM</th>
                        <th>CAB TYPE</th>
                        <th>TOTAL FARE</th>
                        <th>ACTIONS</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        alluberusers.map((e) => (
                            <tr key={e.id}>
                                <td>{e.id}</td>
                                <td>{e.name}</td>
                                <td>{e.pick}</td>
                                <td>{e.drop}</td>
                                <td>{e.dist}</td>
                                <td>{e.cab}</td>
                                <td>{e.fare}</td>
                                <td>
                                    <button onClick={() => handleDelete(e.id)}>Delete</button> {" "}
                                    <button onClick={()=> updateUberUser(e)}>Update</button> {" "}
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default ShowUberUsers
