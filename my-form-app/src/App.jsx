import { useState } from 'react'
import './App.css'
import MyComp from './MyComp'
import MyForm from './MyForm'
import MovieTicketBookingForm from './MovieTicketBookingForm'
import Student from './Student'

const App = () => {

  const [name, setName] = useState('')
  return (
    <div>
      <center>

        <h1> Welcome to my Form</h1>

        <Student/>
        <MyComp />

        <MyForm/>

        <MovieTicketBookingForm/>

        <h3>onClick -- button -- exectues a function when button is clicked..</h3>
        <h3>onChange -- input -- exectues a function when input box gets change (also returns the value of input box)</h3>
        <h3>onSubmit -- form -- exectues a function when form is gets submitted ( preventDefault() )</h3>



      </center>
    </div>
  )
}

export default App
