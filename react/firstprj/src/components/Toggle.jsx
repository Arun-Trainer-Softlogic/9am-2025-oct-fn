import React, { useState } from 'react'

function Toggle() {

  const [isOn, setIsOn] = useState(false)

  const toggleHandler = () => {
    setIsOn(!isOn)
  }



  return (
    <div style={{border: "1px solid green", padding:"15px" , marginTop:"15px"}}>
      <h2>toggle Example </h2>



      <button onClick={toggleHandler} style={{ backgroundColor:isOn ? "green" :  "red"}}>
        {isOn ? "ON" : "OFF"}
      </button>
    </div>
  )
}

export default Toggle