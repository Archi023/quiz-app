import React from 'react';
import '../index.css';
import { QuizData } from '../Data/QuizData';
import QuizResult from './QuizResult';
import { useState } from 'react';

const Quiz = () => {

  const [Questionno,setQuestionno] = useState(0);
  const [score,setScore] =useState(0);
  const [clickoptions,setClickoptions] =useState(0);
  const [showResult, setShowResult]=useState(false);

  const changeQuestion =()=>{
    updateScore();
    if(Questionno < QuizData.length-1){
        setQuestionno(Questionno + 1);
        setClickoptions(0);
        }
    else{ 
      setShowResult(true)
        
  }
}
const updateScore=()=>{
    if(clickoptions == QuizData[Questionno].answer)
        {
            setScore(score + 1);
    }
}

const resetAll=()=>{
    setShowResult(false);
    setQuestionno(0);
    setClickoptions(0);
    setScore(0);
}
  return (
    <>
  <center>
  <div className='container mt-5 bg-light' >
  {showResult ? (
    <center><QuizResult score={score} totalScore={QuizData.length} tryAgain={resetAll}/></center>
  ):(
<>
  <div className='question-container my-3'>
   {Questionno + 1 }{')'}.{QuizData[Questionno].question}
  </div>
  
    { QuizData[Questionno].options.map((options,i)=>{
        return(
        <>
        <button className={`options-container my-1 ${clickoptions==i+1?"checked":null}`} key ={i} onClick={()=>setClickoptions(i+1)}>{options}</button>
        </>)
    })}
    <button className='btn btn-primary my-5 float-end' onClick={changeQuestion}>Next</button>
    </>)}
  </div>

</center>
   </>
  )
}
export default Quiz;