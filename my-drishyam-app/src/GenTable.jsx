import React, { useState } from 'react'

const GenTable = () => {

    const [num, setNum] = useState(null)

    const handleNum = (e) => {
        setNum(e.target.value)
    }

    return (
        <div>
            num = <input type="number" onChange={handleNum} />


            <h2>Table</h2>

            {
                num &&

                <h4>{num} * 1 = {num * 1}</h4>

            }


        </div>
    )
}

export default GenTable
