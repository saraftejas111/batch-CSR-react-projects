import React from 'react'

const Status = () => {

    let isActive = false; 

  return (
    <div>

        <h3>Status : {isActive ? "Online" : "Offline"}</h3>
      
    </div>
  )
}

export default Status
