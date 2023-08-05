'use client'
import React, { useEffect, useState } from "react";
import {motion} from 'framer-motion'
import { CategorySelection, DifficultySelection, utilsTemplateUrl } from "@/app/utils/data";
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
  test,
  selectIsAuth,
  reduxStore,
  } from '@/lib/redux'
  import { redirect } from "next/navigation";
import Link from "next/link";

 
  

export default function CategoryDrop({}) {
    
    const dispatch = useDispatch()
    const rUsername = useSelector(selectUserName)
    const rUrl = useSelector(selectUrl)
    const isAuth = useSelector(selectIsAuth)
    const ddd = reduxStore.getState().counter.isAuth
    const [userName, setUsername] = useState("");
    const [category, setCategory] = useState("Choose Category");
    const [diff, setDiff] = useState("Choose a difficulty");
    const [buildUrl,setBuildUrl] = useState('')

    // const  formCollect = () => {
       
    //         console.log(userName)
    //         console.log(rUsername)
    //         console.log(ddd)
    //         //adding username  to redux and change isAuth to true
    //         dispatch(counterSlice.actions.setUser(userName))
    //         dispatch(counterSlice.actions.setAuth)      
    //     // adding url to Redux from user form
    //     if( category != "Choose Category"){
    //     category != 'any' 
    //         ? dispatch(counterSlice.actions.addUrl(utilsTemplateUrl.url + utilsTemplateUrl.categoryTemplate + category +'&' +utilsTemplateUrl.difficulty + diff + utilsTemplateUrl.multiple))
    //         : dispatch(counterSlice.actions.addUrl(utilsTemplateUrl.url  + utilsTemplateUrl.difficulty + diff + utilsTemplateUrl.multiple))
    //     }
        
        
    //  }  
     const  formSubmit =  (e:any) => {
        e.preventDefault()
        
        //adding username  to redux and change isAuth to true
        dispatch(counterSlice.actions.setUser(userName))
        dispatch(counterSlice.actions.setAuth)      
    // adding url to Redux from user form
    if( category != "Choose Category"){
    category != 'any' 
        ? dispatch(counterSlice.actions.addUrl(utilsTemplateUrl.url + utilsTemplateUrl.categoryTemplate + category +'&' +utilsTemplateUrl.difficulty + diff + utilsTemplateUrl.multiple))
        : dispatch(counterSlice.actions.addUrl(utilsTemplateUrl.url  + utilsTemplateUrl.difficulty + diff + utilsTemplateUrl.multiple))
    }
    
    redirect('/game')
 }  



  return (
    <motion.div className=" mt-48  mr-48 flex justify-center items-center "
    
        
        animate={{opacity:1,x:0,y:0}}        
        initial={{opacity:0}}       
        transition={{delay:0.}}
    >
      <form   onSubmit={(e) => formSubmit(e)} className=" rounded-xl px-4 my-4 flex flex-col w-[300px] bg-[#ffffff52]   font-normal text-md
    ">
        <motion.label className="my-2"
        
        animate={{opacity:1,x:0,y:0}}        
        initial={{opacity:0,x:-100}}       
        transition={{type:"spring",stiffness:300,delay:0.2}}
        >Enter your name:</motion.label>
        <input    
            
          required
          type="text"
          minLength={3}
          maxLength={20}
          className="bg-gray-50 px-4 rounded-md  "
          onChange={(e) => setUsername(e.target.value)}
        />
        <motion.label className="my-2" 
        animate={{opacity:1,x:0,y:0}}        
        initial={{opacity:0,x:-100}}       
        transition={{type:"spring",stiffness:350,delay:0.3}}
        >Choose a difficulty:</motion.label>
        <select
          key="difficulty"
          required
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-cyan-500 focus:border-cyan-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-cyan-500 dark:focus:border-cyan-500"
          onChange={(e) => setDiff(e.target.value)}
        >
          {DifficultySelection.map((selection) => (
            <option value={selection.value}>{selection.text}</option>
          ))}
        </select>
        <motion.label className="my-2"
        animate={{opacity:1,x:0,y:0}}        
        initial={{opacity:0,x:-100}}       
        transition={{type:"spring",stiffness:400,delay:0.35}}>Pick your best or any:</motion.label>
        <select
          
          name="trivia"
          required
          onChange={(e) => setCategory(e.target.value)}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-cyan-500 focus:border-cyan-500 block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-cyan-500 dark:focus:border-cyan-500"
        >
          {CategorySelection.map((category) => (
            <option value={category.value}>{category.text}</option>
          ))}
        </select>
        
        <button
         
          type="submit"
          
          
          className="rounded-xl border-yellow-500 px-4 my-10 items-center flex
           justify-center py-2   bg-blue-800 border-2 w-[200px]  text-white"
        >
          Become milionare
        </button>
        
        
      </form>
      
      
    </motion.div>
  )
}

