import React, { useEffect, useState } from 'react'
import { addEmployee, showAllEmployees, updateById } from './db';

const EmployeeForm = ({ addEmp, acceptEdit }) => {

    const [form, setForm] = useState({ id: '', name: '', role: '', salary: '' })

    useEffect(() => {

        if (acceptEdit) {
            setForm(acceptEdit)
        }
    }, [acceptEdit])

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (acceptEdit) {
            updateById(acceptEdit.id, form)
        } else {
            addEmployee(form);
        }
        addEmp(1)
        setForm({ id: '', name: '', role: '', salary: '' })


    }


    return (
        <div>
            <h2>{acceptEdit ? "Update Employee Form" : "Add Employee Form"}</h2>

            <form onSubmit={handleSubmit}>

                {
                    !acceptEdit && (
                        <>
                            id : <input type="text" name='id' value={form.id} onChange={handleChange} required /> <br /><br />
                        </>
                    )
                }
                name : <input type="text" name='name' value={form.name} onChange={handleChange} required /> <br /><br />
                role : <input type="text" name='role' value={form.role} onChange={handleChange} required /> <br /><br />
                salary : <input type="text" name='salary' value={form.salary} onChange={handleChange} required /> <br /><br />
                <button>
                    {acceptEdit ? "Update Employee" : "Add Employee"}
                </button>
            </form>
        </div>
    )
}

export default EmployeeForm
