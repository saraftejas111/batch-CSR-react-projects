import React, { useState } from 'react'

const ShowEmployee = ({ allemps  , handleDelete  , sendUpdate }) => {

    return (
        <div>
            <h2>All Employees</h2>
            <table border='2'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>NAME</th>
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
                                <td>{e.salary}</td>
                                <td>
                                    <button onClick={() => handleDelete(e.id)}>Delete</button> {" "}
                                    <button onClick={() => sendUpdate(e)}>Update</button> {" "}
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default ShowEmployee
