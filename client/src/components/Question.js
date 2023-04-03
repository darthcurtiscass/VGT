import React, {useState} from 'react';
import { useMutation } from '@apollo/client';

import { Route, NavLink, Link, Routes } from 'react-router-dom';
import { ADD_RESULT } from '../utils/mutations';


//use state variable for i, instead of defining it as a specific index number.

const QuizList = ({ quiz, score, setScore }) => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [addResult, { error, data }] = useMutation(ADD_RESULT);

    console.log(quiz)

    const handleSelection = async (event) => {
        // console.log(event.target.textContent)
        console.log(quiz.questions)
        if (event.target.textContent === quiz.questions[currentQuestion].answer) {
            console.log("correct!")
            setCurrentQuestion(currentQuestion+1)
            setScore(score+1)
            } else {
                setCurrentQuestion(currentQuestion+1)
            }
            try {
                await addResult({
                  variables: { score },
                });
              } catch (err) {
                console.error(err);
              }
            
    };


  // if (!quiz.length) {
  //   return <h3>No Thoughts Yet</h3>;
  // }  
  // document.getElementById("next").addEventListener("click", i++)
  return (
    <div key={quiz.id}>

          <div className="card mb-3">
            <h4 className="card-header bg-primary text-light p-2 m-0 bg-dark">
              {quiz.quizName} <br />
            </h4>
            {quiz.questions[currentQuestion].question}
            {quiz.questions[currentQuestion].options.map((options) => (

              <div onClick={handleSelection} key={options}>
                
                  {options}
              <br />
              </div>
            ) )}
          </div>

    </div>
  );

};

export default QuizList;