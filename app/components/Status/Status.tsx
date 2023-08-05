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
            <motion.div className='bg-slate-400 mt-40 flex  px-2 py-2 rounded-xl'
            
                      whileHover={{ scale: 1.1 }}                      
                      exit={{ opacity: 0, x: -100 }}
                      animate={{ opacity: 1, x: 0, }}
                      initial={{ opacity: 0, x: -100 }}
                      transition={{type:"spring",stiffness:150,}}
                      >
                <div>
                    <motion.h1
                    whileHover={{ scale: 1.1 }}                      
                      exit={{ opacity: 0, x: -100 }}
                      animate={{ opacity: 1, x: 0, }}
                      initial={{ opacity: 0, x: -100 }}
                      transition={{type:"spring",stiffness:150,delay:0.3}}
                      >Hello, {user}</motion.h1>
                    <motion.h1
                    whileHover={{ scale: 1.1 }}                      
                      exit={{ opacity: 0, x: -100 }}
                      animate={{ opacity: 1, x: 0, }}
                      initial={{ opacity: 0, x: -100 }}
                      transition={{type:"spring",stiffness:250,delay:0.5}}
                      >You have won : $ {money}</motion.h1>
                    <motion.h1
                    whileHover={{ scale: 1.1 }}                      
                      exit={{ opacity: 0, x: -100 }}
                      animate={{ opacity: 1, x: 0, }}
                      initial={{ opacity: 0, x: -100 }}
                      transition={{type:"spring",stiffness:200,delay:0.7}}
                      >Answered questions: {answered}</motion.h1>
                </div>
                <div>
                    <a href='/'>
                <motion.button whileHover={{ scale: 1.1 }}  whileTap={{scale:0.95}}  className='rounded-xl bg-slate-600 text-green-500 px-4 py-2 items-center justify-center mx-4 flex mt-4 '> Try again</motion.button></a>
                </div>
                   
                
            </motion.div>
    </div>
  )
}

export default Status