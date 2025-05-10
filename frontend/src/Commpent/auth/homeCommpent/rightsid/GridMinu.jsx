import React from 'react'
import { IoMdSearch } from 'react-icons/io'
import { gird_data } from '../date/Griddata'

const GridMinu = () => {
  return (
    < >
    <div className="bg-gray-200 px-10 py-3 top-full h-[80vh] overflow-y-scroll w-max -translate-x-full absolute"> 
      <h3 className='text-2xl font-bold '>Minu</h3>     
      
        <div className="grid  w-[600px] grid-cols-1 md:grid-cols-3  gap-4 ">
          <div className="md:col-span-2 bg-white p-5   ">
<div className='flex gap-1 items-center  bg-gray-300 p-2 rounded-full '>
<IoMdSearch size={20} />
<input type="text "placeholder='Sreach Mibu'   className='outline-0 '/>

</div>

<ol className='flex flex-col gap-2 unstyled my-4  '>

{gird_data?.map((item,index)=>{
  
  return <div key={index}>
    <li className='font-bold text-xl mb-3 capitalize text-gray-700'>
      {item?.title}
    </li>


    {item?.list?.map((item2,index2)=>{
      return <div className='flex gap-2 hover:bg-gray-200 p-2 rounded-md cursor-pointer ' key={index2}>
        <img src={item2.image} width={35} height={20} className='object-fill' alt="" />
        <div className='flex flex-col mb-2  '>
          <h3 className='font-semibold '>{item2.heading}</h3>
          <p className='text-gray-500 text-sm'>{item2.desc}</p>
        </div>

      </div>
    })}
   <hr  className='h-[1px] bg-gray-300 border-0'/>

  </div>
})}
 
</ol>

          </div>
          <div className="md:col-span-1 bg-pink-400 p-10 "></div>
        </div>
      </div>
   
      
    </ >
  )
}

export default GridMinu
