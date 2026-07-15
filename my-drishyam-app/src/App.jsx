
import { useState } from 'react';
import './App.css'
import MyCounterApp from './MyCounterApp';
import MyCounter2 from './MyCounter2';
import ReadInput from './ReadInput';
import GenTable from './GenTable';

function App() {

  let name = "Tejas";

  let count = 0 ; 

  const [ucount , setUcount] = useState(0)
  const [bcount , setBcount] = useState(1)

  const increaseCount = () => {
    count++;
    setUcount(ucount+1)
    console.log("count = " , count)
    console.log("ucount = " , ucount)
  }
  const decreaseCount = () => {
   
   if (ucount > 0) {
     setUcount(ucount-1)
   } else {
    alert("negative not allowed...")
   }
    
  }

  function greet() {
    console.log("Hello from Greet..")
    return "Hello from Greet..";
  }

  const handleBcount = () => {
    setBcount(bcount+1)
  }

  return (
    <>
      <h1>Welcome .... {name}</h1>

      <GenTable/>

      {/* <ReadInput/> */}

      {/* <MyCounterApp/> */}

      {/* <MyCounter2/> */}

      {/* <h2>Sum = {5 + 5}</h2> */}

      {/* <h3>{greet()}</h3> */}

      {/* <button onClick={greet}>Greet me</button> <br /><br />

      <button onClick={increaseCount}>Increase count</button> {" "} <button onClick={handleBcount}>{bcount}x</button><br /><br />
      <button onClick={decreaseCount}>Decrease count</button> <br /><br />
      <button onClick={() => setUcount(0)}>RESET count</button>

      <h4>count : {count}</h4>

      <h4>ucount : {ucount}</h4> */}
    </>
  )
}

export default App
