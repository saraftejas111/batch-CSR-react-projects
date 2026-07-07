import './App.css'
import Arithmetic from './Arithmetic';
import Status from './Status';

function App() {

  let name = 'kiran';

  let isActive = true ; 


  let tka = "Pune" ;



  // let aaaa = if (tka == "pune") {
  //         a+b
  //       } else {
  //         a-b
          
  //       }

        let marks = 22 ; 
        //let grade = marks >= 90 ? "A" : "B" ; 

  return (

    <div>

      <h1>Welcome to my app</h1>

      <Arithmetic/>

      <Status/>

    </div>
  )
}

export default App


// root component

// JSX = Javascript xml 

// In JSX we can write JS code alongwith html code or inside html code