import React from 'react'

const Arithmetic = () => {

    let a = 10;
    let b = 3;

    return (
        <div>


            <h2 id='sum'>sum = {a + b}</h2>
            <h2 id='diff'>diff = {a - b}</h2>
            <h2 id='mul'>mul = {a * b}</h2>

        </div>
    )
}

export default Arithmetic
