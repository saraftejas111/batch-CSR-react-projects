import React, { useState } from 'react'

const MyCounterApp = () => {

    const [count, setCount] = useState(0)

    const [num , setNum] = useState(1)

    const handleIncrease = () => {
        setCount(count + num)
    }
    const handleDecrease = () => {
        if (count > 0) {
            setCount(count - num)
        } else {
            alert("negative not allowed...")
        }
    }
    const handleReset = () => {
        if (count == 0) {
            alert("already at 0")
            return;
        }

        setCount(0)
    }

    const handleX = () => {
      
        if (num <= 3) {
              setNum(num+1)
        } else {
            setNum(1)
        }
    }

    return (
        <div>
            <h2>Count = {count}</h2>

            <button onClick={handleIncrease}>Increase</button> {" "} <button onClick={handleX}>{num}X</button> {" "}
            <button onClick={handleDecrease}>Decrease</button><br /><br />
            <button onClick={handleReset}>Reset</button>
        </div>
    )
}

export default MyCounterApp
