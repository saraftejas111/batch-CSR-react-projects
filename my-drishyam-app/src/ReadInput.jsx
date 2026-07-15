import React, { useState } from 'react'

const ReadInput = () => {

    const [name, setName] = useState('')

    const handleChange = (e) => {
        console.log(e.target.value)
        setName(e.target.value)

    }

    return (
        <div>
            <h3>Read Input </h3>
            name : <input type="text" onChange={handleChange} />
            <h3>Welcome... {name}</h3>
        </div>
    )
}

export default ReadInput
