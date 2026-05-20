import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Card from './components/Card'

const App = () => {

const [UserData, setUserData] = useState([])

const [index, setindex] = useState(1)

const getData =async ()=>{

 const response =  await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=20`)
 setUserData(response.data)
}

useEffect(function(){
  getData()
}, [index])


let printUserdata = <h3 className='text-gray-500 font-semibold text-xs absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>Loading...</h3> 

if(UserData.length > 0){
printUserdata = UserData.map((elem,idx) => {
  return <div key={idx}>
   < Card elem={elem} />
  </div>
})
}

  return (
    <div className='bg-black min-h-screen overflow-auto p-4 text-white'>

<div className='grid grid-cols-5 gap-4 p-2'>
        {printUserdata}
      </div>
<div className='flex justify-center items-center p-4 gap-4'
>
      <button 
      onClick={()=>{
if(index >1)
        setindex(index-1)
        setUserData([])
         }}
      style={{opacity :index == 1?0.5:1}}
      className='bg-amber-400 text-black  cursor-pointer active:scale-95 text-sm rounded px-4 py-2 font-semibold'>
        Prev</button>
        <h4>Page {index}</h4>
       <button 
         onClick={()=>{
        setindex(index+1)
        setUserData([])
      }}

       className='bg-amber-400 text-black  cursor-pointer active:scale-95 text-sm rounded px-4 py-2 font-semibold'>
        Next</button>
    </div>
    </div>
  )

}
export default App
