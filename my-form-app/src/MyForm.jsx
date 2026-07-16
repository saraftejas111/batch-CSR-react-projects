import React, { useState } from 'react'

const MyForm = () => {

    // const [id, setId] = useState(0)
    // const [name, setName] = useState('')
    // const [salary, setSalary] = useState(0)

    const [obj, setObj] = useState({ id: '', name: '', salary: '' })

    // const handleId = (e)=>{
    //     setObj({...obj , id : e.target.value})
    // }
    // const handleName = (e)=>{
    //     setObj({...obj , name : e.target.value})
    // }
    // const handleSalary = (e)=>{
    //     setObj({...obj , salary : e.target.value})
    // }

    const handleChange = (e) => {

        const { name , value } = e.target ; 
        setObj({...obj , [name] : value})

      //   setObj({ ...obj, [e.target.name]: e.target.value })
    }

    const clearForm = () => {
        setObj({ id: '', name: '', salary: '' })

    }

    const handleForm = (e) => {
        e.preventDefault();
        // console.log("id : ", id)
        // console.log("name : ", name)
        // console.log("salary : ", salary)

        console.log(obj)

        clearForm();


    }
    return (
        <div>

            <h2>My Form</h2>

            <form onSubmit={handleForm}>
                id : <input type="text" name='id' value={obj.id} onChange={handleChange} /> <br /><br />
                name : <input type="text" name='name' value={obj.name} onChange={handleChange} /> <br /><br />
                salary : <input type="text" name='salary' value={obj.salary} onChange={handleChange} /> <br /><br />

                <button type='submit'>Submit Data</button>
            </form>

        </div>
    )
}

export default MyForm
