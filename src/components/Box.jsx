import React from 'react'

function Box({task,toggleTask}) {

        return (
            <div className='border-b-[1px] flex items-center relative border-zinc-400 p-1 m-1'>
                <input type="checkbox"
                className='w-4 h-3 cursor-pointer accent-green-300 ' 
                onChange={toggleTask}
                checked={task.completed}
                />
                 <p className={` px-3 ${task.completed ? 'line-through text-gray-500' : 'text-white'}`}>
                    {task.text}
                </p>
            </div>
          )
    }
  


export default Box