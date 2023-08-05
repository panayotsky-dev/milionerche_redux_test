"use client";
import React, { useEffect, useRef, useState } from "react";
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
import Stats from "../components/Stats/Stats";
import { twMerge } from "tailwind-merge";
import useSound from "use-sound";

// type Props = {};

function page() {
  const dispatch = useDispatch();
  const rUrl = useSelector(selectUrl);
  const [currentLevel, setCurrentLevel] = useState(0); 
  const [currQ, setCurrQ] = useState({});
  const [pickedAnswer,setPickedAnswer] =useState()
//   const [answerIsCorrect] = useSound(correctAnswer)
//   const [answerIsIncorrect] = useSound(wrongAnswer)

  useEffect(() => {
    const dataFetch = async () => {
      //to replace staticUrl to rUrl
      const staticUrl =
        "https://opentdb.com/api.php?amount=15&category=9&difficulty=easy&type=multiple";
      //rUrl
      const data = await (await fetch(staticUrl)).json();

      const questionsWithId = data.results.map((question, index) => ({
        ...question,
        id: index + 1,
      }));
      const AnswersWithRandomIndexes = questionsWithId.map((question) => {
        const allAnswers = [
          ...question.incorrect_answers,
          question.correct_answer,
        ];
        mixArray(allAnswers);

        return {
          ...question,
          answers: allAnswers,
        };
      });
      dispatch(counterSlice.actions.addQuestions(AnswersWithRandomIndexes));
    };

    dataFetch();
  }, []);

  function mixArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }
  const questions = useSelector(selectQuestions);

  useEffect(() => {
    
    questions ? setCurrQ(questions[currentLevel]) : "";
    questions ? console.log(questions[currentLevel]) :""
    questions ? console.log(questions[currentLevel]?.correct_answer) :""
  }, [questions]);
 
  ;
  
  const audioRef = useRef(null);
const wrong = ''

    const handleSelectedAnswer = (e) =>{
        setPickedAnswer(e.target.innerHTML);
        
        console.log(e.target.innerHTML)
        
        
            setTimeout(() => {
                questions[currentLevel]?.correct_answer === e.target.innerHTML ? setCurrentLevel(currentLevel +1) : setCurrentLevel(0)
                
                setPickedAnswer(null)
                questions[currentLevel]?.correct_answer === e.target.innerHTML ? console.log('yes') : console.log('no')
            },4000)

    }

  return (
    <>
      <div
        className=" overflow-hidden w-full h-screen"
        // style={{
        //   backgroundImage: "url('./background01.webp')",
        // }}
      >
        <div className="grid grid-cols-3">
          <div className=" rounded-xl col-start-1 col-end-3 h-screen ">
            <div className="grid grid-rows-2">
              <div className="  h-full w-full ">zzzzz</div>
              <div className=" flex justify-center items-center mt-48">
                <div className="flex justify-center text-white overflow-hidden    w-full">
                  <div className="grid grid-cols-2 gap-8    mx-4 py-4  px-4">
                  {questions&& questions[currentLevel] ? (
                    <motion.div
                      key={currentLevel}
                      className="col-start-1 col-end-3 py-4 px-8 flex flex-col items-center text-center bg-cover rounded-xl hover:shadow-xl bg-[#18b49a] "
                      whileHover={{ scale: 1.1 }}
                      exit={{ opacity: 0, x: -100 }}
                      animate={{ opacity: 1, x: 0 }}
                      initial={{ opacity: 0, x: -100 }}
                    >
                      {questions[currentLevel].question}
                    </motion.div>
                    ) : (
                        ""
                      )}
                    {questions[currentLevel]?.answers && questions[currentLevel]?.answers.map((answer, index) => (
                    <motion.div 
                    key={index}
                    
                      className=" py-4 px-8 flex flex-col items-center text-center bg-cover rounded-xl hover:shadow-xl bg-[#3391cf] focus:animate-pulse "
                      whileTap={!pickedAnswer&&{scale:0.9,}}
                      whileHover={{ scale: 1.1 }}                      
                      exit={{ opacity: 0, x: -100 }}
                      animate={{ opacity: 1, x: 0,delay:`0.${5 + index}` }}
                      initial={{ opacity: 0, x: -100 }}
                      transition={{type:"spring",stiffness:150,}}
                      onClick={(e) => !pickedAnswer && handleSelectedAnswer(e)}
                    >
                      {answer}
                    </motion.div>
                    ))}
                   
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=" rounded-xl">
            <Stats level={currentLevel} />
          </div>
        </div>
      </div>
    </>
  );
}

export default page;