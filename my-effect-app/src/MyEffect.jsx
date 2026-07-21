import React, { useEffect, useState } from 'react'

const MyEffect = () => {

    const [num1, setNum1] = useState(0)
    const [num2, setNum2] = useState(0)
    const [num3, setNum3] = useState(0)

    const greet = () => {
        console.log("Hello greet")
    }

    useEffect(() => {
        greet();
    },[num3])

    return (
        <div>
            <h3>
                My Effect
            </h3>

            <button onClick={() => setNum1(num1 + 1)}>Num 1</button> {" | "}
            <button onClick={() => setNum2(num3 + 1)}>Num 2</button> <br /><br />

            <>num2 : {num2}</>
        </div>
    )
}

export default MyEffect
