import React, { useEffect, useState } from 'react'
import "./Clock.css"
const Clock = () => {

    const[hour,setHour] = useState(12)
    const [minute,setMinute] = useState(34)
    const [seconds,setSeconds] = useState(58)
  
    setInterval(()=>{
        setHour(new Date().getHours())
        setMinute(new Date().getMinutes())
        setSeconds(new Date().getSeconds())
    },1000)
    
  return (
    <div>Clock
        <br />
        <span>{hour>12?hour-12:hour}:</span>
        <span id='name'>{minute}:</span>
        <span id='name'>{seconds}</span>
        <span>{hour>12?"PM":"AM"}</span>
    </div>
  )
}

export default Clock