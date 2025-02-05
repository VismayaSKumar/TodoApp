import React from 'react'
import Box from './Box'

function DisplayBox({tasks, toggleTask}) {
  return (
    <div className=' z-[3] w-[40%] bg-zinc-800 absolute top-[180px] left-[29%] p-2 rounded text-zinc-100'>
          {
            tasks.length===0 ? (<div className='text-center text-zinc-400'>No tasks available</div>)
             :
             (tasks.map((task,index)=>(
              <div>
                <Box key={index} task={task} toggleTask={()=>toggleTask(index)} />
              </div>
            )))
          }
          
    </div>
  )
}

export default DisplayBox