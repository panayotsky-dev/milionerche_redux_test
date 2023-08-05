'use client'
import React from 'react'
import { motion } from "framer-motion";

 
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
  addMoney,
  levelUp,
} from "@/lib/redux";
import { Link } from 'react-router-dom';
type Props = {}

function Status({}: Props) {

    const user = useSelector(selectUserName)
    const answered = useSelector(levelUp)
    const money = useSelector(addMoney)
  return (
    <div className="w-full flex flex-col justify-center items-center h-full" >
            <motion.div className='bg-slate-400 mt-40 flex  px-2 py-2 rounded-xl'>
                <div>
                    <h1>Hello, {user}</h1>
                    <h1>You have won : {money}</h1>
                    <h1>Answered questions: {answered}</h1>
                </div>
                <div>
                <button className='rounded-xl bg-slate-600 text-green-500 px-4 py-2 items-center justify-center mx-4 flex mt-4 '> Try again</button>
                </div>
                   
                
            </motion.div>
    </div>
  )
}

export default Status