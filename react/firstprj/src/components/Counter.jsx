import React, { useState } from 'react'

function Counter() {
    const [count , setCount] = useState(0)


    const increase =   () => {
        setCount(count + 1)
        
    }
    const decrease = () => {
        setCount(count - 1)
    }
    const reset = ()=> {
        setCount(0)
    }



  return (
   <>
   <div> 
    <h2>counter</h2>
    <h3>Count : {count}</h3>


    <button  onClick={increase}>++++</button>
    <button  onClick={decrease}>- - - </button>
    <button  onClick={reset}>RESET</button>
   </div>




   </>
  )
}

export default Counter