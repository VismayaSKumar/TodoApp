import React from 'react'
import DisplayBox from './DisplayBox'
import { useState } from 'react'

function Foreground() {
const [task, setTask] = useState("")
const [mainTask, setMainTask] =useState([])

const submitHandler=(e)=>{
  e.preventDefault()
  if (task.trim() === "") {
    alert("Task cannot be empty!");
    return;
  }
  setMainTask([...mainTask,{text:task, completed:false}])
  setTask("");
}

const toggleTask=(index)=>{
 const updatedTask= mainTask.map((t,i)=>
  i===index? {...t, completed: !t.completed} : t 
)
setMainTask(updatedTask);
}

  return (
    <div className='h-screen w-full  z-[3] relative flex justify-center'>
        <div className='flex justify-center h-screen w-[430px] '>
            <p className='font-bold text-3xl absolute top-15 left-[29%] text-zinc-300'>T O D O</p>
            <div className='flex justify-between w-[40%] h-[50px] bg-zinc-800 absolute top-29 left-[29%] p-2 rounded text-zinc-100  '>
                <input className=' w-full  ' type="text" placeholder='Create a new todo...'
                value={task}
                onChange={(e)=>{setTask(e.target.value)}} 
                onKeyDown={(e) => e.key === "Enter" && submitHandler(e)}
                /> 
            </div>
            <DisplayBox tasks={mainTask} toggleTask={toggleTask} />
        </div>
    </div>
  )
}

export default Foreground