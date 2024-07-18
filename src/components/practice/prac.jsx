import React, { useMemo, useState } from 'react'

const Prac = () => {
    const[number,setNumber] = useState(0)
    const [dark,setDark] = useState(false)

       const doubleNumber =  useMemo(()=>{
                return slowFunction(number)
            },[number])
       const themeStyle = {
            backgroundColor : dark ? "black" : "white",
            color : dark ? "white" : "black"
    }
  return (
    <div>
        <input 
        type="number" 
        value={number}
        onChange={(e)=>setNumber(e.target.value)}
         />
         <button onClick={()=>setDark((curr)=> !curr)}>Toggle Theme
         </button>
         <div style={themeStyle}>{doubleNumber}</div>
    </div>
  )
}

export default Prac

function slowFunction(num){
    console.log(
        "running"
    );
    return num*2
}
