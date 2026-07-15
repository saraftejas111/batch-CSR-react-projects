import React, { useState } from 'react'

const MyCounter2 = () => {

    const [count, setCount] = useState(0)

    return (
        <div>
            <h2>New Count = {count}</h2>

            <button onClick={() => setCount(count + 1)}>
                plus
            </button> {" "}
            <button onClick={() => setCount(count - 1)}>
                minus
            </button> {" "}
            <button onClick={() => setCount(0)}>
                reset
            </button>
        </div>
    )
}

export default MyCounter2
