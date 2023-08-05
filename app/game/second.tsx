{/* <div className="flex justify-center text-white overflow-hidden  bg-slate-400 w-full">
<div className="grid grid-cols-2 gap-8  bg-cyan-500 mx-4 py-4 ">
  
  {currQ.question ? (
    <motion.div
      key={currentLevel}
      className="col-start-1 col-end-3 py-4 px-8 flex flex-col items-center text-center bg-cover rounded-xl hover:shadow-xl bg-[#ffffff81] "
      whileHover={{ scale: 1.1 }}
      exit={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      initial={{ opacity: 0, x: -100 }}
    >
      {currQ.question}
    </motion.div>
  ) : (
    ""
  )}
    {answers && answers.map((answer, index) => (
    <div
      key={index}
      className=" py-4 px-8 flex flex-col items-center text-center bg-cover rounded-xl hover:shadow-xl bg-[#ffffff81]"
      whileHover={{ scale: 1.1 }}
      exit={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      initial={{ opacity: 0, x: -100 }}
    >
      {answer}
    </div>
  ))}
  
</div>
</div> */}