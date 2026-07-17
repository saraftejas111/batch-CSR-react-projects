import React, { useState } from 'react'

const Student = () => {

    const [allstd, setAllstd] = useState([])

    const [std, setStd] = useState({ prn: '', name: '', email: '', m1: '', m2: '', m3: '' ,  total : ''  , percent: ''})

    const handleChange = (e) => {
        const { name, value , type } = e.target;

        setStd({ ...std, [name]: type == 'number' ? Number(value) : value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(std)
        
         // const t = Number(std.m1)+ Number(std.m2)+ Number(std.m3)

         const t = std.m1+std.m2+std.m3 ; 

         const p = ((t/300)*100).toFixed(2)

         const newStd = {...std , total: t , percent : p}

        setAllstd([...allstd , newStd])
        setStd({ prn: '', name: '', email: '', m1: '', m2: '', m3: '' , total : ''  , percent: ''})
    }

    return (
        <div>

            <form onSubmit={handleSubmit}>
                prn : <input type="text" name='prn' value={std.prn} onChange={handleChange} required /> <br /><br />
                name : <input type="text" name='name' value={std.name} onChange={handleChange} required /> <br /><br />
                email : <input type="text" name='email' value={std.email} onChange={handleChange} required /> <br /><br />
                m1 : <input type="number" name='m1' value={std.m1} onChange={handleChange} required /> <br /><br />
                m2 : <input type="number" name='m2' value={std.m2} onChange={handleChange} required /> <br /><br />
                m3 : <input type="number" name='m3' value={std.m3} onChange={handleChange} required /> <br /><br />
                <button>Add Student</button>
            </form>

            <h2>All Students</h2>

            <table border='2'>
                <thead>
                    <tr>
                        <th>PRN</th>
                        <th>NAME</th>
                        <th>EMAIL</th>
                        <th>M1</th>
                        <th>M2</th>
                        <th>M3</th>
                        <th>TOTAL</th>
                        <th>PERCENTAGE</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        allstd.map((s)=>(
                            <tr key={s.prn}>
                                  <td>{s.prn}</td>
                                  <td>{s.name}</td>
                                  <td>{s.email}</td>
                                  <td>{s.m1}</td>
                                  <td>{s.m2}</td>
                                  <td>{s.m3}</td>
                                  <td>{s.total}</td>
                                  <td>{s.percent}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Student
