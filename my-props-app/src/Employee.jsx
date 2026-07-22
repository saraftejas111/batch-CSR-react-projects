import React, { useEffect, useState } from 'react'

const Employee = ({ addEmp, acceptUpdate }) => {

    const [form, setForm] = useState({ id: '', name: '', salary: '' })

    useEffect(() => {

        if (acceptUpdate) {

            setForm(acceptUpdate)

        }
    }, [acceptUpdate])

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value })
    }

    const handleSumbit = (e) => {
        e.preventDefault();
        setForm({ id: '', name: '', salary: '' })
        addEmp(form)

    }

    return (
        <div>

            <h2>{acceptUpdate ? 'Update Employee Form' : 'Add Employee Form'}</h2>
            <form onSubmit={handleSumbit}>

                id : <input type="text" name='id' value={form.id} onChange={handleChange} required /> <br /><br />
                name : <input type="text" name='name' value={form.name} onChange={handleChange} required /> <br /><br />
                salary : <input type="text" name='salary' value={form.salary} onChange={handleChange} required /> <br /><br />

                <button>{acceptUpdate ? 'Update Employee' : 'Add Employee'}</button>
            </form>
        </div>
    )
}

export default Employee
