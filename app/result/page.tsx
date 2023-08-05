
import React from 'react'
import Status from '../components/Status/Status'
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
} from "@/lib/redux";
type Props = {}

function page({}: Props) {
  return (
    <div><Status /></div>
  )
}

export default page