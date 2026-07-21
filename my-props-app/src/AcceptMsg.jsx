import React from 'react'

const AcceptMsg = ({recieveMsg}) => {
  return (
    <div>
            Msg from App : {recieveMsg()}
    </div>
  )
}

export default AcceptMsg
