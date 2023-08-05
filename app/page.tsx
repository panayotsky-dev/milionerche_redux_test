'use client'
import { redirect } from 'next/navigation'
import CategoryDrop from './components/CategoryDrop/CategoryDrop'
import { Counter } from './components/Counter/Counter'
import React, { useEffect, useState } from "react";
import {
  counterSlice,
  useSelector,
  useDispatch,
  selectCount,
  incrementAsync,
  incrementIfOddAsync,
  selectQuestions,
selectUserName,
selectUrl,
selectIsAuth,
} from '@/lib/redux'
import { useStore } from 'react-redux';


export default function IndexPage() {
  
  const rUrl = useSelector(selectUrl)
  const auth = useSelector(selectUserName)
  useEffect(() => {
    if(auth != ""){
      redirect('/game')
    }
   
  }, [auth])
  
 
 
  return (
  <div className='h-screen w-full overflow-hidden '>
    
    <CategoryDrop />
    </div>
    )
}

export const metadata = {
  title: 'Redux Toolkit',
}
