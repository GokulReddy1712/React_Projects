import React, { useEffect, useState } from 'react'
import "./Category.css"
const Category = () => {

    const [taskDescription,setTaskDescription] = useState("")
    const [ tasks,setTasks] = useState([])
    const onAdd = () => { 
        setTasks([...tasks,taskDescription])
    }
    const print = () => {
        console.log(tasks);
    }
    const onDelete = (index) => {
        const newTasks = tasks.filter((_, i) => i !== index);
        setTasks(newTasks);
    };
    useEffect(()=>{

    },[tasks])
  return (
    <div>
        <input onChange={(e)=>setTaskDescription(e.target.value)} value={taskDescription} type="text" placeholder='Enter the description'  />
        <select name="" id="">
            <option selected={true} value="">New Task</option>
            <option value="">In Progress</option>
            <option value="">In Review</option>
            <option value="">Completed</option>
        </select>
        <button onClick={onAdd}>Add</button>
        
        <button onClick={print}>Print</button>
        {
            tasks ? tasks.map((task,index)=>{

               return (
                <>
                    <br />
                    <span className='task' key={index} >{task}  </span> 
                    <button onClick={()=>onDelete(index)} key={index}>Delete </button>
                    <button key={index}>Edit </button>
                    <br />
               </>
               )
            }) :
            <></>
        }

    </div>
  )
}

export default Category