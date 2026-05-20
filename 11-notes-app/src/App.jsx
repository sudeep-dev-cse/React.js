import React, { useState } from 'react'

const App = () => {

    const [title, settitle] = useState('')
    const [detail, setdetail] = useState('')

  const [task, settask] = useState([])

  const submitHandler = (e) =>{
    e.preventDefault();

    const copytask =[...task];

    copytask.push({title,detail })
    

    settask(copytask)
    settitle('')
    setdetail('')
  }

const deletenote = (idx) =>{
const copytask = [...task];
copytask.splice(idx, 1);
settask(copytask);

}


  return (
    <div className='min-h-screen lg:flex  bg-black text-white'>

      
      <form  onSubmit={ (e)=>{       
        submitHandler(e)
      }

      } className=' p-10 gap-4 lg:w-1/2  flex  flex-col items-start '> 

      <h1 className='text-4xl font-bold'>Add Notes</h1>
       
       {/* PAHALA WALA INPUT */}
          <input
         type='text' 
         placeholder='Enter Notes Heading'
         className='px-5 w-full py-2 border-2  font-medium outline-none rounded'
         value={title}
         onChange={(e) => settitle(e.target.value)}
         />

  {/* Detailed WALA INPUT */}
        <textarea  
          className='px-5  w-full  h-32 py-2 border-2  font-medium outline-none rounded'
        placeholder='Enter Details'
        value={detail}
        onChange={(e)=> {setdetail(e.target.value)}}
        />

        <button 
        className='bg-white w-full active:scale-95 outline-none font-medium text-black px-5 py-2 rounded'
        >
          Add Notes
          </button>
      </form>

      <div className='flex-col lg:w-1/2   lg:border-l-2 p-10'>
            <h1 className='text-4xl font-bold'>Recent Notes</h1>

                 <div className='flex flex-wrap gap-5 mt-5  '>
                     {task.map(function(elem,idx){
                      return (
                    
                                <div  key={idx} className=" flex justify-between flex-col items-start relative h-52 w-40 bg-cover  rounded-xl text-black px-4 pt-9 pb-4 bg-[url('data:image/jpeg;base64,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')]">
                                      
                                      <div>
                                        <h3 className='leading-tight text-black text-lg font-bold'>{elem.title}</h3>
                                      <p className='mt-3 leading-tight lext-sm font-medium text-gray-500'>{elem.detail}</p>
                                      </div>
                                      <button  onClick = {()=>{
                                        deletenote(idx)
                                      }} className='w-full cursor-pointer active:scale-95 bg-red-400 text-xs rounded font-bold text-white '>Delete</button>
                                </div>
                      )
                     })}
                  </div>
      </div>
    </div>
  )
}

export default App
