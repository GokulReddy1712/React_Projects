import React, { useState } from 'react'

const Counter = () => {
    const[count,setCount] = useState(0)
    const multipleValue = count*2
    function Increament(){
        setCount(count+1)
    }
    console.log("rendering");
  return (
    <div>
        <h3>{count}</h3>
        <button onClick={Increament}>Increase</button>
        <h4>Multiplied valued is {multipleValue}</h4>
    </div>
    
  )
}

export default Counter