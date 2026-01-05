import { useState } from "react"


function ToggleMessage() {

   const [show, setShow] =  useState(false);

  return (
    <div>

        <button onClick={()=> setShow(!show)}>
            Toggle Message </button> 


            {show && <p>Hello ! You Toggled me !</p>}
    </div>
  )
}

export default ToggleMessage