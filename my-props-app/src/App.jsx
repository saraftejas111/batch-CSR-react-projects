import React, { useState } from 'react'
import './App.css'
import Sum from './Sum';
import Difference from './Difference';
import Multiply from './Multiply';
import AcceptMsg from './AcceptMsg';
import EffectFromApp from './EffectFromApp';


const App = () => {

  const [a, setA] = useState(0)
  const [b, setB] = useState(0)



  const sendMsg = () => {
    return "Hello From Papa"

  }

  return (
    <div>
      <center>
        <h1>
          Welcome to my props app
        </h1>

        num1 : <input type="text" onChange={(e) => setA(Number(e.target.value))} /> <br /><br />
        num2 : <input type="text" onChange={(e) => setB(Number(e.target.value))} />

        <Sum x={a} y={b} />
        <Difference a={a} b={b} />
        <Multiply a={a} b={b} />

          <AcceptMsg recieveMsg={sendMsg}/>


      </center>
    </div>
  )
}

export default App
