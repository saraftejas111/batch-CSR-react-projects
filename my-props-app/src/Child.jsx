import React from 'react'

const Child = ({sendMsg}) => {

  return (
    <div>
      <button onClick={()=>sendMsg("hello from child...")}>
        Send Msg to App
        </button>
    </div>
  )
}

export default Child
