import React, { useEffect, useState } from 'react'
import './App.css'
import MyEffect from './MyEffect'

const App = () => {


  let [count, setCount] = useState(0)

  let [refresh, setRefresh] = useState(0)

  //  let [extra , setExtra] = useState(0)


  const heavyCode = () => {
    console.log("5000 employees loaded")
    // concern : sabse pehle baar chalna chahiye, woh bhi apne aap
    // par bar bar nahi chalna chahiye, app will crash
  }

  // heavyCode() ; 

  // useEffect(function , [] ) : 

  // useEffect(heavyCode)  // 1. useEffect with no depedency array or brackets will act like a normal function call


  // useEffect(heavyCode , [])  // 2. useEffect with empty dependency array will execute only at once at first render of coomponent

  //  useEffect(() => { heavyCode(); }, [])                  // 2. useEffect with empty dependency array will execute only at once at first render of coomponent

  const handleExtra = () => {
    console.log("handleExtra : ")
  }
  // useEffect(() => {
  //   heavyCode();
  //   }, [refresh ])    // 3. useEffect with dependency array element will execute at first render and as well as on everytime whenever the value of elements get changed




  return (
    <div>
      <center>
        <h1>
          My Effect App
        </h1>

        {/* <h2>
          Count : {count} <br />
          Ref : {refresh}
        </h2>

        <button onClick={() => setCount(count + 1)}>Increase</button> {" "}

        <button onClick={() => setRefresh(refresh + 1)}>delete</button> {" "}

        <button onClick={handleExtra}>extra</button> */}

        <MyEffect />
      </center>
    </div>
  )
}

export default App
