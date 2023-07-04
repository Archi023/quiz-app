import React from 'react';
import '../index.css';

const QuizResult = (props) => {
  return (
    
    <h2>Scope:{props.score} <br/>
    Total Score:{props.totalScore}
    
    </h2>
  )
}
export default QuizResult;
