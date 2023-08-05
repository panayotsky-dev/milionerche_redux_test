import React from 'react'
import { statsGame } from '@/app/utils/data' 



function Stats({level}:any) {
    
  return (
    <div className='grid grid-cols-1 bg-[#aaa8a852] rounded-xl mt-40 mr-40'>
        <div className=' h-[120px] flex flex-row  justify-center items-center '>
            <div className='px-4 py-4 mx-4 rounded-xl bg-slate-700 text-purple-500'>50/50</div>
            <div className='px-4 py-4 mx-4 rounded-xl bg-slate-700  text-purple-500'>Public</div>
            <div className='px-4  py-4 mx-4 rounded-xl bg-slate-700  text-purple-500'>Call a friend</div>
        </div>
        <div className='grid grid-cols-2 bg-[#aaa8a852] rounded-xl pb-2 '>
            <div className=' flex-col-reverse flex mx-4  justify-end items-end mr-8 '>
            {statsGame.map((id) => (
               id.id=== level+1?(
                <div className='text-red-400 rounded-xl bg-[#9730b193] px-2  animate-pulse'>{id.id}</div>
              ):       ( <div>{id.id}</div>)
                    ))}
            </div>
        
                <div className=' flex-col-reverse flex px-2 '>
                {statsGame.map((id) => (
                    id.id===5 || id.id===10 || id.id===15?(
                       level==6 && id.id===5?( <div className='text-green-500 rounded-xl bg-[#9e9c9cbe] w-24 px-2'>$ {id.price}</div>) : <div className='text-green-500 rounded-xl bg-[#f3f1f152] w-24 px-2'>$ {id.price}</div>
                    ):
                        <div className='rounded-xl  w-24 px-2'>$ {id.price}</div> 
                    ))}
                </div>
        </div>
    </div>
  )
}

export default Stats