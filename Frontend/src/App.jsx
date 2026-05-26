import React, { useState } from 'react'

const App = () => {

    const [title, setTitle] = useState('')
  const [task, setTask] = useState([])

 const onSubmithandler=(e)=>{
  e.preventDefault();
    
  const copyTask=[...task]

    copyTask.push({title})

    setTask(copyTask)

    setTitle('')

 }

  return (
    <div className='w-full min-h-screen bg-blue-600 flex justify-center items-start gap-5'>

      {/* your Task Page */}
    
      <div className='w-75 h-fit bg-gray-200 rounded-xl p-4 mt-5'>
      

        {/* Add Task Section */}

        

          <form className='w-full h-fit flex gap-2' onSubmit={(e)=>{
            onSubmithandler(e)
          }}>
          <input type="text" placeholder='Add new task...' className='w-full outline-0 border border-blue-300 py-2  px-3  rounded-md bg-white text-sm font-medium' value={title} onChange={(e)=>{
            setTitle(e.target.value);
          }}/>

          <button className='px-4 text-white rounded-md bg-blue-500 text-sm cursor-pointer active:opacity-80' onClick={(e)=>{
            addtask();
          }}>Add</button>
          </form>
          

          {/* Your Activity */}

          <div className='w-full h-fit flex justify-evenly items-center mt-5'>
            <button className='bg-blue-500 py-1 px-3 text-white text-sm text-center rounded-md cursor-pointer active:opacity-80'>All</button>
            <button className='bg-white py-1 px-3 text-black text-sm text-center rounded-md active:opacity-80 cursor-pointer'>Pending</button>
            <button className='bg-white py-1 px-3 text-black text-sm text-center rounded-md active:opacity-80 cursor-pointer'>Completed</button>
          </div>
          <div className='w-full flex justify-center items-center mt-5'>
            <button className='bg-red-500 text-white py-1 text-sm px-4 rounded-md cursor-pointer active:opacity-80'>Clear All Tasks</button>
          </div>

          {/* Percentage show */}

          <p className='mt-5 text-[11px] whitespace-nowrap'>You have 3 task(s) and you completed 33% out of 100%</p>
         
         {/* Your Task List */}

         <div className='flex flex-col mt-5 gap-2'>
          {task.map((elem,idx)=>{
            return <div className='w-full bg-white py-2 px-3 rounded-md flex justify-between items-center' key={idx}>
                <div className='flex gap-3'>
                  <input type="checkbox" className=' border-blue-500'/>
                  <p className='text-[12px]'>{elem.title}</p>
                </div>
                <span className='text-sm  bg-blue-100 px-2  text-center rounded-full cursor-pointer active:opacity-80'>⋮</span>
            </div>
          })}

          {/* percentage Bar */}

         <div className='flex justify-center items-center w-full'>
          <div className='w-45 h-3 bg-gray-300 rounded-2xl overflow-hidden'>
            <div className='w-15 h-full bg-green-400 rounded-2xl'></div>
          </div>
          </div>
         </div>

      </div>
    </div>
  )
}

export default App
